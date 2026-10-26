
import { useState } from "react";

const navLinks = [
  { label: "Work", href: "#work", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
  { label: "Background", href: "#education", number: "04" },
  { label: "About", href: "#about", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-border/80 bg-portfolio-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group no-lift flex items-center gap-3"
          aria-label="Saif Ahmmed Sifat — home"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-portfolio-accent font-mono text-sm text-portfolio-accent transition-colors group-hover:bg-portfolio-accent group-hover:text-portfolio-bg">
            S.
          </span>

          <span className="flex flex-col gap-0.5">
            <span className="text-sm font-medium tracking-wide text-portfolio-text">
              Saif Ahmmed Sifat
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-portfolio-muted">
              Developer / Portfolio
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 text-xs text-portfolio-muted transition-colors hover:text-portfolio-accent"
            >
              <span className="font-mono text-[9px] text-portfolio-accent/70">
                {link.number}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CV link */}
        <a
          href="/CV_download.pdf"
          download="Saif-Ahmmed-Sifat-CV.pdf"
          className="hidden items-center gap-2 border border-portfolio-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-portfolio-text transition-colors hover:border-portfolio-accent hover:text-portfolio-accent sm:inline-flex"
        >
          Download CV
          <span aria-hidden="true">↓</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-portfolio-border text-portfolio-text transition-colors hover:border-portfolio-accent lg:hidden"
        >
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] border-t border-portfolio-border opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!menuOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="min-h-0 overflow-hidden px-6 sm:px-10"
        >
          <div className="mx-auto max-w-7xl py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-portfolio-border/70 py-4 text-sm text-portfolio-muted transition-colors hover:text-portfolio-accent"
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] text-portfolio-accent">
                  {link.number}
                </span>
              </a>
            ))}

            <a
              href="/cv.pdf"
              download
              onClick={closeMenu}
              className="mt-4 inline-flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-wider text-portfolio-accent"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
