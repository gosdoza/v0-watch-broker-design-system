"use client"

import * as React from "react"
import Image from "next/image"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-watch.jpg"
          alt="精密機械錶芯"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/60 to-[#050505]" />
        {/* Gold Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(201,169,98,0.05)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(201,169,98,0.3)] bg-[rgba(201,169,98,0.05)] mb-8">
          <span className="size-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-sm text-[#C9A962] tracking-wide">台灣首選 C2B 腕錶收購平台</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#F5F5F5] leading-tight tracking-tight text-balance mb-6">
          安心出售您的愛錶
          <br />
          <span className="bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">
            即時媒合全台頂級錶商
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 text-pretty">
          AI 智慧估價・匿名競標・實體店面交易
        </p>

        {/* Split CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <LuxuryButton
            variant="primary"
            size="lg"
            className="min-w-[180px] text-base"
          >
            <svg className="size-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            我要賣錶
          </LuxuryButton>
          
          <LuxuryButton
            variant="secondary"
            size="lg"
            className="min-w-[180px] text-base backdrop-blur-sm bg-[rgba(255,255,255,0.03)]"
          >
            <svg className="size-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            我是錶商
          </LuxuryButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[#64748B] tracking-widest uppercase">Scroll</span>
          <svg className="size-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
