import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BOOK_URL, trackBookingClick } from "@/lib/booking";
import paulettePhoto from "@/assets/paulette-watson.png.asset.json";
import ogImage from "@/assets/og-paulette-watson.jpg";
import {
  Brain,
  Users,
  Compass,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Award,
  BookOpen,
  Mic,
  Building2,
  Globe2,
  Scale,
  Map as MapIcon,
  AlertTriangle,
  Lightbulb,
  Target,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/ai-leadership")({
  head: () => ({
    meta: [
      { title: "AI Leadership Advisory — Paulette Watson MBE" },
      {
        name: "description",
        content:
          "Paulette Watson MBE helps CEOs, executive teams and boards navigate AI adoption, workforce transformation and responsible AI. Book a discovery call.",
      },
      { property: "og:title", content: "AI Leadership Advisory — Paulette Watson MBE" },
      {
        property: "og:description",
        content:
          "Strategic advisory for leaders preparing their organisations, teams and communities for an AI-enabled future.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: AILeadershipPage,
});

const SPEAK_URL = "https://www.paulettewatson.com/speaker";

function AILeadershipPage() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLUListElement>(null);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [logosVisible, setLogosVisible] = useState(false);

  useEffect(() => {
    const observe = (ref: React.RefObject<HTMLElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setter(true);
          observer.disconnect();
        }
      }, { threshold: 0.1 });
      observer.observe(el);
      return () => observer.disconnect();
    };
    const cleanup1 = observe(metricsRef, setMetricsVisible);
    const cleanup2 = observe(logosRef, setLogosVisible);
    return () => { cleanup1?.(); cleanup2?.(); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteHeader onDark />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={paulettePhoto.url}
          alt="Paulette Watson MBE, AI Leadership Advisor"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-40 pb-24 lg:px-10">
          <span className="mb-6 text-[11px] tracking-[0.32em] text-white/70 uppercase">
            AI Leadership Advisory
          </span>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl max-w-4xl">
            Helping Organisations Navigate AI, Workforce Transformation and Responsible AI
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Helping CEOs, executive teams and boards make confident decisions about AI adoption,
            workforce transformation and responsible innovation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookingClick("Book a Discovery Call")}
              className="group inline-flex items-center gap-2 bg-white px-7 py-4 text-xs font-medium tracking-[0.22em] text-ink uppercase transition hover:bg-brand hover:text-white"
            >
              Book a Discovery Call
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={SPEAK_URL}
              className="inline-flex items-center gap-2 border border-white/60 px-7 py-4 text-xs font-medium tracking-[0.22em] uppercase transition hover:bg-white hover:text-ink"
            >
              Invite Paulette to Speak
            </a>
          </div>
          <p className="mt-8 max-w-2xl text-sm text-white/60">
            Trusted by leaders, educators, innovators and changemakers navigating the future
            of work and responsible AI adoption.
          </p>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-white/60 uppercase">
              By the Numbers
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Impact Through Leadership, Technology &amp; Inclusion
            </h2>
          </div>

          <div
            ref={metricsRef}
            className={`mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${metricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              { value: "850,000+", label: "Young People Reached" },
              { value: "350,000+", label: "Women & Girls Supported" },
              { value: "100+", label: "Schools Engaged" },
              { value: "100+", label: "Corporate Partners" },
              { value: "100+", label: "Speaking Engagements" },
              { value: "25", label: "Countries Reached" },
            ].map((m) => (
              <div key={m.label} className="bg-ink p-8 transition hover:bg-white/5">
                <div className="font-display text-4xl leading-none lg:text-5xl">
                  {m.value}
                </div>
                <p className="mt-4 text-sm tracking-wide text-white/70 uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKED WITH, PARTNERED WITH & FEATURED BY */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Trusted Collaborations
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Worked With, Partnered With &amp; Featured By
            </h2>
          </div>
          <ul
            ref={logosRef}
            className={`mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6 transition-all duration-700 ${logosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              "IBM", "Thales", "BT Group", "Colt Technology Services", "Ciena",
              "Springer Nature", "KPMG", "PwC", "MTN", "Red Bull", "UCL", "LSEG",
            ].map((l) => (
              <li
                key={l}
                className="flex items-center justify-center bg-background px-4 py-8 text-center font-display text-base tracking-[0.18em] text-muted-foreground uppercase grayscale transition hover:bg-ink hover:text-white hover:grayscale-0"
              >
                {l}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <p className="text-muted-foreground lg:col-span-8">
              From boardrooms to classrooms, Paulette has worked with global organisations,
              educational institutions, public sector leaders and innovation ecosystems to help
              navigate AI adoption, leadership capability, workforce transformation and
              responsible innovation.
            </p>
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase lg:col-span-4 lg:text-right">
              International Speaker • Executive Advisor • Responsible AI Advocate • Author • CEO &amp; Founder
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
                Why this matters
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl">
                AI is rewriting how organisations lead, hire and grow.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-muted-foreground">
                The pace of AI adoption is outstripping the pace at which most organisations
                can prepare their leaders, their workforce and their governance. Boards and
                executive teams are being asked to make decisions today that will shape the
                next decade of their organisation.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  ["AI adoption", "Move from experimentation to enterprise-wide capability."],
                  ["Workforce readiness", "Prepare your people for new roles, tools and ways of working."],
                  ["Leadership capability", "Equip executives to lead confidently in an AI-enabled environment."],
                  ["Governance", "Build the structures and oversight AI now demands."],
                  ["Responsible AI", "Adopt AI in ways that are ethical, inclusive and trusted."],
                  ["Future skills", "Anticipate the skills your organisation and community will need next."],
                ].map(([t, d]) => (
                  <div key={t} className="border-t border-border pt-5">
                    <div className="text-sm font-semibold tracking-wide text-ink">{t}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PAULETTE HELPS */}
      <section className="bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-[11px] tracking-[0.3em] text-white/60 uppercase">
                How Paulette helps
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl">
                Strategic advisory for the AI-enabled organisation.
              </h2>
            </div>
            <p className="max-w-md text-white/70">
              Three ways Paulette works with CEOs, executive teams, boards and HR leaders.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Executive AI Leadership Briefings",
                body:
                  "Private executive briefings for CEOs, boards and leadership teams exploring AI strategy, workforce transformation, governance, responsible AI and future skills.",
              },
              {
                icon: Users,
                title: "Leadership Roundtables",
                body:
                  "Curated conversations with senior leaders to surface real challenges, share practice and build the collective confidence to act.",
              },
              {
                icon: Compass,
                title: "Strategic Advisory",
                body:
                  "Ongoing advisory partnership across AI adoption, workforce transformation, responsible AI and future skills strategy.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-ink p-10">
                <c.icon className="size-7 text-white/80" strokeWidth={1.5} />
                <h3 className="mt-6 text-2xl">{c.title}</h3>
                <p className="mt-4 text-sm/relaxed text-white/70">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL LEADERSHIP CONVERSATIONS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Conversations
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl">
              Typical Leadership Conversations
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Common challenges discussed with executive teams, boards and
              organisational leaders.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Board AI Readiness" },
              { icon: Scale, t: "Responsible AI Governance" },
              { icon: GraduationCap, t: "Future Skills Strategy" },
              { icon: Users, t: "Workforce Transformation" },
              { icon: MapIcon, t: "AI Adoption Roadmaps" },
              { icon: HeartHandshake, t: "Leadership Team Alignment" },
              { icon: AlertTriangle, t: "Risk, Trust & AI Oversight" },
              { icon: Lightbulb, t: "Inclusive Innovation" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="bg-background p-8">
                <Icon className="size-6 text-brand" strokeWidth={1.5} />
                <div className="mt-6 text-base font-medium">{t}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-muted-foreground">
            Every organisation is at a different stage of its AI journey. Discovery
            conversations are designed to explore priorities, challenges and
            opportunities before recommending the most appropriate next steps.
          </p>
        </div>
      </section>

      {/* IMPACT & RECOGNITION */}
      <section className="bg-background border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Impact &amp; Recognition
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl">
              A track record of leadership, innovation and inclusion.
            </h2>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, t: "MBE Recipient" },
              { icon: Building2, t: "CEO of Academy Achievers" },
              { icon: Sparkles, t: "Founder of #BeMeDigitalInclusion" },
              { icon: BookOpen, t: "Author of She Disrupts" },
              { icon: Mic, t: "International Speaker" },
              { icon: ShieldCheck, t: "Responsible AI Advocate" },
              { icon: Brain, t: "Digital Transformation Leader" },
              { icon: Globe2, t: "Global Leadership Events" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="group bg-background p-8 transition hover:bg-ink hover:text-white">
                <Icon className="size-6 text-brand transition group-hover:text-white" strokeWidth={1.5} />
                <div className="mt-6 text-base font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={paulettePhoto.url}
                  alt="Paulette Watson MBE"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
                About Paulette Watson MBE
              </span>
              <h2 className="mt-4 text-4xl lg:text-5xl">
                An advisor at the intersection of AI, leadership and the future of work.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Paulette Watson MBE is a recognised voice in AI, digital transformation and
                responsible technology. Her perspective is shaped by more than two decades
                working across education, workforce development, leadership and inclusion,
                helping organisations understand not only the technology, but also the human
                impact of change.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Paulette advises organisations across education, public sector, technology and
                workforce development on navigating the opportunities and challenges of AI,
                workforce transformation, governance and responsible innovation.
              </p>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  [Award, "MBE recipient"],
                  [Building2, "CEO of Academy Achievers"],
                  [BookOpen, "Author of She Disrupts"],
                  [Mic, "International Speaker"],
                  [Sparkles, "AI & Digital Transformation Leader"],
                  [ShieldCheck, "Responsible AI Advocate"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Award;
                  return (
                    <li key={label as string} className="flex items-start gap-3 border-t border-border pt-4">
                      <I className="mt-0.5 size-5 text-brand" strokeWidth={1.5} />
                      <span className="text-sm font-medium">{label as string}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL EVENTS */}
      <section className="bg-brand py-24 text-brand-foreground lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.3em] text-white/70 uppercase">
              Global Leadership Events
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl">
              Convening Leaders Across Continents
            </h2>
            <p className="mt-6 text-white/80">
              These events bring together leaders, innovators, founders and changemakers
              to discuss AI, leadership, innovation and the future of work.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/15 lg:grid-cols-2">
            {[
              { region: "Europe", date: "10 June 2026", title: "She Disrupts Europe" },
              { region: "Africa", date: "18 June 2026", title: "She Disrupts Africa" },
            ].map((e) => (
              <div key={e.title} className="bg-brand p-10">
                <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-white/70 uppercase">
                  <Globe2 className="size-4" /> {e.region}
                </div>
                <h3 className="mt-4 text-3xl">{e.title}</h3>
                <div className="mt-3 text-white/80">{e.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ORGANISATIONS LEAVE WITH */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
            What organisations gain
          </span>
          <h2 className="mt-4 max-w-3xl text-4xl lg:text-5xl">
            Clarity, capability and a credible path forward.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, t: "Greater AI awareness" },
              { icon: Users, t: "Stronger leadership capability" },
              { icon: GraduationCap, t: "Workforce readiness insights" },
              { icon: Scale, t: "Responsible AI governance considerations" },
              { icon: Compass, t: "Practical next steps" },
              { icon: Target, t: "Organisational readiness" },
              { icon: HeartHandshake, t: "Leadership team alignment" },
              { icon: CheckCircle2, t: "Confidence to navigate AI adoption" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="border border-border p-6">
                <Icon className="size-6 text-brand" strokeWidth={1.5} />
                <div className="mt-6 text-base font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink py-24 text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-4xl lg:text-6xl">
            Ready to start the conversation?
          </h2>
          <p className="mt-6 text-white/70">
            Discovery calls are designed to understand your organisation's AI priorities,
            workforce challenges and leadership goals before recommending the most appropriate
            support.
          </p>
          <p className="mt-4 text-white/70">
            Discovery calls are reserved for CEOs, executive teams, boards and senior
            HR leaders exploring AI, workforce transformation or responsible AI.
          </p>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackBookingClick("Book a Discovery Call")}
            className="mt-10 inline-flex items-center gap-2 bg-white px-9 py-5 text-xs font-medium tracking-[0.22em] text-ink uppercase transition hover:bg-brand hover:text-white"
          >
            Book a Discovery Call <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}