import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import PlatformSection from './components/PlatformSection'
import ChartsGallery from './components/ChartsGallery'
import MLSection from './components/MLSection'
import DashboardSection from './components/DashboardSection'
import PipelineSection from './components/PipelineSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <PlatformSection />
      <ChartsGallery />
      <MLSection />
      <DashboardSection />
      <PipelineSection />
      <Footer />
    </div>
  )
}
