import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

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
    "px-4 lg:px-6 py-2 rounded-4xl text-xs lg:text-base cursor-pointer transition-all ease-in duration-200";
  const variants = {
    primary:
      "bg-[#A1896D] text-[#FBFDFF] hover:bg-[#E8F4FF] hover:text-[#033E6E]",
    secondary: "bg-[#E8F4FF] text-[#033E6E] hover:bg-[#033E6E] hover:text-[#E8F4FF]",
    tertiary:
      "bg-[#E8F4FF] text-[#033E6E] hover:bg-[#033E6E] hover:text-[#E8F4FF]",
    ghost:
      "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
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
