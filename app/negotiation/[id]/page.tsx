"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Store,
  Check,
  X,
  MessageSquare,
  ChevronDown
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { StatusBadge } from "@/components/ui/status-badge"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

// Mock negotiation data
const negotiationData = {
  id: "NEG-001",
  watch: {
    brand: "Rolex",
    model: "Submariner Date",
    reference: "126610LN",
    year: 2023,
    condition: "近新",
    accessories: ["原廠盒", "保單"],
    image: "/images/watch-rolex-submariner.jpg",
  },
  dealer: {
    name: "永恆時計",
    avatar: null,
  },
  status: "waiting_seller", // waiting_seller, waiting_dealer, accepted, rejected
  currentOffer: 310000,
  history: [
    {
      id: 1,
      type: "dealer_offer",
      amount: 300000,
      timestamp: "今日 10:00",
      actor: "錶商",
    },
    {
      id: 2,
      type: "seller_counter",
      amount: 320000,
      timestamp: "今日 10:30",
      actor: "您",
    },
    {
      id: 3,
      type: "dealer_offer",
      amount: 310000,
      timestamp: "今日 11:15",
      actor: "錶商",
      isCurrent: true,
    },
  ],
}

// Timeline item component
function TimelineItem({
  item,
  isLast,
}: {
  item: typeof negotiationData.history[0]
  isLast: boolean
}) {
  const isDealer = item.type === "dealer_offer"
  const isCurrent = item.isCurrent

  return (
    <div className="relative flex gap-4">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 w-px h-[calc(100%-16px)] bg-[rgba(100,116,139,0.3)]" />
      )}

      {/* Timeline dot */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center size-8 rounded-full shrink-0",
          isCurrent
            ? "bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] shadow-[0_0_15px_rgba(201,169,98,0.4)]"
            : isDealer
              ? "bg-[rgba(59,130,246,0.2)] border border-[#3B82F6]"
              : "bg-[rgba(34,197,94,0.2)] border border-[#22C55E]"
        )}
      >
        {isDealer ? (
          <Store className={cn("size-4", isCurrent ? "text-[#050505]" : "text-[#3B82F6]")} />
        ) : (
          <User className={cn("size-4", isCurrent ? "text-[#050505]" : "text-[#22C55E]")} />
        )}
      </div>

      {/* Timeline content */}
      <div className={cn("flex-1 pb-6", isLast && "pb-0")}>
        <GlassCard
          variant={isCurrent ? "gold" : "default"}
          padding="sm"
          className={cn(isCurrent && "ring-1 ring-[rgba(201,169,98,0.5)]")}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={cn(
                  "text-sm font-medium",
                  isDealer ? "text-[#3B82F6]" : "text-[#22C55E]"
                )}>
                  {item.actor}
                  {isDealer ? "出價" : "還價"}
                </span>
                {isCurrent && (
                  <span className="text-xs text-[#C9A962] bg-[rgba(201,169,98,0.1)] px-2 py-0.5 rounded">
                    最新
                  </span>
                )}
              </div>
              <p className="text-2xl font-semibold text-[#F5F5F5]">
                NT$ {item.amount.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-1 text-[#64748B] text-xs">
              <Clock className="size-3" />
              {item.timestamp}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

export default function NegotiationPage() {
  const [showCounterInput, setShowCounterInput] = useState(false)
  const [counterAmount, setCounterAmount] = useState("")

  const handleAccept = () => {
    // Handle accept logic
    console.log("Accepted offer:", negotiationData.currentOffer)
  }

  const handleReject = () => {
    // Handle reject logic
    console.log("Rejected offer")
  }

  const handleCounter = () => {
    if (counterAmount) {
      console.log("Counter offer:", counterAmount)
      setShowCounterInput(false)
      setCounterAmount("")
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-[rgba(100,116,139,0.2)]">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/seller"
              className="p-2 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)] text-[#94A3B8] hover:text-[#F5F5F5] hover:border-[rgba(100,116,139,0.4)] transition-all"
            >
              <ArrowLeft className="size-5" />
              <span className="sr-only">返回</span>
            </Link>
            <div>
              <h1 className="font-serif text-lg text-[#F5F5F5]">議價室</h1>
              <p className="text-xs text-[#64748B]">#{negotiationData.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Watch Summary Card */}
        <GlassCard variant="elevated" padding="none" className="overflow-hidden">
          <div className="flex gap-4 p-4">
            {/* Watch Image */}
            <div className="relative size-24 rounded-lg overflow-hidden shrink-0 bg-[rgba(255,255,255,0.05)]">
              <Image
                src={negotiationData.watch.image || "/placeholder.svg"}
                alt={`${negotiationData.watch.brand} ${negotiationData.watch.model}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Watch Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[#C9A962] text-sm font-medium">
                    {negotiationData.watch.brand}
                  </p>
                  <h2 className="font-serif text-lg text-[#F5F5F5] truncate">
                    {negotiationData.watch.model}
                  </h2>
                  <p className="text-[#64748B] text-sm">
                    Ref. {negotiationData.watch.reference}
                  </p>
                </div>
                <StatusBadge status="negotiating" size="sm" />
              </div>

              <div className="flex items-center gap-2 mt-2 text-xs text-[#94A3B8]">
                <span>{negotiationData.watch.year}年</span>
                <span className="text-[#64748B]">·</span>
                <span>{negotiationData.watch.condition}</span>
                <span className="text-[#64748B]">·</span>
                <span>{negotiationData.watch.accessories.join("、")}</span>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-4 py-3 bg-[rgba(59,130,246,0.1)] border-t border-[rgba(59,130,246,0.2)]">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[#3B82F6] text-sm font-medium">
                等待您回應錶商的出價
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Dealer Info */}
        <GlassCard padding="sm">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(100,116,139,0.3)] flex items-center justify-center">
              <Store className="size-5 text-[#64748B]" />
            </div>
            <div>
              <p className="text-sm text-[#94A3B8]">議價對象</p>
              <p className="text-[#F5F5F5] font-medium">{negotiationData.dealer.name}</p>
            </div>
          </div>
        </GlassCard>

        {/* Price History Timeline */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-[#F5F5F5] flex items-center gap-2">
            <MessageSquare className="size-5 text-[#C9A962]" />
            出價紀錄
          </h3>

          <div className="pl-2">
            {negotiationData.history.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isLast={index === negotiationData.history.length - 1}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Action Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-t border-[rgba(100,116,139,0.2)]">
        <div className="max-w-3xl mx-auto px-4 py-4">
          {/* Current Offer Display */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#94A3B8] text-sm">錶商最新出價</span>
            <span className="text-xl font-semibold text-[#F5F5F5]">
              NT$ {negotiationData.currentOffer.toLocaleString()}
            </span>
          </div>

          {/* Counter Offer Input (Toggle) */}
          {showCounterInput && (
            <div className="mb-4 p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(201,169,98,0.3)]">
              <label htmlFor="counter-amount" className="block text-sm text-[#94A3B8] mb-2">
                輸入您的還價金額
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]">
                  NT$
                </span>
                <input
                  type="number"
                  id="counter-amount"
                  value={counterAmount}
                  onChange={(e) => setCounterAmount(e.target.value)}
                  placeholder="320,000"
                  className="w-full pl-14 pr-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] text-lg font-semibold placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <LuxuryButton
                  variant="primary"
                  className="flex-1"
                  onClick={handleCounter}
                  disabled={!counterAmount}
                >
                  送出還價
                </LuxuryButton>
                <LuxuryButton
                  variant="ghost"
                  onClick={() => setShowCounterInput(false)}
                >
                  取消
                </LuxuryButton>
              </div>
            </div>
          )}

          {/* Action Button Group */}
          {!showCounterInput && (
            <div className="flex gap-3">
              {/* Accept Button - Green */}
              <LuxuryButton
                onClick={handleAccept}
                className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <Check className="size-4" />
                接受出價
              </LuxuryButton>

              {/* Counter Offer Button - Gold */}
              <LuxuryButton
                variant="primary"
                className="flex-1"
                onClick={() => setShowCounterInput(true)}
              >
                <ChevronDown className="size-4" />
                我要還價
              </LuxuryButton>

              {/* Reject Button - Gray */}
              <LuxuryButton
                variant="secondary"
                onClick={handleReject}
                className="text-[#6B7280] border-[#6B7280] hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]"
              >
                <X className="size-4" />
                拒絕
              </LuxuryButton>
            </div>
          )}

          {/* Help Text */}
          <p className="text-center text-[#64748B] text-xs mt-3">
            接受出價後，我們將安排雙方進行面交驗錶
          </p>
        </div>
      </div>
    </div>
  )
}
