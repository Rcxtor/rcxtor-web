
const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-bg">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        {/* Top row */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-portfolio-text transition-colors hover:text-portfolio-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-portfolio-accent font-mono text-sm text-portfolio-accent">
                S.
              </span>
              <span className="text-sm font-medium">Saif Ahmmed Sifat</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-portfolio-muted">
              Building thoughtful web applications with Laravel, React, and
              a focus on practical engineering.
            </p>
          </div>

          {/* Footer navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-portfolio-muted transition-colors hover:text-portfolio-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t border-portfolio-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-wide text-portfolio-muted">
            © {year} SAIF AHMMED SIFAT. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Rcxtor"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-portfolio-muted transition-colors hover:text-portfolio-accent"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/saif-ahmed-sifat/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-portfolio-muted transition-colors hover:text-portfolio-accent"
            >
              LinkedIn ↗
            </a>

            <a
              href="#top"
              className="flex h-8 w-8 items-center justify-center border border-portfolio-border text-sm text-portfolio-muted transition-colors hover:border-portfolio-accent hover:text-portfolio-accent"
              aria-label="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
