"use client"

import Image from "next/image"
import Link from "next/link"
import { Watch, TrendingUp, CheckCircle2, Bell, Plus, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"
import { GlassCard } from "@/components/ui/glass-card"
import { StatusBadge } from "@/components/ui/status-badge"
import { LuxuryButton } from "@/components/ui/luxury-button"

// Mock data for listings
const mockListings = [
  {
    id: "1",
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    image: "/images/watch-rolex-submariner.jpg",
    status: "active" as const,
    newQuotes: 3,
    highestQuote: 325000,
    listedDate: "2024-01-15",
  },
  {
    id: "2",
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    reference: "310.30.42.50.01.001",
    image: "/images/watch-rolex-submariner.jpg",
    status: "negotiating" as const,
    newQuotes: 1,
    highestQuote: 185000,
    listedDate: "2024-01-10",
  },
  {
    id: "3",
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "5711/1A-010",
    image: "/images/watch-rolex-submariner.jpg",
    status: "sold" as const,
    newQuotes: 0,
    highestQuote: 1250000,
    listedDate: "2023-12-20",
    soldDate: "2024-01-05",
  },
]

export default function SellerDashboardPage() {
  // Calculate stats
  const activeListings = mockListings.filter((l) => l.status === "active" || l.status === "negotiating").length
  const soldListings = mockListings.filter((l) => l.status === "sold").length
  const totalNewQuotes = mockListings.reduce((sum, l) => sum + l.newQuotes, 0)

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar showUserMenu userName="王先生" />

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-3xl text-[#F5F5F5] mb-2">賣家中心</h1>
              <p className="text-[#94A3B8]">管理您的腕錶刊登與報價</p>
            </div>
            <LuxuryButton asChild>
              <Link href="/sell/create" className="gap-2">
                <Plus className="size-4" />
                我要賣錶
              </Link>
            </LuxuryButton>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Active Listings */}
            <GlassCard variant="interactive" padding="default">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
                  <Watch className="size-6 text-[#22C55E]" />
                </div>
                <div>
                  <p className="text-[#94A3B8] text-sm">上架中</p>
                  <p className="font-serif text-3xl text-[#F5F5F5]">{activeListings}</p>
                </div>
              </div>
            </GlassCard>

            {/* Sold */}
            <GlassCard variant="interactive" padding="default">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-[rgba(107,114,128,0.1)] flex items-center justify-center">
                  <CheckCircle2 className="size-6 text-[#6B7280]" />
                </div>
                <div>
                  <p className="text-[#94A3B8] text-sm">已成交</p>
                  <p className="font-serif text-3xl text-[#F5F5F5]">{soldListings}</p>
                </div>
              </div>
            </GlassCard>

            {/* New Quotes Notification */}
            <GlassCard variant="gold" padding="default">
              <div className="flex items-center gap-4">
                <div className="relative size-12 rounded-full bg-[rgba(201,169,98,0.15)] flex items-center justify-center">
                  <Bell className="size-6 text-[#C9A962]" />
                  {totalNewQuotes > 0 && (
                    <span className="absolute -top-1 -right-1 size-5 bg-[#DC2626] text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {totalNewQuotes}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[#94A3B8] text-sm">新報價通知</p>
                  <p className="font-serif text-3xl text-[#C9A962]">{totalNewQuotes} 筆</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Listings Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl text-[#F5F5F5]">我的刊登</h2>
              <Link
                href="/seller/listings"
                className="text-sm text-[#94A3B8] hover:text-[#C9A962] transition-colors flex items-center gap-1"
              >
                查看全部
                <ChevronRight className="size-4" />
              </Link>
            </div>

            {/* Listing Cards */}
            <div className="space-y-4">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>

            {/* Empty State (if needed) */}
            {mockListings.length === 0 && (
              <GlassCard variant="default" padding="lg" className="text-center">
                <div className="size-16 rounded-full bg-[rgba(100,116,139,0.1)] flex items-center justify-center mx-auto mb-4">
                  <Watch className="size-8 text-[#64748B]" />
                </div>
                <h3 className="font-serif text-xl text-[#F5F5F5] mb-2">尚無刊登</h3>
                <p className="text-[#94A3B8] mb-6">立即上傳您的腕錶，開始接收報價</p>
                <LuxuryButton asChild>
                  <Link href="/sell/create">我要賣錶</Link>
                </LuxuryButton>
              </GlassCard>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

// Listing Card Component
function ListingCard({
  listing,
}: {
  listing: {
    id: string
    brand: string
    model: string
    reference: string
    image: string
    status: "active" | "negotiating" | "reserved" | "sold"
    newQuotes: number
    highestQuote: number
    listedDate: string
    soldDate?: string
  }
}) {
  const hasNewQuotes = listing.newQuotes > 0 && listing.status !== "sold"

  return (
    <GlassCard
      variant={hasNewQuotes ? "gold" : "default"}
      padding="none"
      className="overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Watch Image */}
        <div className="relative w-full sm:w-40 h-40 sm:h-auto flex-shrink-0">
          <Image
            src={listing.image || "/placeholder.svg"}
            alt={`${listing.brand} ${listing.model}`}
            fill
            className="object-cover"
          />
          {/* Status Badge Overlay */}
          <div className="absolute top-3 left-3">
            <StatusBadge status={listing.status} size="sm" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            {/* Title & Reference */}
            <div className="mb-3">
              <h3 className="font-serif text-lg text-[#F5F5F5] mb-1">
                {listing.brand} {listing.model}
              </h3>
              <p className="text-sm text-[#64748B]">Ref. {listing.reference}</p>
            </div>

            {/* Notification Area */}
            {hasNewQuotes && (
              <div className="flex items-center gap-2 mb-3 p-3 rounded-lg bg-[rgba(201,169,98,0.1)] border border-[rgba(201,169,98,0.2)]">
                <div className="relative">
                  <TrendingUp className="size-5 text-[#C9A962]" />
                  <span className="absolute -top-1 -right-1 size-2 bg-[#22C55E] rounded-full animate-pulse" />
                </div>
                <span className="text-sm font-medium text-[#C9A962]">
                  收到 {listing.newQuotes} 筆新報價
                </span>
                <span className="text-sm text-[#E8D5A3]">
                  (最高: NT$ {listing.highestQuote.toLocaleString()})
                </span>
              </div>
            )}

            {/* Sold Info */}
            {listing.status === "sold" && (
              <div className="flex items-center gap-2 mb-3 p-3 rounded-lg bg-[rgba(107,114,128,0.1)] border border-[rgba(107,114,128,0.2)]">
                <CheckCircle2 className="size-5 text-[#6B7280]" />
                <span className="text-sm text-[#6B7280]">
                  成交價格: NT$ {listing.highestQuote.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-[rgba(100,116,139,0.15)]">
            <p className="text-xs text-[#64748B]">
              刊登日期: {new Date(listing.listedDate).toLocaleDateString("zh-TW")}
            </p>

            {listing.status !== "sold" ? (
              <LuxuryButton
                variant={hasNewQuotes ? "primary" : "secondary"}
                size="sm"
                asChild
              >
                <Link href={`/seller/listings/${listing.id}/quotes`}>
                  {hasNewQuotes ? "查看報價" : "查看詳情"}
                  <ChevronRight className="size-4" />
                </Link>
              </LuxuryButton>
            ) : (
              <span className="text-xs text-[#64748B]">
                成交日期: {listing.soldDate && new Date(listing.soldDate).toLocaleDateString("zh-TW")}
              </span>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
