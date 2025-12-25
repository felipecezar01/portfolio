import Hero3D from "@/components/Hero3D";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#16161a]">

      {/* 1. HERO 3D SECTION - Banner panorâmico */}
      <header className="h-[260px] w-full relative overflow-hidden border-b border-cyber-cyan/20 shadow-2xl">
        <Hero3D />
      </header>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="w-full flex flex-col md:flex-row gap-8 px-12 relative z-10">

        {/* LEFT COLUMN: Sidebar (Profile & Skills) */}
        <aside className="w-full md:w-1/4 flex flex-col gap-6 -mt-8">

          {/* BOX 1: Profile Summary */}
          <div className="bg-[#1e1e24] p-8 rounded-2xl border border-white/5 shadow-2xl">
            <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6 border-2 border-cyber-cyan shadow-neon-cyan overflow-hidden" />

            <div className="space-y-4 text-center">
              <h2 className="text-xl font-bold tracking-tight text-white uppercase">
                Felipe Cezar
              </h2>
              <p className="text-xs font-mono text-cyber-cyan uppercase tracking-tighter">
                Software Engineer & Data Scientist
              </p>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Building scalable solutions and intelligent automations.
              </p>
            </div>
          </div>

          {/* BOX 2: Social Networks */}
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/felipecezarcruz/"
              target="_blank"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              <span className="text-xl font-bold">In</span>
            </a>

            <a
              href="https://github.com/felipecezar01"
              target="_blank"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              <span className="text-xl font-bold">Git</span>
            </a>

            <a
              href="mailto:felipecezarcc@gmail.com"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              <span className="text-xl font-bold">@</span>
            </a>
          </div>

          {/* BOX 3: Technical Skills */}
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 font-bold">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">
                Data Science
              </span>
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">
                Machine Learning
              </span>
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: Main Content Area */}
        <section className="flex-1 flex flex-col gap-6">
          <nav className="h-16 bg-[#1e1e24] rounded-2xl border border-white/5 shadow-2xl flex justify-around items-center px-4 -mt-8">
            <button className="text-[11px] uppercase font-black tracking-widest text-cyber-cyan">
              Projects
            </button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">
              Experience
            </button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">
              Education
            </button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">
              Resume
            </button>
          </nav>

          <article className="bg-[#1e1e24] p-10 rounded-2xl border border-white/5 shadow-2xl min-h-[750px]">
            <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
              Content initializing...
            </p>
          </article>
        </section>
      </div>

      <div className="h-20" />
    </div>
  );
}