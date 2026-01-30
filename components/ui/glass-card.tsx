"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "relative rounded-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: [
          "bg-[rgba(255,255,255,0.03)]",
          "backdrop-blur-xl",
          "border border-[rgba(100,116,139,0.2)]",
        ],
        elevated: [
          "bg-[rgba(255,255,255,0.05)]",
          "backdrop-blur-xl",
          "border border-[rgba(100,116,139,0.3)]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        ],
        interactive: [
          "bg-[rgba(255,255,255,0.03)]",
          "backdrop-blur-xl",
          "border border-[rgba(100,116,139,0.2)]",
          "hover:border-[rgba(201,169,98,0.4)]",
          "hover:shadow-[0_0_30px_rgba(201,169,98,0.15)]",
          "hover:-translate-y-1",
          "cursor-pointer",
        ],
        gold: [
          "bg-[rgba(201,169,98,0.05)]",
          "backdrop-blur-xl",
          "border border-[rgba(201,169,98,0.3)]",
          "shadow-[0_0_20px_rgba(201,169,98,0.1)]",
        ],
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, padding, className }))}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

// Glass Card Header
const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pb-4 border-b border-[rgba(100,116,139,0.2)]", className)}
    {...props}
  />
))
GlassCardHeader.displayName = "GlassCardHeader"

// Glass Card Title
const GlassCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-serif text-xl font-semibold text-[#F5F5F5]", className)}
    {...props}
  />
))
GlassCardTitle.displayName = "GlassCardTitle"

// Glass Card Description
const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#94A3B8] mt-1", className)}
    {...props}
  />
))
GlassCardDescription.displayName = "GlassCardDescription"

// Glass Card Content
const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pt-4", className)}
    {...props}
  />
))
GlassCardContent.displayName = "GlassCardContent"

// Glass Card Footer
const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("pt-4 mt-4 border-t border-[rgba(100,116,139,0.2)] flex items-center gap-3", className)}
    {...props}
  />
))
GlassCardFooter.displayName = "GlassCardFooter"

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  glassCardVariants,
}
