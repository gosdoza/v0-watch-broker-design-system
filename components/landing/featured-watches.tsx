"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface WatchSaleItem {
  brand: string
  model: string
  price: string
  soldTime: string
}

const recentSales: WatchSaleItem[] = [
  { brand: "Rolex", model: "Submariner 126610LN", price: "NT$ 320,000", soldTime: "2 小時前" },
  { brand: "Omega", model: "Speedmaster Moonwatch", price: "NT$ 158,000", soldTime: "5 小時前" },
  { brand: "Patek Philippe", model: "Nautilus 5711/1A", price: "NT$ 1,850,000", soldTime: "8 小時前" },
  { brand: "Audemars Piguet", model: "Royal Oak 15500ST", price: "NT$ 680,000", soldTime: "12 小時前" },
  { brand: "Rolex", model: "Daytona 116500LN", price: "NT$ 850,000", soldTime: "1 天前" },
  { brand: "Tudor", model: "Black Bay 58", price: "NT$ 98,000", soldTime: "1 天前" },
  { brand: "IWC", model: "Portugieser Chronograph", price: "NT$ 185,000", soldTime: "2 天前" },
  { brand: "Cartier", model: "Santos de Cartier", price: "NT$ 168,000", soldTime: "2 天前" },
]

function SaleCard({ brand, model, price, soldTime }: WatchSaleItem) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] p-5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)] hover:border-[rgba(201,169,98,0.3)] transition-all duration-300 group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[#C9A962] font-medium tracking-wide uppercase mb-1">
            {brand}
          </p>
          <p className="text-sm text-[#F5F5F5] font-medium truncate mb-2 group-hover:text-[#C9A962] transition-colors">
            {model}
          </p>
          <p className="text-xs text-[#64748B]">{soldTime}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs text-[#64748B] mb-1">成交價</p>
          <p className="text-sm font-semibold text-[#22C55E]">{price}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-[rgba(100,116,139,0.15)] flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[rgba(34,197,94,0.1)] text-[10px] text-[#22C55E]">
          <span className="size-1.5 rounded-full bg-[#22C55E]" />
          已成交
        </span>
      </div>
    </div>
  )
}

interface FeaturedWatchesProps {
  className?: string
}

export function FeaturedWatches({ className }: FeaturedWatchesProps) {
  return (
    <section className={cn("py-16 sm:py-20 overflow-hidden", className)}>
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <span className="inline-block text-sm text-[#C9A962] tracking-widest uppercase mb-3">
          Recent Sales
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F5F5]">
          近期成交紀錄
        </h2>
        <div className="mt-4 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
      </div>

      {/* Scrolling Ticker - First Row (Left to Right) */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 animate-scroll-left">
          {[...recentSales, ...recentSales].map((sale, index) => (
            <SaleCard key={`row1-${index}`} {...sale} />
          ))}
        </div>
      </div>

      {/* Scrolling Ticker - Second Row (Right to Left) */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 animate-scroll-right">
          {[...recentSales.slice().reverse(), ...recentSales.slice().reverse()].map((sale, index) => (
            <SaleCard key={`row2-${index}`} {...sale} />
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
