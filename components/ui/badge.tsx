import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-main text-white",
    secondary: "bg-grey-100 text-grey-700",
    outline: "border border-blue-main/30 text-blue-main bg-blue-main/5",
    success: "bg-green-500 text-white",
    warning: "bg-orange-main text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}