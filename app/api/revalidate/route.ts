import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const secret = request.headers.get("x-revalidate-secret");

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