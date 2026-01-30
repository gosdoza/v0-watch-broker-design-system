import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { TrustStats } from "@/components/landing/trust-stats"
import { WhyUsSection } from "@/components/landing/why-us-section"
import { HowItWorksSection } from "@/components/landing/how-it-works"
import { FeaturedWatches } from "@/components/landing/featured-watches"
import { TestimonialsSection } from "@/components/landing/testimonials"
import { FinalCtaSection } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Cinematic & Split */}
      <HeroSection />

      {/* Trust Stats Bar - Social Proof */}
      <TrustStats />

      {/* Why Us - Platform Advantages (Bento Grid) */}
      <WhyUsSection />

      {/* How It Works - Visual Steps */}
      <HowItWorksSection />

      {/* Featured Watches - Live Ticker */}
      <FeaturedWatches />

      {/* Testimonials - Trust & Stories */}
      <TestimonialsSection />

      {/* Final CTA */}
      <FinalCtaSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
