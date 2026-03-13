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
              <a
                href="#problem"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
                >
                The Problem
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

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mx-auto my-24 max-w-6xl px-6">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
</div>
          <section id="problem" className="mx-auto max-w-7xl px-6 py-20 md:px-10 scroll-mt-24">
  <div className="mx-auto max-w-3xl text-center">
    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
      The Problem
    </div>
    <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
      Gambling is being normalized while mental health is already under pressure.
    </h2>
    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
      These charts use the closest widely reported U.S. age groups available in public datasets.
    </p>
  </div>

  <div className="mt-12 grid gap-6 lg:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">Sports betting among ages 18–22</h3>
      <p className="mt-2 text-sm text-slate-400">NCAA national survey</p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Engaged in at least one sports-betting activity</span>
            <span className="font-semibold text-white">58%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[58%] rounded-full bg-emerald-400" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Reported at least one risky behavior</span>
            <span className="font-semibold text-white">16%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[16%] rounded-full bg-cyan-300" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Lost more than $500 in a single day</span>
            <span className="font-semibold text-white">6%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[6%] rounded-full bg-indigo-300" />
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">Mental health among ages 18–25</h3>
      <p className="mt-2 text-sm text-slate-400">SAMHSA 2023</p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Any mental illness in past year</span>
            <span className="font-semibold text-white">33.8%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[33.8%] rounded-full bg-emerald-400" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Serious mental illness in past year</span>
            <span className="font-semibold text-white">10.3%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[10.3%] rounded-full bg-cyan-300" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Any mental illness or substance use disorder</span>
            <span className="font-semibold text-white">46.9%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[46.9%] rounded-full bg-indigo-300" />
          </div>
        </div>
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">Why young adults stand out</h3>
      <p className="mt-2 text-sm text-slate-400">NCPG + Sacred Heart 2025</p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Ages 18–34 reporting concerning gambling behavior</span>
            <span className="font-semibold text-white">15%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[15%] rounded-full bg-emerald-400" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Ages 18–34 likely to bet in the next year</span>
            <span className="font-semibold text-white">55.9%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[55.9%] rounded-full bg-cyan-300" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
            <span>Ages 18–34 who know someone harmed by sports gambling</span>
            <span className="font-semibold text-white">38.2%</span>
          </div>
          <div className="h-3 rounded-full bg-white/10">
            <div className="h-3 w-[38.2%] rounded-full bg-indigo-300" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-slate-400">
    Sources: NCAA 2023 sports wagering survey of 18–22-year-olds; SAMHSA 2023 NSDUH; National Council on Problem Gambling 2025 NGAGE survey; Sacred Heart 2025 nationwide sports gambling poll.
  </p>
</section>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">The vision</div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">We want to help young people stop gambling and start building.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              This campaign funds the creation of an app focused on intervention, accountability, and forward momentum. Instead of shame-based messaging, the experience is designed around clarity, hope, discipline, and purpose.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              The goal is simple: help users replace destructive habits with productive action. That can mean studying, working, training, growing in faith, building a business, repairing relationships, or simply living with more peace.
            </p>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
         <div className="flex flex-col gap-6">
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
      <section id="story" className="mx-auto max-w-4xl px-6 py-20 scroll-mt-24 min-h-screen">
  <h2 className="text-center text-3xl font-bold text-cyan-300">My Story</h2>

  <p className="mt-8 text-lg leading-8 text-slate-300">
My name is David, and this mission is deeply personal to me. During my time in college, I experienced firsthand the growing influence of gambling among young adults. What began as something that seemed casual and normalized quickly became something much more destructive. I watched as the culture surrounding me began to shift, and many of my peers slowly drifted away from the habits and disciplines that help young men grow into responsible adults.
Activities that once brought energy and fulfillment like going to the gym, running, reading, sharing meals with friends, calling family members, and pursuing meaningful goals, gradually lost their place. Instead, the constant stimulation and excitement of gambling began to dominate attention and priorities. I experienced this same struggle myself. The excitement of the next bet can easily replace the quieter but far more meaningful rewards that come from discipline, growth, and real relationships.
By the grace of God, I was able to step away from that cycle and regain control of my time, focus, and direction. That experience changed how I view the issue entirely. It showed me how powerful and destructive gambling can become when it is normalized within a culture that should instead be encouraging growth, responsibility, and purpose.
Since finishing university, I have seen this problem intensify even further. What once existed on the margins has become increasingly integrated into everyday life for many young adults. Sports betting, mobile apps, and constant promotion have made it easier than ever for people to fall into habits that quietly consume their time, energy, and potential.
This project was born from the desire to address that problem. The goal of this app is to help young adults step away from gambling, rebuild discipline, and redirect their energy toward meaningful progress in their lives. Whether that means focusing on health, strengthening relationships, pursuing meaningful work, or simply reclaiming the time that gambling once consumed, the mission is to help people regain control of their future.
Every contribution helps move this mission forward and brings us closer to building a tool that can support thousands of young adults seeking a healthier and more purposeful path.

  </p>
</section>
<div className="h-24" />
    </main>
  );
}