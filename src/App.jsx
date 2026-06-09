const services = [
  {
    title: 'Custom software',
    description:
      'Product-grade web applications, internal tools, and customer portals designed around real workflows.',
    accent: '01',
  },
  {
    title: 'IoT systems',
    description:
      'Sensor networks, telemetry pipelines, device fleets, and dashboards that turn signals into decisions.',
    accent: '02',
  },
  {
    title: 'Technology strategy',
    description:
      'Architecture, automation, and delivery guidance for teams that need a clear path forward.',
    accent: '03',
  },
];

const capabilities = [
  'Architecture reviews',
  'API design',
  'Edge integration',
  'Cloud deployment',
  'Telemetry dashboards',
  'Automation workflows',
];

const sectors = [
  {
    name: 'Manufacturing',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
    description: 'Production visibility, machine telemetry, and operational control.',
  },
  {
    name: 'Smart buildings',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Energy, occupancy, and facility systems tied into one dashboard.',
  },
  {
    name: 'Logistics',
    image:
      'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80',
    description: 'Fleet data, traceability, and workflows that keep teams coordinated.',
  },
  {
    name: 'Energy monitoring',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    description: 'Usage insight, alerting, and efficiency tracking across sites.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'Map the business problem, the technical landscape, and the operational constraints before design begins.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Define the stack, data flow, device strategy, and user journeys so the system stays coherent as it grows.',
  },
  {
    step: '03',
    title: 'Deliver',
    text: 'Build, test, and ship with a bias for observability, maintainability, and fast iteration.',
  },
];

const metrics = [
  { value: '120+', label: 'solutions delivered' },
  { value: '24/7', label: 'system visibility' },
  { value: '8', label: 'technology pillars' },
];

const heroImage =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80';

const secondaryImage =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(34,211,238,0.14), transparent 28%), radial-gradient(circle at 85% 10%, rgba(52,211,153,0.12), transparent 24%), linear-gradient(180deg, #f8fafc 0%, #f4f1eb 100%)',
        }}
      />
      <div
        className="fixed inset-0 -z-10 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200 bg-cyan-50 font-display text-lg font-bold text-cyan-700 shadow-sm">
              D
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
              Ditronics
              <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500">
                Software · IoT · Systems
              </span>
            </span>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600 sm:gap-x-7">
              <a className="transition hover:text-slate-900" href="#services">
                Services
              </a>
              <a className="transition hover:text-slate-900" href="#solutions">
                Sectors
              </a>
              <a className="transition hover:text-slate-900" href="#process">
                Process
              </a>
            </nav>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              href="#contact"
            >
              Start a project
            </a>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1fr_0.96fr] lg:items-center lg:gap-16 lg:pt-16">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Built for connected operations
            </span>

            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
              Build software and systems that feel simple, fast, and reliable.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Ditronics creates digital products, IoT platforms, and automation tools with the
              kind of clean product experience you expect from top-tier tech companies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Talk to Ditronics
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                Explore services
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <strong className="block font-display text-3xl tracking-tight text-slate-900">
                    {metric.value}
                  </strong>
                  <span className="mt-2 block text-sm text-slate-500">{metric.label}</span>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Trusted by teams in manufacturing, logistics, and smart infrastructure
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Manufacturing', 'Smart buildings', 'Logistics', 'Energy monitoring'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
              <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      Product preview
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold tracking-tight">
                      Connected operations dashboard
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    Live
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>System health</span>
                      <span className="text-emerald-300">99.97%</span>
                    </div>
                    <div className="mt-4 grid grid-cols-12 items-end gap-1">
                      {[22, 34, 28, 44, 38, 52, 46, 62, 58, 68, 72, 80].map((height, index) => (
                        <div
                          key={index}
                          className="rounded-t-full bg-gradient-to-t from-cyan-300 to-emerald-300"
                          style={{ height: `${height}px` }}
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <div className="text-sm text-slate-300">Devices online</div>
                      <div className="mt-2 font-display text-3xl font-bold">412</div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                      <div className="text-sm text-slate-300">Alerts resolved</div>
                      <div className="mt-2 font-display text-3xl font-bold">1,284</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Latency
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold">42ms</div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                      Uptime
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold">99.97%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Delivery style
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-600">
                Product design, device integration, and deployment in one continuous workflow.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 px-5 py-5 shadow-sm sm:px-6">
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Focus areas
              </div>
              <div className="flex flex-wrap gap-3">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <SectionHeading
            eyebrow="Core services"
            title="One partner for software, IoT, and technical delivery."
            description="The focus is not just code. It is the operational outcome: fewer manual steps, better visibility, and systems that are easier to trust."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-cyan-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                    {service.accent}
                  </div>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              <SectionHeading
                eyebrow="Why Ditronics"
                title="Built for teams that need speed and technical seriousness."
                description="Whether the challenge is a customer platform, a sensor network, or an operational dashboard, the work stays grounded in reliability, maintainability, and clarity."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {sectors.map((sector) => (
                <article
                  key={sector.name}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="relative h-60">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                        Sector
                      </div>
                      <div className="mt-3 font-display text-2xl font-bold text-white">
                        {sector.name}
                      </div>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-200">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
              <SectionHeading
                eyebrow="Delivery approach"
                title="A simple process that keeps the system coherent as it grows."
                description="The structure matters as much as the visuals. Each step is designed to reduce ambiguity before implementation starts."
              />

              <div className="mt-8 space-y-5">
                {process.map((item) => (
                  <article
                    key={item.step}
                    className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-stone-50 p-5"
                  >
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-200 bg-cyan-50 font-display text-xl font-bold text-cyan-700">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80"
                alt="Team reviewing technical plans"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/10" />

              <div className="relative flex h-full min-h-[480px] flex-col justify-end p-7 sm:min-h-[520px]">
                <span className="inline-flex w-fit rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
                  What clients get
                </span>
                <blockquote className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-white">
                  A partner that can think about code, devices, data, and operations in one system.
                </blockquote>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
                  That means fewer handoffs, clearer architecture decisions, and implementation that
                  holds up after launch.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
                  Let&apos;s build something useful
                </span>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Bring software, devices, and data together in one coherent system.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                  If you want a product team that can move from concept to deployment across software,
                  IoT, and automation, Ditronics can help.
                </p>
              </div>

              <a
                id="contact"
                href="mailto:hello@ditronics.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                hello@ditronics.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>Ditronics. Software, IoT, and technological solutions for modern organizations.</p>
          <p>Designed with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
