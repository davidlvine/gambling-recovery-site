export default function Home() {
  const raised = 8200;
  const goal = 50000;
  const progress = Math.round((raised / goal) * 100);

  const milestones = [
    { amount: "$10k", label: "Research, user interviews, and recovery-focused app planning" },
    { amount: "$20k", label: "Core MVP build with streak tracking, blockers, and productivity tools" },
    { amount: "$35k", label: "Beta launch for young adults with coaching and accountability features" },
    { amount: "$50k", label: "Public launch, onboarding, and scholarship access for users who need help most" },
  ];

  const features = [
    {
      title: "Break the loop",
      text: "Help young people interrupt gambling habits with friction tools, streaks, and healthier replacement routines.",
    },
    {
      title: "Reclaim time",
      text: "Turn hours lost to betting, scrolling odds, and chasing losses into study time, work, training, faith, and real life.",
    },
    {
      title: "Build productive habits",
      text: "Encourage users to redirect energy into goals, fitness, business, relationships, and purpose-driven living.",
    },
  ];

  const impactPoints = [
    "Daily streaks and recovery tracking",
    "Website and sportsbook blocker integrations",
    "Emergency accountability tools",
    "Habit replacement and productivity challenges",
    "Resources designed specifically for young adults",
    "A hopeful brand that feels modern, not clinical",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-200">
              Fundraising goal: $50,000
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Help young people break gambling addiction and reclaim their time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              We’re building an app designed to help young adults step away from gambling, rebuild discipline, and redirect their energy into a more productive life.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-950 shadow-xl transition hover:scale-[1.02]"
              >
                Donate to the mission
              </a>

              <a
                href="#vision"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                Read the vision
              </a>

              <a
                href="#story"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                My Story
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <div className="text-2xl font-bold text-white">50k</div>
                <div>Funding target</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Young adults</div>
                <div>Primary audience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Recovery + productivity</div>
                <div>Core mission</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Campaign progress</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-emerald-400" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Raised so far</div>
                <div className="mt-1 text-3xl font-bold">${raised.toLocaleString()}</div>
              </div>
              <div className="rounded-2xl bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Goal</div>
                <div className="mt-1 text-3xl font-bold">${goal.toLocaleString()}</div>
              </div>
            </div>

            <div id="donate" className="mt-6 rounded-2xl bg-slate-900/80 p-5">
              <div className="text-lg font-semibold">Support the build</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Every contribution helps fund development, testing, design, and launch support for a platform that can help young people reclaim their future.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <a
                  href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold transition hover:bg-white/10"
                >
                  Donate $100
                </a>
                <a
                  href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold transition hover:bg-white/10"
                >
                  Donate $200
                </a>
                <a
                  href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold transition hover:bg-white/10"
                >
                  Donate $500
                </a>
              </div>
              <a
                href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-2xl bg-white px-4 py-3 text-center font-semibold text-slate-950 transition"
              >
                Donate custom amount
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Why this matters</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">A modern recovery app for a generation losing time, money, and momentum.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Gambling addiction is not just about money lost. It affects focus, ambition, relationships, peace of mind, and the ability to build a meaningful future. This app is meant to meet young people where they are and help them move toward something better.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">The vision</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">We want to help young people stop gambling and start building.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              This campaign funds the creation of an app focused on intervention, accountability, and forward momentum. Instead of shame-based messaging, the experience is designed around clarity, hope, discipline, and purpose.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              The goal is simple: help users replace destructive habits with productive action. That can mean studying, working, training, growing in faith, building a business, repairing relationships, or simply living with more peace.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <h3 className="text-xl font-semibold">What the funding supports</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {impactPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Funding roadmap</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clear milestones from idea to launch.</h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-300">
            The $50,000 target covers the essential phases needed to bring a credible, helpful, and scalable product to life.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {milestones.map((milestone) => (
            <div key={milestone.amount} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl font-bold text-emerald-300">{milestone.amount}</div>
              <p className="mt-3 leading-7 text-slate-300">{milestone.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Join the mission</div>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Help fund a tool that gives young people their future back.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Back the vision, share the campaign, and help us build something that turns wasted hours into real progress.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://buy.stripe.com/28E4gA5s19TF8Ju7Wi57W00"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Donate now
            </a>
            <a href="#story" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
              Learn more
            </a>
          </div>
        </div>
      </section>
      <section id="story" className="mx-auto max-w-4xl px-6 py-20">
  <h2 className="text-3xl font-bold text-white">My Story</h2>

  <p className="mt-6 text-lg leading-8 text-slate-300">
    Gambling addiction stole time, focus, and discipline from my life and from many people around me.
    I began realizing how much potential was being lost to something designed to keep people trapped.
  </p>

  <p className="mt-4 text-lg leading-8 text-slate-300">
    That realization pushed me to start building a tool that helps young adults step away from gambling,
    rebuild discipline, and redirect their energy toward a productive future. This project exists to help
    people reclaim their time and take control of their lives again.
  </p>

  <p className="mt-4 text-lg leading-8 text-slate-300">
    This mission is personal, and every donation helps move the project closer to helping thousands
    of young adults break free from gambling addiction.
  </p>
</section>
    </main>
  );
}