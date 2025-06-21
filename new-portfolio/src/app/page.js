import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import EmailsSection from '../components/EmailsSection';
import AchievementsSection from '../components/AchievementsSection';
import InvestmentSection from '../components/InvestmentSection';
import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <ErrorBoundary>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <InvestmentSection />
        <EmailsSection />
      </div>
      <Footer />
      <Analytics />
    </main>
    </ErrorBoundary>
  )
}
