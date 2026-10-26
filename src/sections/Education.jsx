
// import {
//   education,
//   research,
//   certifications,
// } from '../data/education'

// function Education() {
//   return (
//     <section
//       id="education"
//       className="border-t border-portfolio-border py-16 sm:py-20"
//     >
//       {/* Section heading */}
//       <div className="grid gap-8 sm:grid-cols-[1fr_2fr]">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
//             05 / BACKGROUND
//           </p>

//           <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
//             Education
//             <br />
//             <span className="text-portfolio-muted">
//               & Research
//             </span>
//           </h2>
//         </div>

//         <div className="max-w-2xl">
//           <p className="text-sm leading-7 text-portfolio-muted sm:text-base">
//             Academic foundations, independent research, and
//             professional learning that contribute to my
//             development as an engineer.
//           </p>
//         </div>
//       </div>

//       {/* Academic education */}
//       <div className="mt-14 grid gap-6 sm:grid-cols-[1fr_2fr]">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
//             01 — Education
//           </p>
//         </div>

//         <div className="divide-y divide-portfolio-border border-y border-portfolio-border">
//           {education.map((item) => (
//             <article
//               key={item.id}
//               className="grid gap-3 py-6 sm:grid-cols-[1fr_auto]"
//             >
//               <div>
//                 <h3 className="text-base font-medium text-portfolio-text">
//                   {item.qualification}
//                 </h3>

//                 <p className="mt-1 text-sm text-portfolio-muted">
//                   {item.institution}
//                 </p>

//                 {item.result && (
//                   <p className="mt-3 font-mono text-xs text-portfolio-accent">
//                     {item.result}
//                   </p>
//                 )}
//               </div>

//               <p className="font-mono text-xs text-portfolio-muted sm:text-right">
//                 {item.period}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* Thesis and research */}
//       <div className="mt-16 grid gap-6 sm:grid-cols-[1fr_2fr]">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
//             02 — Thesis & Research
//           </p>
//         </div>

//         <div className="space-y-6">
//           {research.map((item) => (
//             <article
//               key={item.id}
//               className="rounded-sm border border-portfolio-border bg-portfolio-surface p-5 sm:p-7"
//             >
//               <p className="font-mono text-xs uppercase tracking-wider text-portfolio-accent">
//                 {item.category}
//               </p>

//               <h3 className="mt-3 text-xl font-semibold leading-snug">
//                 {item.title}
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-portfolio-muted">
//                 {item.description}
//               </p>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {item.technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="border border-portfolio-border px-2.5 py-1 font-mono text-xs text-portfolio-muted"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-portfolio-border pt-4">
//                 {item.paperUrl && (
//                   <a
//                     href={item.paperUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-sm text-portfolio-accent transition-opacity hover:opacity-70"
//                   >
//                     Read thesis ↗
//                   </a>
//                 )}

//                 {item.sourceUrl && (
//                   <a
//                     href={item.sourceUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-sm text-portfolio-accent transition-opacity hover:opacity-70"
//                   >
//                     Source code ↗
//                   </a>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>

//       {/* Certifications */}
//       <div className="mt-16 grid gap-6 sm:grid-cols-[1fr_2fr]">
//         <div>
//           <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
//             03 — Certifications
//           </p>
//         </div>

//         <div className="divide-y divide-portfolio-border border-y border-portfolio-border">
//           {certifications.map((item) => (
//             <article
//               key={item.id}
//               className="flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-center"
//             >
//               <div>
//                 <h3 className="font-medium text-portfolio-text">
//                   {item.name}
//                 </h3>

//                 <p className="mt-1 text-sm text-portfolio-muted">
//                   {item.issuer} · {item.issued}
//                 </p>
//               </div>

//               {item.credentialUrl && (
//                 <a
//                   href={item.credentialUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="shrink-0 text-sm text-portfolio-accent hover:opacity-70"
//                 >
//                   Verify certificate ↗
//                 </a>
//               )}
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Education
import {
  education,
  research,
  certifications,
} from '../data/education'

function Education() {
  return (
    <section
      id="education"
      className="border-t border-portfolio-border py-16 sm:py-20"
    >
      {/* Section heading */}
      <div className='mx-auto max-w-7xl px-6 sm:px-10 lg:px-12'>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-portfolio-accent">
            04 / BACKGROUND
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-portfolio-text sm:text-4xl">
            Education
            <br />
            <span className="text-portfolio-muted">
              & research
            </span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Academic education */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
              Education
            </p>

            <div className="mt-4 divide-y divide-portfolio-border border-y border-portfolio-border">
              {education.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-2 py-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h3 className="font-medium text-portfolio-text">
                      {item.qualification}
                    </h3>

                    <p className="mt-1 text-sm text-portfolio-muted">
                      {item.institution}
                      {/* <br /> */}
                      <span className='text-portfolio-accent'>{item.result && ` · ${item.result}`}</span>
                    </p>
                  </div>

                  <p className="font-mono text-xs text-portfolio-muted sm:text-right">
                    {item.period}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Thesis and research */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
              Thesis & Research
            </p>

            <div className="mt-4 space-y-6">
              {research.map((item) => (
                <article
                  key={item.id}
                  className="rounded-sm border transition-colors duration-200 hover:border-portfolio-accent  border-portfolio-border bg-portfolio-surface p-5 sm:p-7"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-portfolio-accent">
                    {item.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-portfolio-text">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-portfolio-muted">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent border-portfolio-border px-2.5 py-1 font-mono text-xs text-portfolio-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-portfolio-border pt-4">
                    {item.paperUrl && (
                      <a
                        href={item.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-portfolio-accent transition-opacity hover:opacity-70"
                      >
                        Read thesis ↗
                      </a>
                    )}

                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-portfolio-accent transition-opacity hover:opacity-70"
                      >
                        Source code ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-portfolio-muted">
              Certifications
            </p>

            <div className="mt-4 divide-y divide-portfolio-border border-y border-portfolio-border">
              {certifications.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-2 py-5 sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <h3 className="font-medium text-portfolio-text">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-portfolio-muted">
                      {item.issuer}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-portfolio-muted sm:text-right">
                    {item.issued}
                    <br />
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-portfolio-accent transition-opacity hover:opacity-70"
                    >
                      Credential ↗
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
// transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent

export default Education