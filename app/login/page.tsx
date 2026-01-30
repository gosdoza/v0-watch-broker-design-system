import Image from "next/image"
import Link from "next/link"
import { Watch } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[#050505]">
      {/* Left Side - Watch Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <Image
          src="/images/login-watch.jpg"
          alt="精密腕錶機芯"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-[#050505]/90" />
        
        {/* Logo overlay */}
        <div className="absolute top-8 left-8 z-10">
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

        {/* Bottom text overlay */}
        <div className="absolute bottom-12 left-8 right-8 z-10">
          <p className="font-serif text-3xl text-[#F5F5F5] leading-relaxed text-balance">
            您的腕錶，
            <br />
            <span className="bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">值得更好的價格</span>
          </p>
          <p className="mt-4 text-[#94A3B8] text-sm">
            台灣首選 C2B 腕錶收購平台
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] rounded-full blur-md opacity-50" />
              <div className="relative bg-[#050505] p-2 rounded-full border border-[rgba(201,169,98,0.3)]">
                <Watch className="size-5 text-[#C9A962]" />
              </div>
            </div>
            <span className="font-serif text-xl text-[#F5F5F5] tracking-wide">
              Watch Broker
            </span>
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto flex flex-col min-h-[70vh] lg:min-h-0">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl text-[#F5F5F5] mb-2">
              歡迎回到
            </h1>
            <p className="font-serif text-3xl bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent">
              Watch Broker
            </p>
          </div>

          {/* Login Form Content */}
          <div className="space-y-6">
            {/* Primary LINE Login Button - Large and Prominent */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-5 px-6 rounded-lg bg-[#06C755] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#05B04A] hover:shadow-[0_0_30px_rgba(6,199,85,0.4)] active:scale-[0.98]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7"
                aria-hidden="true"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              使用 LINE 帳號登入
            </button>

            {/* Helper Text */}
            <p className="text-center text-[#64748B] text-sm leading-relaxed">
              為確保即時報價通知，本平台全面採用 LINE 帳號認證
            </p>
          </div>

          {/* Spacer to push content to bottom */}
          <div className="flex-1 min-h-12" />

          {/* Bottom Section */}
          <div className="space-y-6 pt-8 border-t border-[rgba(100,116,139,0.15)]">
            {/* Dealer Apply Link - Gold Text */}
            <div className="text-center">
              <Link
                href="/apply/dealer"
                className="group inline-block"
              >
                <span className="text-[#94A3B8] text-sm">你是錶商嗎？</span>
                <span className="block mt-1 bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] bg-clip-text text-transparent font-medium group-hover:opacity-80 transition-opacity">
                  請申請成為我們的職業錶商買家
                </span>
              </Link>
            </div>

            {/* Terms */}
            <p className="text-center text-[#64748B] text-xs leading-relaxed">
              登入即表示您同意我們的{" "}
              <Link href="/terms" className="text-[#94A3B8] hover:text-[#C9A962] transition-colors">
                服務條款
              </Link>{" "}
              與{" "}
              <Link href="/privacy" className="text-[#94A3B8] hover:text-[#C9A962] transition-colors">
                隱私權政策
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
