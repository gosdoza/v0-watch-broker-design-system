"use client"

import React from "react"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Watch, Upload, X, MapPin, Store, User, Phone, MessageCircle, FileText, Camera, CheckCircle } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { cn } from "@/lib/utils"

interface FileUploadProps {
  id: string
  label: string
  hint?: string
  icon: React.ReactNode
  accept: string
  multiple?: boolean
  files: File[]
  onFilesChange: (files: File[]) => void
}

function FileUploadArea({ id, label, hint, icon, accept, multiple = false, files, onFilesChange }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)

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
    const droppedFiles = Array.from(e.dataTransfer.files)
    if (multiple) {
      onFilesChange([...files, ...droppedFiles])
    } else {
      onFilesChange(droppedFiles.slice(0, 1))
    }
  }, [files, multiple, onFilesChange])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      if (multiple) {
        onFilesChange([...files, ...selectedFiles])
      } else {
        onFilesChange(selectedFiles.slice(0, 1))
      }
    }
  }, [files, multiple, onFilesChange])

  const removeFile = useCallback((index: number) => {
    onFilesChange(files.filter((_, i) => i !== index))
  }, [files, onFilesChange])

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#94A3B8]">
        {label}
      </label>
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 transition-all duration-300 cursor-pointer",
          isDragging
            ? "border-[#C9A962] bg-[rgba(201,169,98,0.1)]"
            : "border-[rgba(100,116,139,0.3)] hover:border-[rgba(100,116,139,0.5)] bg-[rgba(255,255,255,0.02)]"
        )}
      >
        <input
          type="file"
          id={id}
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="p-3 rounded-full bg-[rgba(201,169,98,0.1)] text-[#C9A962]">
            {icon}
          </div>
          <div>
            <p className="text-[#F5F5F5] font-medium">
              拖曳檔案至此或 <span className="text-[#C9A962]">點擊上傳</span>
            </p>
            {hint && (
              <p className="text-[#64748B] text-sm mt-1">{hint}</p>
            )}
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      {files.length > 0 && (
        <div className="space-y-2 mt-3">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.2)]"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="size-4 text-[#22C55E]" />
                <span className="text-sm text-[#F5F5F5] truncate max-w-[200px]">
                  {file.name}
                </span>
                <span className="text-xs text-[#64748B]">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)] text-[#64748B] hover:text-[#DC2626] transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DealerApplicationPage() {
  const [formData, setFormData] = useState({
    storeName: "",
    contactPerson: "",
    phone: "",
    address: "",
    lineId: "",
  })
  const [licenseFiles, setLicenseFiles] = useState<File[]>([])
  const [storePhotos, setStorePhotos] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle success - would redirect or show success message
  }

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[rgba(201,169,98,0.03)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[rgba(201,169,98,0.02)] blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
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
        </div>

        {/* Main Card */}
        <GlassCard variant="elevated" padding="lg">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl text-[#F5F5F5] mb-3">
              申請成為認證錶商
            </h1>
            <p className="text-[#94A3B8] leading-relaxed">
              加入平台，獲取全台即時的一手名錶貨源。
            </p>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Store Name */}
            <div className="space-y-2">
              <label htmlFor="storeName" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                <Store className="size-4" />
                店面名稱
              </label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                value={formData.storeName}
                onChange={handleInputChange}
                placeholder="例：永恆鐘錶行"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
              />
            </div>

            {/* Contact Person */}
            <div className="space-y-2">
              <label htmlFor="contactPerson" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                <User className="size-4" />
                聯絡人
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="您的姓名"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                <Phone className="size-4" />
                電話
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="09XX-XXX-XXX"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
              />
            </div>

            {/* Store Address */}
            <div className="space-y-2">
              <label htmlFor="address" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                <MapPin className="size-4" />
                店面地址
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="開始輸入地址..."
                  required
                  className="w-full px-4 py-3 pl-4 pr-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B]">
                  <MapPin className="size-5" />
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                請輸入完整店面地址，方便賣家親自到店交易
              </p>
            </div>

            {/* LINE ID */}
            <div className="space-y-2">
              <label htmlFor="lineId" className="flex items-center gap-2 text-sm font-medium text-[#94A3B8]">
                <MessageCircle className="size-4" />
                LINE ID <span className="text-[#C9A962]">（必要）</span>
              </label>
              <input
                type="text"
                id="lineId"
                name="lineId"
                value={formData.lineId}
                onChange={handleInputChange}
                placeholder="您的 LINE ID"
                required
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(100,116,139,0.3)] text-[#F5F5F5] placeholder:text-[#64748B] focus:outline-none focus:border-[#C9A962] focus:ring-1 focus:ring-[#C9A962] transition-all duration-300"
              />
              <div className="flex items-start gap-2 p-3 rounded-lg bg-[rgba(6,199,85,0.1)] border border-[rgba(6,199,85,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-[#06C755] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <p className="text-sm text-[#06C755]">
                  我們將透過此 ID 發送即時報價通知（LINE Notify）
                </p>
              </div>
            </div>

            {/* File Uploads */}
            <div className="space-y-6 pt-4 border-t border-[rgba(100,116,139,0.2)]">
              {/* Business License */}
              <FileUploadArea
                id="license"
                label="營業登記證"
                hint="支援 PDF、JPG、PNG 格式，檔案大小不超過 10MB"
                icon={<FileText className="size-6" />}
                accept=".pdf,.jpg,.jpeg,.png"
                files={licenseFiles}
                onFilesChange={setLicenseFiles}
              />

              {/* Store Photos */}
              <FileUploadArea
                id="storePhotos"
                label="店面照片"
                hint="可上傳多張照片，建議包含店面外觀與內部陳列"
                icon={<Camera className="size-6" />}
                accept=".jpg,.jpeg,.png"
                multiple
                files={storePhotos}
                onFilesChange={setStorePhotos}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <LuxuryButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin size-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    處理中...
                  </>
                ) : (
                  "送出申請，等待審核"
                )}
              </LuxuryButton>

              {/* Review Note */}
              <p className="mt-4 text-center text-sm text-[#64748B]">
                審核時間約 1-2 個工作天，結果將透過 LINE 通知您。
              </p>
            </div>
          </form>
        </GlassCard>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-[#94A3B8] text-sm hover:text-[#C9A962] transition-colors"
          >
            返回登入頁面
          </Link>
        </div>
      </div>
    </div>
  )
}
