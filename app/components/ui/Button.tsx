import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseline =
    "px-4 lg:px-6 py-2 rounded-4xl text-xs lg:text-base cursor-pointer transition-all ease-in duration-200 uppercase tracking-wide";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-gold text-off-white hover:bg-blue-light hover:text-blue-deep",
    secondary: "bg-blue-light text-blue-deep hover:bg-blue-deep hover:text-blue-light",
  };

  return (
    <button
      className={`${baseline} ${variants[`${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
