"use client"

import * as React from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  name: string
  role: string
  location: string
  avatarInitial: string
  accentColor?: string
}

function TestimonialCard({ quote, name, role, location, avatarInitial, accentColor = "#C9A962" }: TestimonialProps) {
  return (
    <GlassCard variant="default" padding="lg" className="group h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="size-8 text-[rgba(201,169,98,0.3)] group-hover:text-[rgba(201,169,98,0.5)] transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-[#E5E5E5] text-sm sm:text-base leading-relaxed mb-6">
        「{quote}」
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[rgba(100,116,139,0.15)]">
        {/* Avatar */}
        <div
          className="size-11 rounded-full flex items-center justify-center font-serif font-semibold text-lg"
          style={{
            backgroundColor: `${accentColor}20`,
            color: accentColor,
            border: `1px solid ${accentColor}40`,
          }}
        >
          {avatarInitial}
        </div>
        <div>
          <p className="text-sm font-medium text-[#F5F5F5]">{name}</p>
          <p className="text-xs text-[#64748B]">
            {role} · {location}
          </p>
        </div>
      </div>
    </GlassCard>
  )
}

interface TestimonialsSectionProps {
  className?: string
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  const testimonials: TestimonialProps[] = [
    {
      quote: "第一次賣勞力士，原本很怕遇到詐騙，但這個平台讓我直接對接有店面的錶商，非常安心！整個過程透明又專業。",
      name: "林先生",
      role: "賣家",
      location: "台北",
      avatarInitial: "林",
      accentColor: "#C9A962",
    },
    {
      quote: "AI 辨識很準，不用自己填一堆資料。報價速度也很快，兩天就成交了。價格比我原本預期的還高！",
      name: "陳小姐",
      role: "賣家",
      location: "台中",
      avatarInitial: "陳",
      accentColor: "#22C55E",
    },
    {
      quote: "這裡的貨源很乾淨，賣家素質高，幫我們省下很多開發客戶的時間。平台的審核機制讓我們很放心。",
      name: "永恆時計",
      role: "認證錶商",
      location: "高雄",
      avatarInitial: "永",
      accentColor: "#3B82F6",
    },
  ]

  return (
    <section
      className={cn(
        "py-20 sm:py-28 px-4 sm:px-6 lg:px-8",
        "bg-gradient-to-b from-[#050505] via-[rgba(201,169,98,0.02)] to-[#050505]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm text-[#C9A962] tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F5F5] text-balance">
            客戶真實心聲
          </h2>
          <div className="mt-4 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
