import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Since I don't have radix-ui/react-slot or cva installed yet, I will implement a simpler version first
// actually, I should stick to standard React props for now to avoid dependency hell if I can't install everything.
// But I can install cva.

// Let's stick to a simple Button component for now without CVA to save time on installs, 
// or I can just install them. The prompt said "Use popular and existing libraries".
// I'll install cva and radix-ui/react-slot for better component structure.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold" | "danger";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-legacy-green-700 text-white hover:bg-legacy-green-600 border border-legacy-gold-500/30",
      gold: "bg-gradient-to-r from-legacy-gold-500 to-legacy-gold-400 text-legacy-black font-bold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-300",
      outline: "border border-legacy-gold-500 text-legacy-gold-400 hover:bg-legacy-gold-500/10",
      ghost: "hover:bg-white/10 text-white",
      danger: "bg-legacy-error text-white hover:bg-red-900",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
