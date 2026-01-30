"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LuxuryButton } from "./luxury-button"

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  showUserMenu?: boolean
  userName?: string
  userAvatar?: string
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, showUserMenu = false, userName, userAvatar, ...props }, ref) => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <nav
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[rgba(5,5,5,0.95)] backdrop-blur-xl border-b border-[rgba(100,116,139,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent",
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              {/* Watch Icon */}
              <div className="relative size-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] opacity-20 group-hover:opacity-40 transition-opacity" />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6 text-[#C9A962]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v6l4 2" />
                  <path d="M9 1h6M9 23h6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-[#F5F5F5] group-hover:text-[#C9A962] transition-colors">
                  Watch Broker
                </span>
                <span className="text-[10px] text-[#64748B] tracking-widest uppercase">
                  Taiwan
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex items-center gap-6">
                <NavLink href="/seller">賣家中心</NavLink>
                <NavLink href="/dealer">錶商採購</NavLink>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-[rgba(100,116,139,0.3)]" />

              {/* User Menu or Login */}
              {showUserMenu ? (
                <UserMenu userName={userName} userAvatar={userAvatar} />
              ) : (
                <LuxuryButton variant="primary" size="sm">
                  登入 / 註冊
                </LuxuryButton>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-[#94A3B8] hover:text-[#F5F5F5] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 border-b border-[rgba(100,116,139,0.2)]" : "max-h-0"
          )}
        >
          <div className="px-4 py-4 space-y-4 bg-[rgba(5,5,5,0.98)]">
            <MobileNavLink href="/seller" onClick={() => setIsMobileMenuOpen(false)}>
              賣家中心
            </MobileNavLink>
            <MobileNavLink href="/dealer" onClick={() => setIsMobileMenuOpen(false)}>
              錶商採購
            </MobileNavLink>
            <div className="pt-4 border-t border-[rgba(100,116,139,0.2)]">
              {showUserMenu ? (
                <UserMenu userName={userName} userAvatar={userAvatar} />
              ) : (
                <LuxuryButton variant="primary" className="w-full">
                  登入 / 註冊
                </LuxuryButton>
              )}
            </div>
          </div>
        </div>
      </nav>
    )
  }
)
Navbar.displayName = "Navbar"

// Nav Link Component
const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className="relative text-sm text-[#94A3B8] hover:text-[#F5F5F5] transition-colors duration-300 group py-1"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#E8D5A3] via-[#C9A962] to-[#9A7B3C] group-hover:w-full transition-all duration-300" />
  </Link>
)

// Mobile Nav Link Component
const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string
  onClick?: () => void
  children: React.ReactNode
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-[#94A3B8] hover:text-[#C9A962] transition-colors duration-300 py-2"
  >
    {children}
  </Link>
)

// User Menu Component
const UserMenu = ({
  userName,
  userAvatar,
}: {
  userName?: string
  userAvatar?: string
}) => (
  <div className="flex items-center gap-3">
    <div className="relative size-9 rounded-full overflow-hidden ring-2 ring-[rgba(201,169,98,0.3)] hover:ring-[#C9A962] transition-all cursor-pointer">
      {userAvatar ? (
        <img src={userAvatar || "/placeholder.svg"} alt={userName || "使用者頭像"} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[rgba(201,169,98,0.2)] to-[rgba(100,116,139,0.2)] flex items-center justify-center">
          <svg className="size-5 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}
    </div>
    {userName && (
      <span className="text-sm text-[#F5F5F5] hidden lg:block">{userName}</span>
    )}
  </div>
)

export { Navbar }
