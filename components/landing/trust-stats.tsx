"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StatItemProps {
  value: string
  label: string
  suffix?: string
}

function StatItem({ value, label, suffix }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8">
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">
          {value}
        </span>
        {suffix && (
          <span className="text-lg sm:text-xl text-[#C9A962]">{suffix}</span>
        )}
      </div>
      <span className="text-xs sm:text-sm text-[#64748B] mt-1 tracking-wide">{label}</span>
    </div>
  )
}

interface TrustStatsProps {
  className?: string
}

export function TrustStats({ className }: TrustStatsProps) {
  return (
    <section
      className={cn(
        "relative py-8 sm:py-10 border-y border-[rgba(100,116,139,0.15)]",
        "bg-gradient-to-r from-[rgba(5,5,5,0.9)] via-[rgba(201,169,98,0.03)] to-[rgba(5,5,5,0.9)]",
        className
      )}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(201,169,98,0.05)] to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-[rgba(100,116,139,0.2)]">
          <StatItem
            value="NT$ 50,000,000"
            suffix="+"
            label="累積成交金額"
          />
          <StatItem
            value="100"
            suffix="+"
            label="合作實名錶商"
          />
          <StatItem
            value="24"
            suffix="小時"
            label="平均成交時間"
          />
        </div>
      </div>
    </section>
  )
}
