"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Watch, 
  Camera, 
  CheckCircle2, 
  Smartphone, 
  MapPin,
  Bell,
  Send,
  ArrowLeft,
  Link2
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SellerSettingsPage() {
  const [displayName, setDisplayName] = useState("王大明")
  const [realName, setRealName] = useState("王大明")
  const [phone, setPhone] = useState("0912-345-678")
  const [isPhoneVerified, setIsPhoneVerified] = useState(true)
  const [lineId] = useState("wang_daming")
  const [preferredRegion, setPreferredRegion] = useState("taipei")
  const [lineNotifyEnabled, setLineNotifyEnabled] = useState(true)
  const [isEditingName, setIsEditingName] = useState(false)
  const [testNotificationSent, setTestNotificationSent] = useState(false)

  const handleSendTestNotification = () => {
    setTestNotificationSent(true)
    setTimeout(() => setTestNotificationSent(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[rgba(100,116,139,0.2)] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/seller" 
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F5F5F5] transition-colors"
            >
              <ArrowLeft className="size-5" />
              <span className="text-sm">返回賣家中心</span>
            </Link>
            <div className="flex items-center gap-2">
              <Watch className="size-5 text-[#C9A962]" />
              <span className="font-serif text-lg text-[#F5F5F5]">設定</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 sm:px-6 py-8 space-y-6">
        {/* Section 1: Profile Header */}
        <GlassCard variant="elevated" padding="lg">
          <div className="flex flex-col items-center text-center">
            {/* Editable Avatar */}
            <div className="relative group mb-6">
              <div className="size-28 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border-2 border-[rgba(201,169,98,0.3)] flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-serif text-[#C9A962]">
                  {displayName.charAt(0)}
                </span>
              </div>
              {/* Change Photo Overlay */}
              <button
                type="button"
                className="absolute inset-0 rounded-full bg-[#050505]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
              >
                <Camera className="size-5 text-[#F5F5F5]" />
                <span className="text-sm text-[#F5F5F5]">更換照片</span>
              </button>
              {/* Gold ring glow */}
              <div className="absolute inset-0 rounded-full border-2 border-[#C9A962] opacity-0 group-hover:opacity-50 transition-opacity blur-sm" />
            </div>

            {/* Editable Display Name */}
            <div className="mb-3">
              {isEditingName ? (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  onKeyDown={(e) => e.key === "Enter" && setIsEditingName(false)}
                  autoFocus
                  className="text-2xl font-serif text-[#F5F5F5] bg-transparent border-b-2 border-[#C9A962] text-center outline-none pb-1"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditingName(true)}
                  className="text-2xl font-serif text-[#F5F5F5] hover:text-[#C9A962] transition-colors cursor-pointer"
                >
                  {displayName}
                </button>
              )}
            </div>

            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(34,197,94,0.1)] to-[rgba(201,169,98,0.1)] border border-[rgba(34,197,94,0.3)]">
              <CheckCircle2 className="size-4 text-[#22C55E]" />
              <span className="text-sm font-medium bg-gradient-to-r from-[#22C55E] to-[#C9A962] bg-clip-text text-transparent">
                已驗證賣家
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Section 2: Contact & Identity (Private) */}
        <GlassCard padding="lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[rgba(201,169,98,0.1)] flex items-center justify-center">
              <Smartphone className="size-5 text-[#C9A962]" />
            </div>
            <div>
              <h2 className="font-serif text-lg text-[#F5F5F5]">聯絡與身份資訊</h2>
              <p className="text-xs text-[#64748B]">僅供平台驗證使用，不會公開顯示</p>
            </div>
          </div>

          <div className="space-y-5">
            {/* Real Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#94A3B8]">
                真實姓名
              </label>
              <input
                type="text"
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)] text-[#E5E5E5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all"
                placeholder="請輸入真實姓名"
              />
            </div>

            {/* Mobile Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#94A3B8]">
                手機號碼
              </label>
              <div className="flex gap-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.3)] text-[#E5E5E5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all"
                  placeholder="0912-345-678"
                />
                {isPhoneVerified ? (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)]">
                    <CheckCircle2 className="size-4 text-[#22C55E]" />
                    <span className="text-sm text-[#22C55E]">已驗證</span>
                  </div>
                ) : (
                  <LuxuryButton variant="secondary" onClick={() => setIsPhoneVerified(true)}>
                    發送驗證碼
                  </LuxuryButton>
                )}
              </div>
            </div>

            {/* Line ID (Read-only) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#94A3B8]">
                LINE ID
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-3 rounded-lg bg-[#0A0A0A]/50 border border-[rgba(100,116,139,0.2)] text-[#94A3B8] flex items-center justify-between">
                  <span>{lineId}</span>
                  <div className="flex items-center gap-2 text-[#06C755]">
                    <Link2 className="size-4" />
                    <span className="text-xs font-medium">已連結</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                LINE 帳號已透過登入自動連結，無法手動修改
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Section 3: Face-to-Face Preferences */}
        <GlassCard padding="lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[rgba(201,169,98,0.1)] flex items-center justify-center">
              <MapPin className="size-5 text-[#C9A962]" />
            </div>
            <div>
              <h2 className="font-serif text-lg text-[#F5F5F5]">面交偏好設定</h2>
              <p className="text-xs text-[#64748B]">賣家主要於錶商實體店面進行交錶</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#94A3B8]">
              偏好交易地區
            </label>
            <Select value={preferredRegion} onValueChange={setPreferredRegion}>
              <SelectTrigger className="w-full px-4 py-3 h-auto rounded-lg bg-[#0A0A0A] border-[rgba(100,116,139,0.3)] text-[#E5E5E5] focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962]">
                <SelectValue placeholder="選擇地區" />
              </SelectTrigger>
              <SelectContent className="bg-[#0A0A0A] border-[rgba(100,116,139,0.3)]">
                <SelectItem value="taipei" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  台北市 / 新北市
                </SelectItem>
                <SelectItem value="taoyuan" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  桃園市
                </SelectItem>
                <SelectItem value="taichung" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  台中市
                </SelectItem>
                <SelectItem value="tainan" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  台南市
                </SelectItem>
                <SelectItem value="kaohsiung" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  高雄市
                </SelectItem>
                <SelectItem value="other" className="text-[#E5E5E5] focus:bg-[rgba(201,169,98,0.1)] focus:text-[#C9A962]">
                  其他地區
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-[#64748B] mt-2">
              選擇您方便前往的地區，系統將優先媒合該地區的認證錶商
            </p>
          </div>
        </GlassCard>

        {/* Section 4: Notification Settings */}
        <GlassCard padding="lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-lg bg-[rgba(201,169,98,0.1)] flex items-center justify-center">
              <Bell className="size-5 text-[#C9A962]" />
            </div>
            <div>
              <h2 className="font-serif text-lg text-[#F5F5F5]">通知設定</h2>
              <p className="text-xs text-[#64748B]">管理您的即時通知偏好</p>
            </div>
          </div>

          <div className="space-y-5">
            {/* LINE Notify Toggle */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-[#0A0A0A] border border-[rgba(100,116,139,0.2)]">
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="#06C755"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-[#E5E5E5]">LINE Notify 報價通知</p>
                  <p className="text-xs text-[#64748B]">即時接收錶商報價與訊息更新</p>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={lineNotifyEnabled}
                onClick={() => setLineNotifyEnabled(!lineNotifyEnabled)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A962] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
                  lineNotifyEnabled ? "bg-[#06C755]" : "bg-[rgba(100,116,139,0.3)]"
                }`}
              >
                <span
                  className={`pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                    lineNotifyEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Test Notification Button */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#94A3B8]">發送測試通知以確認設定正確</p>
              <LuxuryButton 
                variant="secondary" 
                size="sm"
                onClick={handleSendTestNotification}
                disabled={!lineNotifyEnabled || testNotificationSent}
                className="gap-2"
              >
                {testNotificationSent ? (
                  <>
                    <CheckCircle2 className="size-4 text-[#22C55E]" />
                    <span className="text-[#22C55E]">已發送</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    發送測試通知
                  </>
                )}
              </LuxuryButton>
            </div>
          </div>
        </GlassCard>

        {/* Save Button */}
        <div className="pt-4 pb-8">
          <LuxuryButton variant="primary" size="lg" className="w-full">
            儲存變更
          </LuxuryButton>
        </div>
      </main>
    </div>
  )
}
