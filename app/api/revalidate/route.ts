import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

async function getIncomingSecret(request: NextRequest): Promise<string | null> {
    const headerSecret = request.headers.get("x-revalidate-secret");
    if (headerSecret) return headerSecret;

    const querySecret = request.nextUrl.searchParams.get("secret");
    if (querySecret) return querySecret;

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
        try {
            const body = (await request.json()) as { secret?: string };
            return body.secret ?? null;
        } catch {
            return null;
        }
    }

    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
        try {
            const form = await request.formData();
            const formSecret = form.get("secret");
            return typeof formSecret === "string" ? formSecret : null;
        } catch {
            return null;
        }
    }

    return null;
}

export async function POST(request: NextRequest) {
    const secret = await getIncomingSecret(request);

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        revalidatePath("/");
        revalidatePath("/portfolio");

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (error) {
        console.error("Revalidation error:", error);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}