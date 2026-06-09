import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Mic,
  BookOpen,
  Sparkles,
  Building2,
  ShieldCheck,
  PenLine,
  Globe2,
  Headphones,
  Newspaper,
  Radio,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paulette Watson MBE" },
      { name: "description", content: "Paulette Watson MBE — AI Leadership Advisor, Workforce Transformation Expert and CEO of Academy Achievers." },
    ],
  }),
  component: Index,
});

const LOGOS = [
  "IBM",
  "Thales",
  "BT Group",
  "Colt Technology Services",
  "Ciena",
  "Springer Nature",
  "KPMG",
  "PwC",
  "MTN",
  "Red Bull",
  "UCL",
  "LSEG",
];

const IMPACT_CARDS = [
  { icon: Award, title: "MBE Recipient", body: "Recognised for services to education, STEM, AI and digital inclusion." },
  { icon: Mic, title: "International Speaker", body: "Delivering keynotes, panels and leadership conversations globally." },
  { icon: BookOpen, title: "Author of She Disrupts", body: "Sharing insights on leadership, technology and the future of work." },
  { icon: Sparkles, title: "AI & Digital Transformation Leader", body: "Helping organisations prepare for workforce transformation." },
  { icon: Building2, title: "CEO & Founder", body: "Founder and CEO of Academy Achievers." },
  { icon: ShieldCheck, title: "Responsible AI Advocate", body: "Championing ethical, inclusive and trustworthy AI." },
  { icon: PenLine, title: "Thought Leadership", body: "Publishing articles, newsletters, blogs and media commentary." },
  { icon: Globe2, title: "Global Leadership Events", body: "Convening leaders across Europe and Africa." },
];

const METRICS = [
  { value: "850,000+", label: "Young People Reached", emphasis: true },
  { value: "350,000+", label: "Women & Girls Supported", emphasis: true },
  { value: "100+", label: "Schools Engaged" },
  { value: "100+", label: "Corporate Partners" },
  { value: "100+", label: "Speaking Engagements" },
  { value: "25", label: "Countries Reached" },
];

const MEDIA_CARDS = [
  { icon: Headphones, title: "Podcasts & Interviews", body: "Conversations with industry leaders, innovators and changemakers." },
  { icon: Newspaper, title: "Articles & Thought Leadership", body: "Insights on AI strategy, responsible AI, leadership and the future of work." },
  { icon: Radio, title: "Media & Speaking Engagements", body: "Keynotes, panels, conference appearances and expert commentary." },
];

const SPEAKING_TOPICS = [
  {
    title: "Responsible AI Leadership",
    body: "Helping executives navigate AI adoption, governance and risk.",
  },
  {
    title: "Workforce Transformation",
    body: "Preparing organisations for the future of work.",
  },
  {
    title: "Future Skills and Digital Inclusion",
    body: "Building inclusive talent pipelines for the AI economy.",
  },
  {
    title: "Women, Leadership and Technology",
    body: "Creating equitable opportunities in emerging technology sectors.",
  },
];

