import { ReactNode } from "react";

const ButtonSpan = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`bg-[#E8F4FF]  px-4 py-2 w-fit rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default ButtonSpan;
