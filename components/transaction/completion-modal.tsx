"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { Star, CheckCircle2, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

interface CompletionModalProps {
  isOpen: boolean
  onClose: () => void
  watchDetails: {
    name: string
    image: string
    finalPrice: number
  }
  onSubmitReview: (rating: number, comment: string) => void
}

export function CompletionModal({
  isOpen,
  onClose,
  watchDetails,
  onSubmitReview,
}: CompletionModalProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async () => {
    if (rating === 0) return
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    onSubmitReview(rating, comment)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("zh-TW", {
      style: "currency",
      currency: "TWD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-[#0A0A0A] border-[rgba(100,116,139,0.3)] p-0 overflow-hidden max-w-md"
        showCloseButton={!isSubmitted}
      >
        {!isSubmitted ? (
          <>
            {/* Success Header with Glow */}
            <div className="relative px-6 pt-8 pb-6 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(201,169,98,0.15)] to-transparent" />
              
              {/* Sparkles decoration */}
              <div className="absolute top-4 left-6">
                <Sparkles className="size-5 text-[#C9A962] opacity-60" />
              </div>
              <div className="absolute top-6 right-8">
                <Sparkles className="size-4 text-[#C9A962] opacity-40" />
              </div>

              {/* Check Icon */}
              <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] rounded-full blur-lg opacity-50" />
                <div className="relative bg-[#0A0A0A] rounded-full p-3 border border-[rgba(201,169,98,0.5)]">
                  <CheckCircle2 className="size-10 text-[#C9A962]" />
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-[#F5F5F5]">
                  恭喜！交易已完成
                </DialogTitle>
              </DialogHeader>
            </div>

            {/* Watch Summary */}
            <div className="px-6 pb-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)]">
                {/* Watch Image */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[rgba(255,255,255,0.05)]">
                  <Image
                    src={watchDetails.image || "/placeholder.svg"}
                    alt={watchDetails.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Watch Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#F5F5F5] font-medium truncate">
                    {watchDetails.name}
                  </p>
                  <div className="mt-2">
                    <span className="text-[#64748B] text-sm">最終成交價</span>
                    <p className="text-xl font-semibold bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">
                      {formatPrice(watchDetails.finalPrice)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="px-6 pb-6">
              <div className="p-5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(100,116,139,0.15)]">
                <p className="text-[#F5F5F5] text-center mb-4">
                  請為本次交易體驗評分
                </p>
                
                {/* Star Rating */}
                <div className="flex items-center justify-center gap-2 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform duration-200 hover:scale-110 active:scale-95"
                    >
                      <Star
                        className={cn(
                          "size-10 transition-colors duration-200",
                          (hoveredRating || rating) >= star
                            ? "fill-[#C9A962] text-[#C9A962]"
                            : "fill-transparent text-[#64748B] hover:text-[#94A3B8]"
                        )}
                      />
                    </button>
                  ))}
                </div>

                {/* Comment Box */}
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="輸入您的評價...（選填）"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300 resize-none text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="px-6 pb-6">
              <LuxuryButton
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleSubmit}
                disabled={rating === 0 || isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    處理中...
                  </span>
                ) : (
                  "送出評價"
                )}
              </LuxuryButton>

              {rating === 0 && (
                <p className="text-center text-[#64748B] text-xs mt-3">
                  請先選擇評分星數
                </p>
              )}
            </div>
          </>
        ) : (
          /* Submitted State */
          <div className="px-6 py-12 text-center">
            {/* Success Animation */}
            <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative bg-[#0A0A0A] rounded-full p-4 border border-[rgba(34,197,94,0.5)]">
                <CheckCircle2 className="size-12 text-[#22C55E]" />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-[#F5F5F5] mb-2">
              感謝您的評價！
            </h3>
            <p className="text-[#94A3B8] mb-8">
              您的回饋將幫助我們持續改進服務品質
            </p>

            <LuxuryButton
              variant="secondary"
              size="lg"
              onClick={onClose}
            >
              關閉視窗
            </LuxuryButton>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Demo page component to showcase the modal
export function CompletionModalDemo() {
  const [isOpen, setIsOpen] = useState(true)

  const mockWatchDetails = {
    name: "Rolex Submariner Date 126610LN",
    image: "/images/watch-rolex-submariner.jpg",
    finalPrice: 315000,
  }

  const handleSubmitReview = (rating: number, comment: string) => {
    console.log("Review submitted:", { rating, comment })
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <LuxuryButton onClick={() => setIsOpen(true)}>
        開啟成交確認
      </LuxuryButton>

      <CompletionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        watchDetails={mockWatchDetails}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  )
}
