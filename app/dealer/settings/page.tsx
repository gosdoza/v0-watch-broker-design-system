"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Watch, 
  ArrowLeft,
  Store,
  MapPin,
  User,
  Phone,
  Lock,
  ShieldCheck,
  AlertCircle,
  Clock,
  XCircle,
  Target,
  X,
  Bell,
  CheckCircle2
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"

type VerificationStatus = "verified" | "pending" | "suspended"

const verificationConfig = {
  verified: {
    label: "已認證",
    icon: ShieldCheck,
    bgClass: "bg-[rgba(34,197,94,0.1)]",
    borderClass: "border-[rgba(34,197,94,0.4)]",
    textClass: "text-[#22C55E]",
  },
  pending: {
    label: "審核中",
    icon: Clock,
    bgClass: "bg-[rgba(234,179,8,0.1)]",
    borderClass: "border-[rgba(234,179,8,0.4)]",
    textClass: "text-[#EAB308]",
  },
  suspended: {
    label: "已暫停",
    icon: XCircle,
    bgClass: "bg-[rgba(220,38,38,0.1)]",
    borderClass: "border-[rgba(220,38,38,0.4)]",
    textClass: "text-[#DC2626]",
  },
}

const availableBrands = [
  "Rolex",
  "Patek Philippe", 
  "Audemars Piguet",
  "Omega",
  "Tudor",
  "Cartier",
  "IWC",
  "Panerai",
  "Breitling",
  "Jaeger-LeCoultre",
  "Vacheron Constantin",
  "A. Lange & Söhne",
]

const budgetRanges = [
  { value: "under-100k", label: "NT$ 100,000 以下" },
  { value: "100k-300k", label: "NT$ 100,000 - 300,000" },
  { value: "300k-500k", label: "NT$ 300,000 - 500,000" },
  { value: "500k-1m", label: "NT$ 500,000 - 1,000,000" },
  { value: "over-1m", label: "NT$ 1,000,000 以上" },
  { value: "no-limit", label: "無預算上限" },
]

