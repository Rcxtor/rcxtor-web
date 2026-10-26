
function SiteHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-portfolio-border pb-5 sm:flex-row sm:items-center sm:justify-between">
      <a
        href="#home"
        className="font-mono text-sm font-medium tracking-wide text-portfolio-text"
      >
        SA<span className="text-portfolio-accent">/</span>DEV
      </a>

      <nav
        aria-label="Main navigation"
        className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-xs text-portfolio-muted"
      >
        <a className="hover:text-portfolio-accent" href="#work">WORK</a>
        <a className="hover:text-portfolio-accent" href="#skills">SKILLS</a>
        <a className="hover:text-portfolio-accent" href="#experience">EXPERIENCE</a>
        <a className="hover:text-portfolio-accent" href="#about">ABOUT</a>
        <a className="hover:text-portfolio-accent" href="#contact">CONTACT</a>
      </nav>


      <span className="hidden items-center gap-2 font-mono text-xs text-portfolio-muted lg:flex">
        <span className="h-2 w-2 rounded-full bg-portfolio-accent" />
        AVAILABLE FOR OPPORTUNITIES
      </span>
      <a
        href="/CV_download.pdf"
        download="Saif-Ahmmed-Sifat-CV.pdf"
        className="border border-portfolio-border px-4 py-2
                  font-mono text-xs text-portfolio-text
                  transition-colors hover:border-portfolio-accent
                  hover:text-portfolio-accent"
      >
        Download CV ↓
      </a>
    </header>
  )
}

export default SiteHeader
