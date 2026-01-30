"use client"

import * as React from "react"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

interface FinalCtaSectionProps {
  className?: string
}

export function FinalCtaSection({ className }: FinalCtaSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#050505]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[rgba(201,169,98,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[rgba(201,169,98,0.3)] to-transparent" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-[rgba(201,169,98,0.03)] blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-[rgba(201,169,98,0.1)] to-[rgba(201,169,98,0.05)] border border-[rgba(201,169,98,0.2)] mb-8">
          <svg className="size-8 text-[#C9A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] mb-6 text-balance">
          您的手錶，
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">
            值得更好的價格
          </span>
        </h2>

        {/* Sub-text */}
        <p className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto text-pretty">
          立即上傳您的愛錶，讓全台頂級錶商為您競價。
          <br />
          免費估價，無任何隱藏費用。
        </p>

        {/* CTA Button */}
        <LuxuryButton
          variant="primary"
          size="lg"
          className="min-w-[220px] text-base h-14 px-10"
        >
          <svg className="size-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          立即免費估價
        </LuxuryButton>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <svg className="size-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>免費估價</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>實名認證錶商</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="size-4 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>安全面交</span>
          </div>
        </div>
      </div>
    </section>
  )
}
