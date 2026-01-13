import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Shield,
  Cloud,
  MapPin,
} from "lucide-react";

const LINKS = {
  github: "https://github.com/Abdallahhamdan187",
  linkedin: "https://www.linkedin.com/in/abdallah--hamdan/",
  email: "mailto:Abdallahham187@gmail.com",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=Abdallahham187@gmail.com",
  cv: "https://docs.google.com/document/d/1aln18Qq3PL0vrOKs8lRnOeBzSd5IEMs2/edit?usp=drive_link&ouid=100438334608467656200&rtpof=true&sd=true",
  location: "Amman, Jordan",
};

const projects = [
  {
    title: "React + Node.js Web Application",
    subtitle: "Full-stack app with REST APIs and dynamic UI",
    tags: ["React", "Node.js", "REST API", "Auth", "MySQL"],
    description:
      "Developed a full-stack web application using React for the frontend and Node.js for the backend, implementing RESTful APIs and responsive UI components.",
    repo: "https://github.com/Abdallahhamdan187/PUT-YOUR-REPO-HERE",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Database Management System in C",
    subtitle: "Low-level database using file handling + data structures",
    tags: ["C", "File I/O", "Data Structures"],
    description:
      "Built a lightweight database system in C focusing on efficient storage and retrieval using file handling and structured records.",
    repo: null,
    icon: <Database className="w-5 h-5" />,
  },
  {
    title: "3D Taxi Game (Unity)",
    subtitle: "Gameplay mechanics, UI, and smooth controls",
    tags: ["Unity", "C#", "Game UI"],
    description:
      "Created a 3D taxi game in Unity, implementing player controls, scene management, UI elements, and core gameplay systems.",
    repo: null,
    icon: <Code2 className="w-5 h-5" />,
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: <Code2 className="w-4 h-4" />,
    items: ["C", "C#", "Python", "Java", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Web & Frameworks",
    icon: <Globe className="w-4 h-4" />,
    items: ["HTML", "CSS", "React", "Node.js", "ASP.NET"],
  },
  {
    title: "Tools & Platforms",
    icon: <Database className="w-4 h-4" />,
    items: ["MySQL", "Power BI", "Figma", "Unity", "Odoo", "Adalo", "Cisco Packet Tracer"],
  },
  {
    title: "Cloud & Security (Familiarity)",
    icon: <Shield className="w-4 h-4" />,
    items: ["AWS (basic)", "Azure (basic)", "Auth concepts", "Safe coding", "Common vulnerabilities"],
  },
];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-slate-300";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-soft"
      : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm";

  const isExternal = href?.startsWith("http");
  const isMail = href?.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : isMail ? "_blank" : "_self"}
      rel={isExternal ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
      onClick={(e) => {
        if (isMail) {
          window.location.href = href;
          e.preventDefault();
        }
      }}
    >
      {children}
    </a>
  );
}
function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{eyebrow}</div>
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
      {desc && <p className="mt-2 text-slate-600 max-w-2xl">{desc}</p>}
    </div>
  );
}

export default function App() {

  const emailAddress = "Abdallahham187@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      alert("Email copied ✅");
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = emailAddress;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("Email copied ✅");
    }
  };
  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Top background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute top-32 -right-24 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      {/* Page */}
      <div className="relative">
        {/* Header */}
        <header className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-soft">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold leading-tight">Abdallah Hamdan</div>
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {LINKS.location}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <Button href={LINKS.github} variant="secondary">
                <Github className="w-4 h-4" /> GitHub
              </Button>
              <Button href={LINKS.linkedin} variant="secondary">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
              <Button href={LINKS.gmail} variant="secondary">
                <Mail className="w-4 h-4" /> Email Me
              </Button>
            </div>
          </nav>

          {/* Hero */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 grid gap-10 lg:grid-cols-12 items-center"
          >
            <motion.div variants={item} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                <Cloud className="w-4 h-4" />
                Junior Software Developer • Computer Science
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-black leading-tight text-slate-900">
                Building clean, reliable web apps and systems with{" "}
                <span className="underline decoration-slate-300 decoration-6 underline-offset-4">
                  modern full-stack tools
                </span>
                .
              </h1>

              <p className="mt-4 text-slate-600 max-w-2xl">
                I’m a Computer Science graduate with a strong interest in web development. I build full-stack applications,
                databases, and interactive projects using React, Node.js, ASP.NET, and more.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={LINKS.github}>
                  <Github className="w-4 h-4" /> View GitHub
                </Button>
                <Button href={LINKS.cv} variant="secondary">
                  <ExternalLink className="w-4 h-4" /> Download CV
                </Button>
                <Button href={LINKS.gmail} variant="secondary">
                  <Mail className="w-4 h-4" /> Email Me
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>React</Pill>
                <Pill>Node.js</Pill>
                <Pill>ASP.NET</Pill>
                <Pill>MySQL</Pill>
                <Pill>Unity</Pill>
                <Pill>Power BI</Pill>
              </div>
            </motion.div>

            <motion.div variants={item} className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Quick Profile</div>
                    <div className="mt-1 text-sm text-slate-600">
                      Full-stack focus with strong fundamentals and hands-on projects.
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-slate-700" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 uppercase">Strengths</div>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• Full-stack development (React + Node + ASP.NET)</li>
                      <li>• Database design & implementation</li>
                      <li>• Clean UI/UX prototyping (Figma)</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                    <div className="text-xs font-semibold text-slate-500 uppercase">Currently Improving</div>
                    <ul className="mt-2 text-sm text-slate-700 space-y-1">
                      <li>• Deployment & production workflows</li>
                      <li>• System design depth</li>
                      <li>• Cloud fundamentals</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
                      href={LINKS.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline"
                      href={LINKS.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <span className="text-slate-300">•</span>
                    <a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:underline" href={LINKS.email}>
                      <Mail className="w-4 h-4" /> Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </header>

        {/* Main */}
        <main className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-16">
          {/* Projects */}
          <section id="projects" className="mt-6">
            <SectionTitle
              eyebrow="Proof of work"
              title="Projects"
              desc="A selection of projects that demonstrate full-stack development, system building, and practical implementation."
            />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-2xl bg-slate-100 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 leading-tight">{p.title}</h3>
                        <p className="text-sm text-slate-500">{p.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                      >
                        <Github className="w-4 h-4" /> Repo
                      </a>
                    )}
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition shadow-soft"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                        <ExternalLink className="w-4 h-4" /> Live (soon)
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Skills */}
          <section id="skills" className="mt-16">
            <SectionTitle
              eyebrow="What I use"
              title="Skills"
              desc="A clear view of my technical toolbox, grouped by category for quick scanning."
            />

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 lg:grid-cols-2"
            >
              {skillGroups.map((g, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-2xl bg-slate-100 flex items-center justify-center">
                      {g.icon}
                    </div>
                    <div className="font-extrabold text-slate-900">{g.title}</div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Let’s talk</div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Contact me
                  </h2>
                  <p className="mt-2 text-slate-600 max-w-2xl">
                    If you’re hiring for a junior role or internship, I’d love to share my projects and discuss how I can contribute.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href={LINKS.gmail} variant="secondary">
                    <Mail className="w-4 h-4" /> Email Me
                  </Button>
                  <Button href={LINKS.linkedin} variant="secondary">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </Button>
                  <Button href={LINKS.github} variant="secondary">
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                <span>© {new Date().getFullYear()} Abdallah Hamdan</span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {LINKS.location}
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
