export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#16161a]">
      {/* 1. Banner Superior Branco */}
      <div className="h-56 w-full bg-white shadow-xl" />

      {/* 2. Container Principal */}
      <div className="w-full flex flex-col md:flex-row gap-8 px-12 relative z-10">

        {/* COLUNA 1: Sidebar (Informações) */}
        <aside className="w-full md:w-1/4 flex flex-col gap-6 -mt-8">

          {/* BOX 1: Perfil & Resumo */}
          <div className="bg-[#1e1e24] p-8 rounded-2xl border border-white/5 shadow-2xl">
            {/* Foto de Perfil com brilho neon */}
            <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6 border-2 border-cyber-cyan shadow-neon-cyan" />

            <div className="space-y-4 text-center">
              <h2 className="text-xl font-bold tracking-tight text-white uppercase">Felipe Cezar</h2>
              <p className="text-xs font-mono text-cyber-cyan uppercase">Software Engineer & Data Scientist</p>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Building scalable solutions and intelligent automations.
              </p>
            </div>
          </div>

          {/* BOX 2: Redes Sociais (NOVA) */}
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl flex justify-center gap-8">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/felipecezarcruz/" target="_blank" className="text-gray-400 hover:text-cyber-cyan transition-colors">
              <span className="text-xl font-bold">In</span>
            </a>
            {/* GitHub */}
            <a href="https://github.com/felipecezar01" target="_blank" className="text-gray-400 hover:text-cyber-cyan transition-colors">
              <span className="text-xl font-bold">Git</span>
            </a>
            {/* Email */}
            <a href="mailto:felipecezarcc@gmail.com" className="text-gray-400 hover:text-cyber-cyan transition-colors">
              <span className="text-xl font-bold">@</span>
            </a>
          </div>

          {/* BOX 3: Skills */}
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 font-bold">Skills</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">TypeScript</span>
              <span className="px-3 py-1 bg-gray-800 text-[10px] rounded-md border border-white/5 text-cyber-cyan uppercase font-bold">Python</span>
            </div>
          </div>
        </aside>

        {/* COLUNA 2: Conteúdo Principal */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Navegação */}
          <nav className="h-16 bg-[#1e1e24] rounded-2xl border border-white/5 shadow-2xl flex justify-around items-center px-4 -mt-8">
            <button className="text-[11px] uppercase font-black tracking-widest text-cyber-cyan">Projects</button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">Experience</button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">Education</button>
            <button className="text-[11px] uppercase font-black tracking-widest opacity-30 hover:opacity-100 transition-opacity">Resume</button>
          </nav>

          {/* Área de Conteúdo */}
          <article className="bg-[#1e1e24] p-10 rounded-2xl border border-white/5 shadow-2xl min-h-[750px]">
            <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">Content initializing...</p>
          </article>
        </section>

      </div>

      <div className="h-20" />
    </div>
  );
}