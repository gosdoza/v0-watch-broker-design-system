"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300",
  {
    variants: {
      status: {
        // 上架中 - Active (Green Ring)
        active: [
          "bg-[rgba(34,197,94,0.1)]",
          "text-[#22C55E]",
          "ring-1 ring-[#22C55E]",
          "shadow-[0_0_10px_rgba(34,197,94,0.2)]",
        ],
        // 議價中 - Negotiating (Blue Ring)
        negotiating: [
          "bg-[rgba(59,130,246,0.1)]",
          "text-[#3B82F6]",
          "ring-1 ring-[#3B82F6]",
          "shadow-[0_0_10px_rgba(59,130,246,0.2)]",
        ],
        // 已保留 - Reserved (Orange Ring)
        reserved: [
          "bg-[rgba(249,115,22,0.1)]",
          "text-[#F97316]",
          "ring-1 ring-[#F97316]",
          "shadow-[0_0_10px_rgba(249,115,22,0.2)]",
        ],
        // 已成交 - Sold (Gray Ring)
        sold: [
          "bg-[rgba(107,114,128,0.1)]",
          "text-[#6B7280]",
          "ring-1 ring-[#6B7280]",
        ],
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      status: "active",
      size: "default",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  showDot?: boolean
}

// Status label mapping for Traditional Chinese
const statusLabels: Record<string, string> = {
  active: "上架中",
  negotiating: "議價中",
  reserved: "已保留",
  sold: "已成交",
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, size, showDot = true, children, ...props }, ref) => {
    const label = children || (status ? statusLabels[status] : "")
    
    return (
      <span
        ref={ref}
        className={cn(statusBadgeVariants({ status, size, className }))}
        {...props}
      >
        {showDot && (
          <span
            className={cn(
              "size-1.5 rounded-full animate-pulse",
              status === "active" && "bg-[#22C55E]",
              status === "negotiating" && "bg-[#3B82F6]",
              status === "reserved" && "bg-[#F97316]",
              status === "sold" && "bg-[#6B7280]"
            )}
            aria-hidden="true"
          />
        )}
        {label}
      </span>
    )
  }
)
StatusBadge.displayName = "StatusBadge"

export { StatusBadge, statusBadgeVariants }
