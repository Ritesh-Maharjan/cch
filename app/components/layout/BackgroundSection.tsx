import { ReactNode } from "react";

type BackgroundVariant = "gradient" | "none";

interface BackgroundSectionProps {
    children: ReactNode;
    className?: string;
    variant?: BackgroundVariant;
}

const variantClasses: Record<BackgroundVariant, string> = {
    gradient: "bg-[linear-gradient(to_bottom,#0C2438_0%,#194B75_50%,#F9FCFF_100%)]",
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