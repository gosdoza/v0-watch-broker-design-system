"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Watch, Search, SlidersHorizontal, Lock, ChevronDown, X } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { StatusBadge } from "@/components/ui/status-badge"
import { cn } from "@/lib/utils"

// Mock watch data
const watches = [
  {
    id: 1,
    brand: "Rolex",
    model: "Submariner Date",
    ref: "126610LN",
    year: "2023",
    condition: "全新",
    accessories: "盒單齊全",
    image: "/images/watch-rolex-submariner.jpg",
    status: "active" as const,
  },
  {
    id: 2,
    brand: "Omega",
    model: "Seamaster Diver 300M",
    ref: "210.30.42.20.03.001",
    year: "2023",
    condition: "近新",
    accessories: "盒單齊全",
    image: "/images/watch-omega-seamaster.jpg",
    status: "active" as const,
  },
  {
    id: 3,
    brand: "Patek Philippe",
    model: "Nautilus",
    ref: "5711/1A-010",
    year: "2021",
    condition: "良好",
    accessories: "原廠盒",
    image: "/images/watch-patek-nautilus.jpg",
    status: "reserved" as const,
  },
  {
    id: 4,
    brand: "Audemars Piguet",
    model: "Royal Oak",
    ref: "15500ST.OO.1220ST.01",
    year: "2022",
    condition: "全新",
    accessories: "盒單齊全",
    image: "/images/watch-ap-royal-oak.jpg",
    status: "active" as const,
  },
  {
    id: 5,
    brand: "Tudor",
    model: "Black Bay 58",
    ref: "M79030N-0001",
    year: "2023",
    condition: "近新",
    accessories: "原廠盒、保單",
    image: "/images/watch-tudor-bb.jpg",
    status: "active" as const,
  },
  {
    id: 6,
    brand: "Rolex",
    model: "Daytona",
    ref: "116500LN",
    year: "2022",
    condition: "良好",
    accessories: "盒單齊全",
    image: "/images/watch-rolex-submariner.jpg",
    status: "active" as const,
  },
]

const brands = ["全部品牌", "Rolex", "Omega", "Patek Philippe", "Audemars Piguet", "Tudor", "Cartier"]
const priceRanges = ["全部價格", "NT$ 100,000 以下", "NT$ 100,000 - 300,000", "NT$ 300,000 - 500,000", "NT$ 500,000 以上"]
const conditions = ["全部品項", "全新", "近新", "良好", "有使用痕跡"]

export default function DealerMarketplacePage() {
  const [selectedBrand, setSelectedBrand] = useState("全部品牌")
  const [selectedPrice, setSelectedPrice] = useState("全部價格")
  const [selectedCondition, setSelectedCondition] = useState("全部品項")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(100,116,139,0.2)] bg-[#050505]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative bg-[#050505] p-2 rounded-full border border-[rgba(201,169,98,0.3)]">
                  <Watch className="size-5 text-[#C9A962]" />
                </div>
              </div>
              <span className="font-serif text-xl text-[#F5F5F5] tracking-wide hidden sm:block">
                Watch Broker
              </span>
            </Link>

            {/* Page Title */}
            <h1 className="font-serif text-lg text-[#F5F5F5]">
              錶商採購
            </h1>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="size-9 rounded-full bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] p-[1px]">
                <div className="size-full rounded-full bg-[#1A1A1A] flex items-center justify-center">
                  <span className="text-xs font-medium text-[#C9A962]">錶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="font-serif text-3xl text-[#F5F5F5] mb-2">
            即時貨源
          </h2>
          <p className="text-[#94A3B8]">
            瀏覽全台賣家上架的腕錶，找到最佳採購機會
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#64748B]" />
            <input
              type="text"
              placeholder="搜尋品牌、型號或編號..."
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-[#94A3B8] hover:text-[#C9A962] transition-colors"
          >
            <SlidersHorizontal className="size-4" />
            篩選條件
            <ChevronDown className={cn("size-4 transition-transform", showFilters && "rotate-180")} />
          </button>

          {/* Filters */}
          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-3 gap-4",
            "lg:flex",
            !showFilters && "hidden lg:flex"
          )}>
            {/* Brand Filter */}
            <div className="relative">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full lg:w-auto appearance-none px-4 py-2.5 pr-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] focus:outline-none focus:border-[#C9A962] cursor-pointer transition-all duration-300"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand} className="bg-[#1A1A1A]">
                    {brand}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#64748B] pointer-events-none" />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full lg:w-auto appearance-none px-4 py-2.5 pr-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] focus:outline-none focus:border-[#C9A962] cursor-pointer transition-all duration-300"
              >
                {priceRanges.map((price) => (
                  <option key={price} value={price} className="bg-[#1A1A1A]">
                    {price}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#64748B] pointer-events-none" />
            </div>

            {/* Condition Filter */}
            <div className="relative">
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full lg:w-auto appearance-none px-4 py-2.5 pr-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] focus:outline-none focus:border-[#C9A962] cursor-pointer transition-all duration-300"
              >
                {conditions.map((condition) => (
                  <option key={condition} value={condition} className="bg-[#1A1A1A]">
                    {condition}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#64748B] pointer-events-none" />
            </div>

            {/* Clear Filters */}
            {(selectedBrand !== "全部品牌" || selectedPrice !== "全部價格" || selectedCondition !== "全部品項") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand("全部品牌")
                  setSelectedPrice("全部價格")
                  setSelectedCondition("全部品項")
                }}
                className="flex items-center gap-1 text-sm text-[#64748B] hover:text-[#C9A962] transition-colors"
              >
                <X className="size-4" />
                清除篩選
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-[#64748B] text-sm">
          共 <span className="text-[#F5F5F5]">{watches.length}</span> 件商品
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </main>
    </div>
  )
}

// Watch Card Component
function WatchCard({ watch }: { watch: typeof watches[0] }) {
  const isReserved = watch.status === "reserved"

  return (
    <GlassCard
      variant={isReserved ? "default" : "interactive"}
      padding="none"
      className={cn(
        "overflow-hidden",
        isReserved && "opacity-60"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={watch.image || "/placeholder.svg"}
          alt={`${watch.brand} ${watch.model}`}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            !isReserved && "group-hover:scale-105"
          )}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={watch.status} />
        </div>

        {/* Reserved Lock Overlay */}
        {isReserved && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#050505]/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-[rgba(249,115,22,0.2)] border border-[#F97316]">
                <Lock className="size-6 text-[#F97316]" />
              </div>
              <span className="text-[#F97316] font-medium text-sm">已被保留</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand & Model */}
        <div className="mb-3">
          <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-1">
            {watch.brand}
          </p>
          <h3 className="font-serif text-lg text-[#F5F5F5] leading-tight">
            {watch.model}
          </h3>
          <p className="text-[#64748B] text-sm mt-1">
            Ref. {watch.ref}
          </p>
        </div>

        {/* Details */}
        <div className="flex items-center gap-2 text-sm text-[#94A3B8] mb-5">
          <span>{watch.year}年</span>
          <span className="text-[#64748B]">·</span>
          <span>{watch.condition}</span>
          <span className="text-[#64748B]">·</span>
          <span>{watch.accessories}</span>
        </div>

        {/* Action Button */}
        {isReserved ? (
          <button
            type="button"
            disabled
            className="w-full py-3 px-4 rounded-lg bg-[rgba(100,116,139,0.2)] text-[#64748B] font-medium cursor-not-allowed"
          >
            已保留
          </button>
        ) : (
          <LuxuryButton variant="primary" className="w-full">
            立即出價
          </LuxuryButton>
        )}
      </div>
    </GlassCard>
  )
}
