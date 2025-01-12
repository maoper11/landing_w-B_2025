import React from 'react'
    import Navbar from './components/Navbar'
    import Hero from './components/Hero'
    import ProgramExplanation from './components/ProgramExplanation'
    import Benefits from './components/Benefits'
    import Process from './components/Process'
    import Testimonials from './components/Testimonials'
    import FAQ from './components/FAQ'
    import Footer from './components/Footer'

    export default function App() {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="pt-16">
            <Hero />
            <div className="relative z-10 bg-white">
              <ProgramExplanation />
              <Benefits />
              <Process />
              <Testimonials />
              <FAQ />
              <Footer />
            </div>
          </main>
        </div>
      )
    }
