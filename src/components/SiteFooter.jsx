
function SiteFooter() {
  return (
    <footer
      id="contact"
      className="flex flex-col gap-3 border-t border-portfolio-border py-5 font-mono text-xs text-portfolio-muted sm:flex-row sm:items-center sm:justify-between"
    >
      <span>SA / SOFTWARE DEVELOPMENT</span>
      <span>DESIGNED & BUILT WITH REACT</span>
      <a
        href="#home"
        className="transition-colors hover:text-portfolio-accent"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  )
}

export default SiteFooter
