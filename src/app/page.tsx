"use client"
import { useState } from "react";
import Image from "next/image";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  const [activeTab, setActiveTab] = useState("PROJECTS");

  return (
    <div className="min-h-screen flex flex-col bg-[#16161a]">

      {/* 1. HERO 3D SECTION */}
      <header className="h-[260px] w-full relative overflow-hidden border-b border-cyber-cyan/20 shadow-2xl">
        <Hero3D />
      </header>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="w-full flex flex-col md:flex-row gap-8 px-12 relative z-10">

        {/* LEFT COLUMN: Sidebar (Profile & Socials) */}
        <aside className="w-full md:w-1/4 flex flex-col gap-6 -mt-8">

          {/* BOX 1: Profile Summary */}
          <div className="bg-[#1e1e24] p-8 rounded-2xl border border-white/5 shadow-2xl">

            {/* FOTO DE PERFIL: h-96 para enquadramento total */}
            <div className="w-44 h-96 relative rounded-2xl mx-auto mb-6 overflow-hidden group border border-white/5">
              <Image
                src="/me.jpg"
                alt="Felipe Cezar Profile"
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 filter contrast-110 brightness-90"
              />
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_15px_rgba(0,0,0,0.85),inset_0_0_25px_rgba(0,243,255,0.4)] pointer-events-none"></div>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-xl font-bold tracking-tight text-white uppercase italic">
                Felipe Cezar
              </h2>
              <p className="text-xs font-mono text-cyber-cyan uppercase tracking-tighter">
                Software Engineer & Data Scientist
              </p>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-sm text-gray-400 leading-relaxed px-2">
                Building scalable solutions and intelligent automations.
              </p>
            </div>
          </div>

          {/* BOX 2: Essential Networks (LinkedIn & GitHub) */}
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl flex justify-center gap-10">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/felipecezarcruz/" target="_blank"
              className="p-4 rounded-full border-[0.5px] border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/felipecezar01" target="_blank"
              className="p-4 rounded-full border-[0.5px] border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </aside>

        {/* RIGHT COLUMN: Main Content Area */}
        <section className="flex-1 flex flex-col gap-6">
          <nav className="h-16 bg-[#1e1e24] rounded-2xl border border-white/5 shadow-2xl flex justify-around items-center px-4 -mt-8">
            {['PROJECTS', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'RESUME'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] uppercase font-black tracking-widest transition-all duration-300 ${activeTab === tab ? 'text-cyber-cyan scale-110' : 'opacity-30 hover:opacity-100'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <article className="bg-[#1e1e24] p-10 rounded-2xl border border-white/5 shadow-2xl min-h-[750px]">
            {activeTab === 'PROJECTS' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-cyber-cyan font-mono text-xl mb-6 tracking-tighter uppercase underline decoration-cyber-cyan/30 underline-offset-8">Featured Projects</h3>
                <p className="text-gray-500 italic">Project repository incoming...</p>
              </div>
            )}

            {activeTab === 'SKILLS' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-cyber-cyan font-mono text-xl mb-8 tracking-tighter uppercase underline decoration-cyber-cyan/30 underline-offset-8">Technical Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['TypeScript', 'Python', 'React/Next.js', 'Machine Learning', 'Data Analysis', 'PostgreSQL', 'Docker', 'AWS', 'TailwindCSS'].map(skill => (
                    <div key={skill} className="p-4 bg-gray-800/50 border border-white/5 rounded-xl text-xs font-bold text-gray-300 hover:border-cyber-cyan/50 transition-colors uppercase tracking-widest text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== 'PROJECTS' && activeTab !== 'SKILLS' && (
              <div className="animate-in fade-in duration-500">
                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
                  Initializing {activeTab} data stream...
                </p>
              </div>
            )}
          </article>
        </section>
      </div>

      <div className="h-20" />
    </div>
  );
}