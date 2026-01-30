"use client"

import React from "react"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Watch, 
  Upload, 
  X, 
  Sparkles, 
  AlertTriangle, 
  Camera,
  Check,
  Loader2,
  ChevronDown
} from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

// Mock AI-detected data for Rolex Submariner
const mockAIData = {
  brand: "Rolex",
  model: "Submariner Date",
  reference: "126610LN",
  year: "2023",
  condition: "近新",
  accessories: {
    box: true,
    papers: true,
    tag: false,
    extraLinks: true,
  }
}

const conditionOptions = [
  { value: "全新", label: "全新 - 未使用，完整包裝" },
  { value: "近新", label: "近新 - 極少使用痕跡" },
  { value: "良好", label: "良好 - 正常使用痕跡" },
  { value: "有使用痕跡", label: "有使用痕跡 - 明顯磨損" },
]

type ScanStatus = "idle" | "uploading" | "scanning" | "complete"

export default function CreateListingPage() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle")
  
  // Form state - will be populated by AI
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    reference: "",
    year: "",
    condition: "",
    targetPrice: "",
  })
  const [accessories, setAccessories] = useState({
    box: false,
    papers: false,
    tag: false,
    extraLinks: false,
  })

  // Simulate AI scanning after image upload
  useEffect(() => {
    if (scanStatus === "scanning") {
      const timer = setTimeout(() => {
        // Populate with mock AI data
        setFormData({
          brand: mockAIData.brand,
          model: mockAIData.model,
          reference: mockAIData.reference,
          year: mockAIData.year,
          condition: mockAIData.condition,
          targetPrice: "",
        })
        setAccessories(mockAIData.accessories)
        setScanStatus("complete")
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [scanStatus])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    processFiles(files)
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      processFiles(files)
    }
  }, [])

  const processFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith("image/"))
    if (imageFiles.length === 0) return

    setScanStatus("uploading")
    
    // Create preview URLs
    const newImages = imageFiles.map(file => URL.createObjectURL(file))
    setUploadedImages(prev => [...prev, ...newImages])

    // Simulate upload then scan
    setTimeout(() => {
      setScanStatus("scanning")
    }, 800)
  }

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index))
    if (uploadedImages.length <= 1) {
      setScanStatus("idle")
      setFormData({
        brand: "",
        model: "",
        reference: "",
        year: "",
        condition: "",
        targetPrice: "",
      })
      setAccessories({
        box: false,
        papers: false,
        tag: false,
        extraLinks: false,
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleAccessoryChange = (key: keyof typeof accessories) => {
    setAccessories(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-[rgba(100,116,139,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative bg-[#050505] p-2 rounded-full border border-[rgba(201,169,98,0.3)]">
                  <Watch className="size-4 text-[#C9A962]" />
                </div>
              </div>
              <span className="font-serif text-lg text-[#F5F5F5] tracking-wide">
                Watch Broker
              </span>
            </Link>
            <h1 className="text-[#F5F5F5] font-medium">我要賣錶</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Photo Upload */}
            <div className="space-y-6">
              <GlassCard variant="elevated" padding="lg">
                <h2 className="font-serif text-xl text-[#F5F5F5] mb-6 flex items-center gap-2">
                  <Camera className="size-5 text-[#C9A962]" />
                  腕錶照片
                </h2>

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={cn(
                    "relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 cursor-pointer min-h-[300px] flex flex-col items-center justify-center",
                    isDragging
                      ? "border-[#C9A962] bg-[rgba(201,169,98,0.1)]"
                      : "border-[rgba(100,116,139,0.3)] hover:border-[rgba(100,116,139,0.5)] bg-[rgba(255,255,255,0.02)]"
                  )}
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {uploadedImages.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="p-4 rounded-full bg-[rgba(201,169,98,0.1)] text-[#C9A962]">
                        <Upload className="size-8" />
                      </div>
                      <div>
                        <p className="text-[#F5F5F5] font-medium text-lg mb-2">
                          拖曳照片至此或點擊上傳
                        </p>
                        <p className="text-[#64748B] text-sm">
                          建議上傳：錶面、背蓋、側面、配件
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      {/* Uploaded Images Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                        {uploadedImages.map((src, index) => (
                          <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                            <Image
                              src={src || "/placeholder.svg"}
                              alt={`腕錶照片 ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                removeImage(index)
                              }}
                              className="absolute top-2 right-2 p-1 rounded-full bg-[#050505]/80 text-[#F5F5F5] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#DC2626]"
                            >
                              <X className="size-4" />
                            </button>
                          </div>
                        ))}
                        {/* Add More Button */}
                        <div className="aspect-square rounded-lg border-2 border-dashed border-[rgba(100,116,139,0.3)] flex items-center justify-center hover:border-[#C9A962] transition-colors">
                          <Upload className="size-6 text-[#64748B]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* AI Scanning Status */}
                {scanStatus !== "idle" && (
                  <div className={cn(
                    "mt-6 p-4 rounded-lg flex items-center gap-3",
                    scanStatus === "complete"
                      ? "bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)]"
                      : "bg-[rgba(201,169,98,0.1)] border border-[rgba(201,169,98,0.3)]"
                  )}>
                    {scanStatus === "uploading" && (
                      <>
                        <Loader2 className="size-5 text-[#C9A962] animate-spin" />
                        <span className="text-[#C9A962]">上傳中...</span>
                      </>
                    )}
                    {scanStatus === "scanning" && (
                      <>
                        <Sparkles className="size-5 text-[#C9A962] animate-pulse" />
                        <span className="text-[#C9A962]">AI 辨識中...</span>
                      </>
                    )}
                    {scanStatus === "complete" && (
                      <>
                        <Check className="size-5 text-[#22C55E]" />
                        <span className="text-[#22C55E]">辨識完成！請確認以下資訊</span>
                      </>
                    )}
                  </div>
                )}
              </GlassCard>
            </div>

            {/* Right Column - Details Form */}
            <div className="space-y-6">
              <GlassCard variant="elevated" padding="lg">
                <h2 className="font-serif text-xl text-[#F5F5F5] mb-6 flex items-center gap-2">
                  <Sparkles className="size-5 text-[#C9A962]" />
                  腕錶資訊
                  {scanStatus === "complete" && (
                    <span className="ml-2 text-xs px-2 py-1 rounded-full bg-[rgba(201,169,98,0.2)] text-[#C9A962]">
                      AI 自動填入
                    </span>
                  )}
                </h2>

                <div className="space-y-5">
                  {/* Brand */}
                  <div className="space-y-2">
                    <label htmlFor="brand" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      品牌
                      {formData.brand && <Sparkles className="size-3 text-[#C9A962]" />}
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="例：Rolex"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                    />
                  </div>

                  {/* Model */}
                  <div className="space-y-2">
                    <label htmlFor="model" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      型號
                      {formData.model && <Sparkles className="size-3 text-[#C9A962]" />}
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      placeholder="例：Submariner Date"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                    />
                  </div>

                  {/* Reference Number */}
                  <div className="space-y-2">
                    <label htmlFor="reference" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      官方編號
                      {formData.reference && <Sparkles className="size-3 text-[#C9A962]" />}
                    </label>
                    <input
                      type="text"
                      id="reference"
                      name="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      placeholder="例：126610LN"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                    />
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <label htmlFor="year" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      年份
                      {formData.year && <Sparkles className="size-3 text-[#C9A962]" />}
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="例：2023"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                    />
                  </div>

                  {/* Condition Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="condition" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      品項狀況
                      {formData.condition && <Sparkles className="size-3 text-[#C9A962]" />}
                    </label>
                    <div className="relative">
                      <select
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#1A1A1A]">請選擇狀況</option>
                        {conditionOptions.map(option => (
                          <option key={option.value} value={option.value} className="bg-[#1A1A1A]">
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-[#64748B] pointer-events-none" />
                    </div>
                  </div>

                  {/* Accessories Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                      配件
                      {(accessories.box || accessories.papers || accessories.tag || accessories.extraLinks) && (
                        <Sparkles className="size-3 text-[#C9A962]" />
                      )}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "box" as const, label: "原廠盒" },
                        { key: "papers" as const, label: "保單" },
                        { key: "tag" as const, label: "吊牌" },
                        { key: "extraLinks" as const, label: "剩餘錶節" },
                      ].map(item => (
                        <label
                          key={item.key}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-300",
                            accessories[item.key]
                              ? "border-[#C9A962] bg-[rgba(201,169,98,0.1)]"
                              : "border-[rgba(100,116,139,0.3)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(100,116,139,0.5)]"
                          )}
                        >
                          <div className={cn(
                            "size-5 rounded border-2 flex items-center justify-center transition-all duration-300",
                            accessories[item.key]
                              ? "border-[#C9A962] bg-[#C9A962]"
                              : "border-[rgba(100,116,139,0.5)]"
                          )}>
                            {accessories[item.key] && (
                              <Check className="size-3 text-[#050505]" />
                            )}
                          </div>
                          <input
                            type="checkbox"
                            checked={accessories[item.key]}
                            onChange={() => handleAccessoryChange(item.key)}
                            className="sr-only"
                          />
                          <span className="text-[#F5F5F5] text-sm">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Target Price */}
                  <div className="space-y-2 pt-4 border-t border-[rgba(100,116,139,0.2)]">
                    <label htmlFor="targetPrice" className="text-sm font-medium text-[#94A3B8]">
                      預售價格 <span className="text-[#64748B]">（選填）</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]">NT$</span>
                      <input
                        type="text"
                        id="targetPrice"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleInputChange}
                        placeholder="您的理想價格"
                        className="w-full px-4 py-3 pl-14 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* AI Disclaimer */}
              <div className="p-4 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.3)] flex items-start gap-3">
                <AlertTriangle className="size-5 text-[#F59E0B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#F59E0B] leading-relaxed">
                  AI 辨識結果僅供參考，請務必確認實物狀況，以免影響最終報價。
                </p>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-t border-[rgba(100,116,139,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-[#94A3B8] text-sm">
                完成上傳後，錶商將在 24 小時內提供報價
              </p>
            </div>
            <LuxuryButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px]"
              onClick={handleSubmit}
              disabled={uploadedImages.length === 0 || scanStatus !== "complete"}
            >
              發布刊登
            </LuxuryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