export default function DealerSettingsPage() {
  const [verificationStatus] = useState<VerificationStatus>("verified")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([
    "Rolex",
    "Patek Philippe",
    "Audemars Piguet",
  ])
  const [budgetRange, setBudgetRange] = useState("300k-500k")
  const [newListingAlerts, setNewListingAlerts] = useState(true)
  const [showBrandDropdown, setShowBrandDropdown] = useState(false)

  const statusConfig = verificationConfig[verificationStatus]
  const StatusIcon = statusConfig.icon

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const removeBrand = (brand: string) => {
    setSelectedBrands(prev => prev.filter(b => b !== brand))
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(100,116,139,0.2)] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/dealer" 
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F5F5F5] transition-colors"
            >
              <ArrowLeft className="size-5" />
              <span className="text-sm">返回採購中心</span>
            </Link>
            <div className="flex items-center gap-2">
              <Watch className="size-5 text-[#C9A962]" />
              <span className="font-serif text-lg text-[#F5F5F5]">商家設定</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-8 space-y-6">
        {/* Page Title with Verification Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <div>
            <h1 className="font-serif text-2xl text-[#F5F5F5]">商家資料管理</h1>
            <p className="text-sm text-[#94A3B8] mt-1">管理您的店家資訊與採購偏好</p>
          </div>
          {/* Verification Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusConfig.bgClass} border ${statusConfig.borderClass}`}>
            <StatusIcon className={`size-4 ${statusConfig.textClass}`} />
            <span className={`text-sm font-medium ${statusConfig.textClass}`}>
              {statusConfig.label}
            </span>
          </div>
        </div>

        {/* Section 1: Store Information (Locked) */}
        <GlassCard padding="lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-[rgba(100,116,139,0.1)] flex items-center justify-center">
                <Store className="size-5 text-[#64748B]" />
              </div>
              <div>
                <h2 className="font-serif text-lg text-[#F5F5F5]">店家資訊</h2>
                <p className="text-xs text-[#64748B]">此區塊資訊需經平台審核方可修改</p>
              </div>
            </div>
            <Lock className="size-4 text-[#64748B]" />
          </div>

          <div className="space-y-4">
            {/* Store Name - Locked */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <Store className="size-4" />
                店面名稱
              </label>
              <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/30 border border-[rgba(100,116,139,0.15)] text-[#94A3B8]">
                永恆時計 Eternal Watch
              </div>
            </div>

            {/* Store Address - Locked */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <MapPin className="size-4" />
                店面地址
              </label>
              <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/30 border border-[rgba(100,116,139,0.15)] text-[#94A3B8]">
                台北市大安區忠孝東路四段 123 號 2 樓
              </div>
            </div>

            {/* Contact Person - Locked */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <User className="size-4" />
                聯絡人
              </label>
              <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/30 border border-[rgba(100,116,139,0.15)] text-[#94A3B8]">
                陳建華
              </div>
            </div>

            {/* Store Phone - Locked */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <Phone className="size-4" />
                店面電話
              </label>
              <div className="px-4 py-3 rounded-lg bg-[#0A0A0A]/30 border border-[rgba(100,116,139,0.15)] text-[#94A3B8]">
                02-2771-8888
              </div>
            </div>
          </div>

          {/* Request Edit Button */}
          <div className="mt-6 pt-5 border-t border-[rgba(100,116,139,0.15)]">
            <LuxuryButton variant="secondary" className="w-full gap-2">
              <AlertCircle className="size-4" />
              申請修改資料
            </LuxuryButton>
            <p className="text-xs text-[#64748B] text-center mt-3">
              修改店家資訊需經平台審核，審核時間約 1-2 個工作天
            </p>
          </div>
        </GlassCard>

        {/* Section 2: Acquisition Preferences */}
        <GlassCard padding="lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[rgba(201,169,98,0.1)] flex items-center justify-center">
              <Target className="size-5 text-[#C9A962]" />
            </div>
            <div>
              <h2 className="font-serif text-lg text-[#F5F5F5]">採購偏好設定</h2>
              <p className="text-xs text-[#64748B]">系統將根據偏好優先推送相關商品通知</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Target Brands - Multi-select Tags */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#94A3B8]">
                收購品牌偏好
              </label>
              
              {/* Selected Tags */}
              <div className="flex flex-wrap gap-2 min-h-[44px] p-3 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)]">
                {selectedBrands.length === 0 ? (
                  <span className="text-[#64748B] text-sm">點擊下方選擇品牌...</span>
                ) : (
                  selectedBrands.map(brand => (
                    <span 
                      key={brand}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[rgba(201,169,98,0.15)] to-[rgba(201,169,98,0.05)] border border-[rgba(201,169,98,0.4)] text-sm text-[#C9A962]"
                    >
                      {brand}
                      <button
                        type="button"
                        onClick={() => removeBrand(brand)}
                        className="hover:text-[#E8D5A3] transition-colors"
                      >
                        <X className="size-3.5" />
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Brand Selection Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)] text-left text-[#94A3B8] hover:border-[#C9A962] transition-colors flex items-center justify-between"
                >
                  <span>選擇收購品牌</span>
                  <svg 
                    className={`size-4 transition-transform ${showBrandDropdown ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showBrandDropdown && (
                  <div className="absolute z-10 mt-2 w-full rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)] shadow-xl max-h-60 overflow-y-auto">
                    {availableBrands.map(brand => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => toggleBrand(brand)}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between ${
                          selectedBrands.includes(brand)
                            ? 'bg-[rgba(201,169,98,0.1)] text-[#C9A962]'
                            : 'text-[#E5E5E5] hover:bg-[rgba(255,255,255,0.05)]'
                        }`}
                      >
                        <span>{brand}</span>
                        {selectedBrands.includes(brand) && (
                          <CheckCircle2 className="size-4 text-[#C9A962]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-[#94A3B8]">
                收購預算範圍
              </label>
              <div className="grid grid-cols-2 gap-2">
                {budgetRanges.map(range => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setBudgetRange(range.value)}
                    className={`px-4 py-3 rounded-lg text-sm text-left transition-all ${
                      budgetRange === range.value
                        ? 'bg-gradient-to-r from-[rgba(201,169,98,0.15)] to-[rgba(201,169,98,0.05)] border border-[rgba(201,169,98,0.5)] text-[#C9A962] shadow-[0_0_15px_rgba(201,169,98,0.15)]'
                        : 'bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)] text-[#94A3B8] hover:border-[rgba(100,116,139,0.5)]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Section 3: Notification Settings (Standalone) */}
        <GlassCard padding="lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[rgba(6,199,85,0.1)] flex items-center justify-center">
              <Bell className="size-5 text-[#06C755]" />
            </div>
            <div>
              <h2 className="font-serif text-lg text-[#F5F5F5]">通知偏好設定</h2>
              <p className="text-xs text-[#64748B]">管理您的即時通知設定</p>
            </div>
          </div>

          {/* LINE Notify Toggle */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)]">
            <div className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="#06C755"
                className="size-8 shrink-0"
                aria-hidden="true"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[#F5F5F5]">新上架商品即時通知</p>
                <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                  當有賣家上架符合您採購偏好的錶款時，立即透過 LINE 推播通知您
                </p>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={newListingAlerts}
              onClick={() => setNewListingAlerts(!newListingAlerts)}
              className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A962] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
                newListingAlerts ? "bg-[#06C755]" : "bg-[rgba(100,116,139,0.3)]"
              }`}
            >
              <span
                className={`pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                  newListingAlerts ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          {/* Status indicator */}
          {newListingAlerts && (
            <div className="mt-4 flex items-center gap-2 text-sm text-[#06C755]">
              <CheckCircle2 className="size-4" />
              <span>已啟用 LINE 即時通知</span>
            </div>
          )}
        </GlassCard>

        {/* Save Button */}
        <div className="pt-4 pb-8">
          <LuxuryButton variant="primary" size="lg" className="w-full">
            儲存偏好設定
          </LuxuryButton>
        </div>
      </main>
    </div>
  )
}
