export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 md:px-12 lg:px-20">
        <div className="grain-overlay absolute inset-0 rounded-3xl border border-divider bg-charcoal/60"></div>

        <header className="relative z-10 flex flex-col gap-6 border-b border-divider pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-ivory/40">
              Whispered Authority
            </p>
            <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
              Accrue Flow
            </h1>
          </div>
          <div className="flex flex-col items-start gap-4 text-sm text-ivory/60 md:items-end">
            <span className="text-base font-medium text-ivory">
              AccrueFlow.com
            </span>
            <p className="max-w-xs leading-6">
              The AI-powered private equity command center trusted by principals
              overseeing $30M+ net worth portfolios.
            </p>
            <button className="rounded-full border border-divider px-6 py-3 text-xs uppercase tracking-[0.3em] text-ivory/70 transition duration-200 hover:border-brass hover:text-brass">
              Private Access
            </button>
          </div>
        </header>

        <main className="relative z-10 flex flex-1 flex-col gap-16 py-14">
          <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 text-sm text-ivory/60">
                <span className="h-px w-16 bg-divider" aria-hidden />
                <span>Private Equity Clairvoyance</span>
              </div>
              <div className="space-y-6">
                <p className="font-serif text-5xl leading-tight tracking-tight md:text-[56px]">
                  Your private equity cash flow. Visualized. Guaranteed.
                </p>
                <p className="max-w-xl text-lg leading-relaxed text-ivory/70">
                  Accrue Flow senses capital calls before they surface, auto
                  orchestrates liquidity, and notarizes every movement across
                  funds, co-invests, and direct deals. No surprises. No
                  shortfalls. No turbulence.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#briefing"
                  className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-4 font-medium uppercase tracking-[0.25em] text-charcoal transition-colors duration-200 hover:bg-[#a9780a]"
                >
                  Request A Briefing
                </a>
                <a
                  href="#infrastructure"
                  className="inline-flex items-center justify-center rounded-full border border-divider px-8 py-4 font-medium uppercase tracking-[0.25em] text-ivory/70 transition-colors duration-200 hover:border-brass hover:text-brass"
                >
                  Explore The Stack
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    label: "Capital Calls Intercepted",
                    value: "128",
                    description: "Captured 5 days pre-notice on average.",
                  },
                  {
                    label: "Liquidity Guardrails",
                    value: "100%",
                    description: "Coverage on commitments across 14 custodians.",
                  },
                  {
                    label: "AI Confidence Index",
                    value: "0.12%",
                    description: "Probability of missed capital call event.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-3 rounded-2xl border border-divider bg-surface/60 px-6 py-5"
                  >
                    <span className="text-xs uppercase tracking-[0.35em] text-ivory/50">
                      {item.label}
                    </span>
                    <span className="font-serif text-3xl text-brass">
                      {item.value}
                    </span>
                    <p className="text-sm text-ivory/60">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-6 rounded-3xl border border-divider bg-surface/60 p-8">
              <div className="flex items-center justify-between border-b border-divider pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-ivory/40">
                    Nightly Stress Test
                  </p>
                  <p className="font-serif text-2xl tracking-tight">
                    Contingency Ledger
                  </p>
                </div>
                <div className="rounded-full border border-divider px-4 py-1 text-xs uppercase tracking-[0.3em] text-brass">
                  Live
                </div>
              </div>
              <div className="space-y-5 text-sm text-ivory/65">
                {[
                  {
                    fund: "Helios Growth Fund VII",
                    exposure: "$12.4M committed · $7.1M unfunded",
                    action: "Auto-liquidation path confirmed across Morgan, First Republic, SVB Private.",
                  },
                  {
                    fund: "Kensington Secondary II",
                    exposure: "$8.2M committed · $1.9M unfunded",
                    action:
                      "Secondary windows monitored · advance notice from GP secured.",
                  },
                  {
                    fund: "Axiom Direct Credit",
                    exposure: "$10M committed · $3.5M unfunded",
                    action:
                      "Cash drag capped at 2.1% · sweep scheduled to Blackstone Treasury.",
                  },
                ].map((line) => (
                  <div
                    key={line.fund}
                    className="rounded-2xl border border-divider/60 bg-charcoal/50 p-5"
                  >
                    <p className="font-serif text-lg text-ivory">
                      {line.fund}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ivory/40">
                      {line.exposure}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                      {line.action}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-divider pt-6 text-xs uppercase tracking-[0.35em] text-ivory/50">
                <span>Liquidity Coverage 100%</span>
                <span>Variance 0.47%</span>
              </div>
            </aside>
          </section>

          <section
            id="infrastructure"
            className="grid gap-8 border border-divider bg-surface/70 p-10 md:grid-cols-3 md:gap-10 md:rounded-3xl"
          >
            {[
              {
                title: "Unified Fund Graph",
                text: "Consolidates GP notices, capital schedules, and bank positions into a single balance sheet fabric refreshed every 15 minutes.",
              },
              {
                title: "AI Vigilance Engine",
                text: "Models each LP agreement, predicts capital call timing, and escalates exceptions with whisper-only notifications tuned to your thresholds.",
              },
              {
                title: "Execution Autopilot",
                text: "Routes liquidity via pre-cleared rails, reconciles settlement, and updates controllers with immutable audit layer.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 border border-divider/60 bg-charcoal/50 p-6"
              >
                <span className="h-px w-16 bg-brass/80" aria-hidden />
                <h3 className="font-serif text-2xl text-ivory">{item.title}</h3>
                <p className="text-sm leading-6 text-ivory/70">{item.text}</p>
              </article>
            ))}
          </section>

          <section
            id="briefing"
            className="flex flex-col gap-10 rounded-3xl border border-divider bg-surface/60 p-10 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-ivory/40">
                Assurance Protocol
              </p>
              <h2 className="font-serif text-4xl leading-[1.15]">
                Zero tolerance for missed capital calls.
              </h2>
              <p className="text-lg text-ivory/70">
                Accrue Flow audits every subscription document, simulates cash
                waterfalls across your entity map, and enforces readiness with
                automated sweeps, credit lines, and treasury plays before your
                general partners ever reach out.
              </p>
              <ul className="grid gap-3 text-sm text-ivory/65 md:grid-cols-2">
                {[
                  "Aircraft-grade redundancy across banking providers.",
                  "Scenario desk monitors 24/7 with AI + human concurrence.",
                  "Capital call notarization with tamper-proof archive.",
                  "Integrated with controllers, tax, and trustee workflows.",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 border border-divider/60 bg-charcoal/50 p-4"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brass" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-sm space-y-6 border border-divider bg-charcoal/50 p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-ivory/40">
                  Private Intake
                </p>
                <p className="font-serif text-2xl text-ivory">
                  Request a confidential onboarding.
                </p>
                <p className="text-sm text-ivory/65">
                  We engage directly with principals, CIOs, and family office
                  COOs with proof of $30M+ capital under stewardship.
                </p>
              </div>
              <form className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.3em] text-ivory/40"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alex Carter"
                    className="rounded-none border border-divider bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-brass focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="family-office"
                    className="text-xs uppercase tracking-[0.3em] text-ivory/40"
                  >
                    Family Office / Institution
                  </label>
                  <input
                    id="family-office"
                    type="text"
                    placeholder="Carter Rivers Family Office"
                    className="rounded-none border border-divider bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-brass focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.3em] text-ivory/40"
                  >
                    Secure Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="principal@accrueflow.com"
                    className="rounded-none border border-divider bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-brass focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brass px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-charcoal transition-colors duration-200 hover:bg-[#a9780a]"
                >
                  Initiate Briefing
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="relative z-10 mt-auto border-t border-divider pt-8 text-xs uppercase tracking-[0.3em] text-ivory/40">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Accrue Flow Holdings</span>
            <div className="flex gap-6 text-ivory/30">
              <a href="#briefing">Onboarding</a>
              <a href="#infrastructure">Infrastructure</a>
              <a href="mailto:intake@accrueflow.com">intake@accrueflow.com</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
