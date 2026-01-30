"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ChevronLeft, 
  Pencil, 
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
  Package,
  Clock,
  MessageSquare
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { StatusBadge } from "@/components/ui/status-badge"

// Mock data for the listing
const mockListing = {
  id: "1",
  brand: "Rolex",
  model: "Submariner Date",
  reference: "126610LN",
  status: "negotiating" as const,
  expectedPrice: 450000,
  year: 2023,
  condition: "95% 全新",
  accessories: "盒單齊全",
  meetingRegion: "台北市",
  description: "錶況極佳，僅有輕微日常配戴痕跡。原廠保固至 2028 年，所有配件齊全包含原廠錶盒、保證書、說明書及備用錶節。",
  images: [
    "/images/watch-rolex-submariner.jpg",
    "/images/watch-omega-seamaster.jpg",
    "/images/watch-ap-royal-oak.jpg",
    "/images/watch-patek-nautilus.jpg",
  ],
}

const mockQuotes = [
  {
    id: "q1",
    dealerName: "永恆時計",
    dealerLocation: "台北市",
    dealerAvatar: "永",
    amount: 430000,
    timeAgo: "2 小時前",
    status: "等待賣家回應",
  },
  {
    id: "q2",
    dealerName: "冠希名錶",
    dealerLocation: "台中市",
    dealerAvatar: "冠",
    amount: 425000,
    timeAgo: "5 小時前",
    status: "等待賣家回應",
  },
  {
    id: "q3",
    dealerName: "鐘錶王國",
    dealerLocation: "高雄市",
    dealerAvatar: "鐘",
    amount: 420000,
    timeAgo: "1 天前",
    status: "已拒絕",
  },
]

export default function SellerListingDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("zh-TW").format(price)
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.1)] bg-[#050505]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left - Back Button */}
            <Link 
              href="/seller"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F5F5F5] transition-colors"
            >
              <ChevronLeft className="size-5" />
              <span className="text-sm hidden sm:inline">返回賣家中心</span>
            </Link>

            {/* Center - Title & Status */}
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-lg sm:text-xl text-[#E5E5E5]">
                {mockListing.brand} {mockListing.model}
              </h1>
              <StatusBadge status={mockListing.status} size="sm" />
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-2">
              <LuxuryButton variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Pencil className="size-4" />
                編輯刊登
              </LuxuryButton>
              <LuxuryButton 
                variant="secondary" 
                size="sm"
                className="border-[#D4AF37] text-[#D4AF37] hover:border-[#E8D5A3] hover:text-[#E8D5A3]"
              >
                <CheckCircle2 className="size-4" />
                <span className="hidden sm:inline">標記已售出</span>
              </LuxuryButton>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)]">
              <Image
                src={mockListing.images[selectedImage] || "/placeholder.svg"}
                alt={`${mockListing.brand} ${mockListing.model}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockListing.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative size-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                      : "border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)]"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Watch Specifications */}
          <div className="space-y-6">
            {/* Price Section */}
            <GlassCard padding="lg">
              <p className="text-sm text-[#94A3B8] mb-1">期望售價</p>
              <p className="font-serif text-3xl text-[#E5E5E5]">
                NT$ <span className="text-[#D4AF37]">{formatPrice(mockListing.expectedPrice)}</span>
              </p>
            </GlassCard>

            {/* Specs Grid */}
            <GlassCard padding="lg">
              <h3 className="font-medium text-[#E5E5E5] mb-4 pb-3 border-b border-[rgba(255,255,255,0.1)]">
                錶款規格
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Calendar className="size-4" />
                    <span className="text-xs">年份</span>
                  </div>
                  <p className="text-[#E5E5E5] font-medium">{mockListing.year}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Sparkles className="size-4" />
                    <span className="text-xs">品項狀況</span>
                  </div>
                  <p className="text-[#E5E5E5] font-medium">{mockListing.condition}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Package className="size-4" />
                    <span className="text-xs">配件</span>
                  </div>
                  <p className="text-[#E5E5E5] font-medium">{mockListing.accessories}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <MapPin className="size-4" />
                    <span className="text-xs">面交地區</span>
                  </div>
                  <p className="text-[#E5E5E5] font-medium">{mockListing.meetingRegion}</p>
                </div>
              </div>
            </GlassCard>

            {/* Description */}
            <GlassCard padding="lg">
              <h3 className="font-medium text-[#E5E5E5] mb-3">賣家說明</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {mockListing.description}
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Received Quotes Section */}
        <section className="border-t border-[rgba(255,255,255,0.1)] pt-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-xl text-[#E5E5E5]">收到的報價</h2>
            <span className="px-2.5 py-1 rounded-full bg-[#D4AF37] text-[#050505] text-xs font-semibold">
              {mockQuotes.length}
            </span>
          </div>

          {mockQuotes.length > 0 ? (
            <div className="space-y-4">
              {mockQuotes.map((quote) => (
                <GlassCard key={quote.id} padding="lg" className="hover:border-[rgba(212,175,55,0.3)] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Left - Dealer Info */}
                    <div className="flex items-start gap-3 flex-1">
                      {/* Avatar */}
                      <div className="size-12 shrink-0 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[rgba(212,175,55,0.3)] flex items-center justify-center">
                        <span className="text-base font-medium text-[#D4AF37]">
                          {quote.dealerAvatar}
                        </span>
                      </div>
                      {/* Dealer Name & Location Group */}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#E5E5E5] text-lg">{quote.dealerName}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="size-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-sm text-[#94A3B8]">{quote.dealerLocation}</span>
                        </div>
                        <p className="text-xs text-[#64748B] mt-1">{quote.timeAgo}</p>
                      </div>
                    </div>

                    {/* Right - Offer Amount (Most Prominent) */}
                    <div className="sm:text-right">
                      <p className="text-xs text-[#64748B] mb-1">出價金額</p>
                      <p className="font-serif text-2xl sm:text-3xl text-[#D4AF37]">
                        NT$ {formatPrice(quote.amount)}
                      </p>
                    </div>
                  </div>

                  {/* Status & Action Row */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <Clock className="size-3.5" />
                      {quote.status}
                    </div>
                    <LuxuryButton 
                      variant="primary" 
                      size="sm"
                      asChild
                    >
                      <Link href={`/negotiation/${quote.id}`}>
                        <MessageSquare className="size-4" />
                        查看議價
                      </Link>
                    </LuxuryButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            /* Empty State */
            <GlassCard padding="lg" className="text-center py-12">
              <div className="size-16 mx-auto mb-4 rounded-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <Clock className="size-7 text-[#64748B]" />
              </div>
              <p className="text-[#94A3B8] mb-1">等待錶商報價中...</p>
              <p className="text-xs text-[#64748B]">當錶商對您的錶款感興趣時，報價將顯示於此</p>
            </GlassCard>
          )}
        </section>
      </main>
    </div>
  )
}
