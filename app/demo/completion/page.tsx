"use client"

import { useState } from "react"
import Link from "next/link"
import { Watch, ArrowLeft } from "lucide-react"
import { CompletionModal } from "@/components/transaction/completion-modal"
import { LuxuryButton } from "@/components/ui/luxury-button"

export default function CompletionDemoPage() {
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
    <div className="min-h-screen bg-[#050505]">
      {/* Simple Header */}
      <header className="border-b border-[rgba(100,116,139,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative bg-[#050505] p-2 rounded-full border border-[rgba(201,169,98,0.3)]">
                  <Watch className="size-5 text-[#C9A962]" />
                </div>
              </div>
              <span className="font-serif text-xl text-[#F5F5F5] tracking-wide">
                Watch Broker
              </span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#C9A962] transition-colors text-sm"
            >
              <ArrowLeft className="size-4" />
              返回首頁
            </Link>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-3xl text-[#F5F5F5] mb-4">
          成交確認彈窗展示
        </h1>
        <p className="text-[#94A3B8] mb-8">
          此頁面展示交易完成後的評價彈窗元件
        </p>

        <LuxuryButton onClick={() => setIsOpen(true)} size="lg">
          開啟成交確認彈窗
        </LuxuryButton>

        <div className="mt-12 p-6 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)] text-left">
          <h2 className="font-medium text-[#F5F5F5] mb-4">元件功能說明</h2>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li>• 顯示交易完成的祝賀訊息與腕錶摘要</li>
            <li>• 最終成交價以金色漸層顯示</li>
            <li>• 可點擊的五星評分系統（附懸停效果）</li>
            <li>• 選填的文字評價輸入框</li>
            <li>• 送出後顯示感謝訊息</li>
          </ul>
        </div>
      </main>

      {/* The Modal */}
      <CompletionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        watchDetails={mockWatchDetails}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  )
}