function Index() {
  return (
    <>
      {/* AI Leadership intro / hero callout */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              New — AI Leadership Advisory
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Helping organisations navigate AI, workforce transformation and responsible AI.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A new advisory offer for CEOs, executive teams, boards and HR leaders preparing
              their organisations for an AI-enabled future.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              to="/ai-leadership"
              className="inline-flex items-center gap-2 border border-ink px-7 py-4 text-xs font-medium tracking-[0.22em] text-ink uppercase transition hover:bg-ink hover:text-white"
            >
              Explore AI Leadership <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Trusted Collaborations
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Organisations, Institutions &amp; Ecosystems I've Worked With
            </h2>
            <p className="mt-5 text-muted-foreground">
              Paulette Watson MBE works at the intersection of AI, leadership, workforce
              transformation, responsible innovation and digital inclusion, collaborating
              across technology, telecommunications, education, finance, innovation and
              global industry.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {LOGOS.map((l) => (
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
              From boardrooms to classrooms, Paulette has worked with organisations,
              educational institutions, public sector leaders and innovation ecosystems
              to help navigate AI adoption, leadership capability, workforce transformation
              and responsible innovation.
            </p>
            <p className="text-[11px] font-medium tracking-[0.22em] text-brand uppercase lg:col-span-4 lg:text-right">
              MBE Recipient • International Speaker • Executive Advisor • Responsible AI Advocate • Author • CEO &amp; Founder
            </p>
          </div>
        </div>
      </section>

      {/* Impact, Recognition & Thought Leadership */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Authority
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Impact, Recognition &amp; Thought Leadership
            </h2>
            <p className="mt-5 text-muted-foreground">
              Building leadership capability and preparing organisations for the
              opportunities and challenges of AI.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_CARDS.map((c) => (
              <div
                key={c.title}
                className="group bg-background p-8 transition hover:bg-ink hover:text-white"
              >
                <c.icon className="size-6 text-brand transition group-hover:text-white" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition group-hover:text-white/75">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Through Leadership, Technology & Inclusion */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-white/60 uppercase">
              By the Numbers
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Impact Through Leadership, Technology &amp; Inclusion
            </h2>
            <p className="mt-5 text-white/75">
              For more than two decades, Paulette Watson MBE has worked across education,
              technology, workforce development and leadership, helping individuals and
              organisations prepare for the future.
            </p>
          </div>

          <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-6">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className={`bg-ink p-8 transition hover:bg-white/5 ${
                  m.emphasis ? "sm:col-span-1 lg:col-span-3" : "lg:col-span-3 xl:col-span-1"
                }`}
              >
                <div
                  className={`font-display leading-none ${
                    m.emphasis ? "text-5xl lg:text-7xl" : "text-3xl lg:text-4xl"
                  }`}
                >
                  {m.value}
                </div>
                <p className="mt-4 text-sm tracking-wide text-white/70 uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <p className="text-white/75">
              Through Academy Achievers, #BeMeDigitalInclusion, strategic partnerships,
              leadership programmes, speaking engagements and workforce development
              initiatives, Paulette Watson MBE has helped create opportunities, build
              confidence and expand access to STEM, AI, digital skills and future careers.
            </p>
            <p className="text-white/75">
              Her work bridges education, technology and leadership, helping organisations
              and communities navigate change while preparing the next generation of talent
              for the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Insights, Media & Conversations */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Media
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">
              Insights, Media &amp; Conversations
            </h2>
            <p className="mt-5 text-muted-foreground">
              Exploring AI, leadership, responsible innovation and workforce transformation.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
            {MEDIA_CARDS.map((c) => (
              <article
                key={c.title}
                className="group bg-background p-8 transition hover:bg-ink hover:text-white"
              >
                <c.icon className="size-6 text-brand transition group-hover:text-white" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground transition group-hover:text-white/75">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="https://www.paulettewatson.com/blog"
              className="inline-flex items-center gap-2 border border-ink px-7 py-4 text-xs font-medium tracking-[0.22em] text-ink uppercase transition hover:bg-ink hover:text-white"
            >
              Explore Media &amp; Insights <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-[11px] tracking-[0.3em] text-brand uppercase">
              Speaking
            </span>
            <h2 className="mt-4 text-3xl lg:text-5xl">Speaking Topics</h2>
            <p className="mt-5 text-muted-foreground">
              Keynotes and executive sessions on the themes shaping responsible AI,
              workforce transformation and inclusive innovation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SPEAKING_TOPICS.map((t, i) => (
              <div key={t.title} className="border-t border-border pt-6">
                <div className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-xl lg:text-2xl">{t.title}</h3>
                <p className="mt-3 text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="https://paulettewatson.setmore.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-7 py-4 text-xs font-medium tracking-[0.22em] text-ink uppercase transition hover:bg-ink hover:text-white"
            >
              Invite Paulette to Speak <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
