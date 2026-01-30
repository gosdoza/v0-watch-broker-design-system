"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StepProps {
  number: number
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
}

function Step({ number, icon, title, description, isLast = false }: StepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector Line (Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px">
          <div className="h-full bg-gradient-to-r from-[rgba(201,169,98,0.5)] to-[rgba(100,116,139,0.2)]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 rounded-full bg-[rgba(201,169,98,0.3)]" />
        </div>
      )}

      {/* Step Number Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center justify-center size-6 rounded-full bg-[#050505] border border-[#C9A962] text-xs font-semibold text-[#C9A962]">
          {number}
        </span>
      </div>

      {/* Icon Container */}
      <div className="relative size-20 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)] flex items-center justify-center mb-5 group-hover:border-[rgba(201,169,98,0.4)] group-hover:shadow-[0_0_30px_rgba(201,169,98,0.15)] transition-all duration-300">
        <div className="text-[#C9A962] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-serif text-lg font-semibold text-[#F5F5F5] mb-2 group-hover:text-[#C9A962] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#94A3B8] max-w-[200px] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface HowItWorksSectionProps {
  className?: string
}

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-28 px-4 sm:px-6 lg:px-8",
        "bg-gradient-to-b from-[#050505] via-[rgba(201,169,98,0.02)] to-[#050505]",
        className
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#C9A962] tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] text-balance">
            簡單三步驟，輕鬆成交
          </h2>
          <div className="mt-4 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Step 1 */}
          <Step
            number={1}
            icon={
              <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="拍照上傳"
            description="AI 自動辨識型號與估價，無需繁瑣填表"
          />

          {/* Step 2 */}
          <Step
            number={2}
            icon={
              <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            }
            title="接收報價"
            description="全台錶商即時競標，為您爭取最高價格"
          />

          {/* Step 3 */}
          <Step
            number={3}
            icon={
              <svg className="size-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            title="店面交易"
            description="選擇滿意價格，前往實體店面現金交易"
            isLast
          />
        </div>
      </div>
    </section>
  )
}
