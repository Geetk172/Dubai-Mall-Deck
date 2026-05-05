import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhySection } from './components/WhySection'
import { VideoSection } from './components/VideoSection'
import { LuxurySection } from './components/LuxurySection'
import { AttractionsSection } from './components/AttractionsSection'
import { DiningSection } from './components/DiningSection'
import { EventsSection } from './components/EventsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <VideoSection />
        <LuxurySection />
        <AttractionsSection />
        <DiningSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App