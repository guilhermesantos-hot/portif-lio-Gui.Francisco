import { ThemeProvider } from './context/ThemeContext'
import { SmoothScroll } from './components/SmoothScroll'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div className="relative min-h-screen dark:bg-[#0b0b0d] bg-[#f8f9fa] dark:text-[#f4f4f6] text-[#0e0e11] selection:bg-[#ccff00] selection:text-black transition-colors duration-300">
          {/* Custom cursor following pointer on desktop */}
          <CustomCursor />

          {/* Floating discrete navbar with theme switcher */}
          <Navbar />

          <main>
            {/* Hero Section with Snellenberg giant typography & Dannaway dual facet */}
            <Hero />

            {/* Selected Projects gallery with Emotion Agency cards & Guglieri clean grid */}
            <Projects />

            {/* About section with Dannaway columnar structure */}
            <About />

            {/* Contact section resolving Guglieri direct contact limitation */}
            <Contact />
          </main>

          {/* Minimalist footer with live clock and back to top */}
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  )
}

export default App
