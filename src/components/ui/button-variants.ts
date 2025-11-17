import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-cyan text-background shadow-glow hover:bg-cyan-glow hover:text-background",
        primary: "bg-cyan text-background shadow-glow hover:bg-cyan-glow hover:text-background",
        secondary: "bg-white/5 text-foreground border border-white/10 hover:text-cyan hover:border-cyan/60",
        outline: "border border-white/25 text-foreground hover:border-cyan hover:text-cyan",
        ghost: "text-foreground/80 hover:text-cyan hover:bg-white/5",
        gradient:
          "isolate bg-gradient-to-r from-cyan to-blue-500 text-background shadow-[0_18px_45px_rgba(15,188,255,0.45)] hover:shadow-[0_25px_60px_rgba(15,188,255,0.55)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r from-white/40 to-transparent before:opacity-0 before:blur-3xl before:transition-opacity hover:before:opacity-100",
        cta:
          "border border-cyan/60 text-cyan bg-transparent shadow-[0_0_35px_rgba(15,188,255,0.25)] hover:text-background hover:bg-gradient-to-r hover:from-cyan hover:to-blue-500 hover:shadow-[0_0_45px_rgba(15,188,255,0.4)]",
        outlineGlow:
          "border border-cyan/15 text-foreground/75 bg-transparent shadow-[0_0_14px_rgba(15,188,255,0.1)] hover:border-cyan/40 hover:text-foreground hover:bg-gradient-to-r hover:from-cyan/35 hover:to-blue-500/25 hover:shadow-[0_0_20px_rgba(15,188,255,0.18)]",
        destructive: "bg-red-600 text-white hover:bg-red-500",
        link: "text-cyan underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

