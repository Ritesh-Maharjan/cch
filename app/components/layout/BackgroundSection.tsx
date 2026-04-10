import { ReactNode } from "react";

type BackgroundVariant = "gradient" | "none";

interface BackgroundSectionProps {
    children: ReactNode;
    className?: string;
    variant?: BackgroundVariant;
}

const variantClasses: Record<BackgroundVariant, string> = {
    gradient: "bg-[linear-gradient(to_bottom,var(--color-navy-dark)_0%,var(--color-navy-mid)_50%,var(--color-blue-pale)_100%)]",
    none: "",
};

export default function BackgroundSection({
    children,
    className = "",
    variant = "gradient",
}: BackgroundSectionProps) {
    const classes = [
        "flex flex-col px-2 md:px-4 min-h-screen w-screen",
        variantClasses[variant],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return <section className={classes}>{children}</section>;
}