export function HeroVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="grid-pattern absolute inset-0 opacity-60" />
      <div className="absolute left-[12%] top-[18%] w-[48%] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="h-3 w-1/3 rounded-full bg-violet/20" />
        <div className="mt-3 h-2 w-full rounded-full bg-slate-100" />
        <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-100" />
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="h-20 rounded-xl bg-blue/10" />
          <div className="h-20 rounded-xl bg-violet/10" />
        </div>
      </div>
      <div className="absolute bottom-[13%] right-[8%] w-[40%] rounded-2xl border border-slate-200 bg-ink p-4 text-white shadow-xl">
        <div className="text-[10px] font-bold uppercase tracking-[.18em] text-white/50">FLOW</div>
        <div className="mt-4 space-y-2">
          {['Problem', 'Structure', 'Build', 'Validate'].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px]">
                {index + 1}
              </span>
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BookVisual() {
  return (
    <div className="grid-pattern relative min-h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
      <div className="mx-auto mt-6 max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-violet/20" />
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-lg bg-slate-100" />
            <div className="h-7 w-7 rounded-lg bg-slate-100" />
          </div>
        </div>
        <div className="h-36 rounded-2xl bg-gradient-to-br from-violet/10 to-blue/10" />
        <div className="mt-4 h-2 w-full rounded bg-slate-100" />
        <div className="mt-2 h-2 w-3/4 rounded bg-slate-100" />
        <div className="mt-5 flex gap-2">
          <span className="pill">Navigation</span>
          <span className="pill">A11y</span>
        </div>
      </div>
    </div>
  )
}

export function ChildhoodVisual() {
  return (
    <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 bg-ink p-6 text-white">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
      <div className="relative mx-auto mt-4 max-w-sm rounded-[1.8rem] bg-white p-4 text-ink shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 rounded-full bg-blue/20" />
          <div className="rounded-full bg-violet/10 px-3 py-1 text-[10px] font-bold text-violet">INTERACTIVE</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="h-32 rounded-2xl bg-blue/10" />
          <div className="flex flex-col gap-3">
            <div className="h-[58px] rounded-2xl bg-violet/10" />
            <div className="h-[58px] rounded-2xl bg-slate-100" />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="pill">Persist</span>
          <span className="pill">Teacher</span>
          <span className="pill">Play</span>
        </div>
      </div>
    </div>
  )
}

export function PipelineVisual() {
  const steps = ['PDF', 'DATA', 'AI', 'HTML', '✓']
  return (
    <div className="grid-pattern flex min-h-[330px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6">
      <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl border text-sm font-extrabold ${
              step === 'AI' ? 'border-violet bg-violet text-white' : 'border-slate-200 bg-slate-50 text-ink'
            }`}>
              {step}
            </div>
            {index < steps.length - 1 && <span className="text-slate-300">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
