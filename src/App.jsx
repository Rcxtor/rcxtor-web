
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

import CustomCursor from "./components/cursor/CustomCursor";
import Hero from './sections/Hero'
import SelectedWork from './sections/SelectedWork'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-portfolio-bg px-6 py-8 text-portfolio-text sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <CustomCursor />
        <SiteHeader />
        <Hero />
        <SelectedWork />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />

        <SiteFooter />
      </div>
    </main>
  )
}

export default App
