"use client"

import * as React from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  accentColor?: string
}

function FeatureCard({ icon, title, description, className, accentColor = "#C9A962" }: FeatureCardProps) {
  return (
    <GlassCard
      variant="interactive"
      padding="lg"
      className={cn("group relative overflow-hidden", className)}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute top-0 right-0 size-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: accentColor }}
      />
      
      {/* Icon */}
      <div
        className="size-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${accentColor}15`,
          border: `1px solid ${accentColor}30`,
        }}
      >
        <div style={{ color: accentColor }}>{icon}</div>
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl font-semibold text-[#F5F5F5] mb-3 group-hover:text-[#C9A962] transition-colors">
        {title}
      </h3>
      <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </GlassCard>
  )
}

interface WhyUsSectionProps {
  className?: string
}

export function WhyUsSection({ className }: WhyUsSectionProps) {
  return (
    <section className={cn("py-20 sm:py-28 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm text-[#C9A962] tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] text-balance">
            為什麼選擇 Watch Broker
          </h2>
          <div className="mt-4 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Speed */}
          <FeatureCard
            icon={
              <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="極速媒合"
            description="一鍵上架，24小時內收到多份報價，無需逐間詢問，讓您的時間更有價值。"
            accentColor="#C9A962"
          />

          {/* Card 2 - Safety */}
          <FeatureCard
            icon={
              <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="100% 實名認證"
            description="嚴格審核錶商資格，實體店面面交，杜絕詐騙風險，讓您安心交易。"
            accentColor="#22C55E"
          />

          {/* Card 3 - Price */}
          <FeatureCard
            icon={
              <svg className="size-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="匿名競標"
            description="錶商盲拍機制 (Blind Bidding)，確保您獲得市場最高行情，價格透明公正。"
            accentColor="#3B82F6"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  )
}
