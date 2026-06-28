import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Intro, Methods, Services, Schedule, Packages } from './components/CoreSections'
import { Instructors, Experience, Progress, Testimonials } from './components/StorySections'
import { Booking, Instagram, Location, FinalCTA, Footer } from './components/ConversionSections'

export default function App() {
  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Methods />
        <Services />
        <Schedule />
        <Packages />
        <Instructors />
        <Experience />
        <Progress />
        <Booking />
        <Testimonials />
        <Instagram />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
