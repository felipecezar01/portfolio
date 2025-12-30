"use client"
import { useState } from "react";
import Image from "next/image";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  const [activeTab, setActiveTab] = useState("PROJECTS");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const projects = [
    {
      id: 7,
      year: "2025",
      title: "07 - PERSONAL FINANCE TRACKER",
      description: "An offline-first mobile financial manager tailored for privacy and speed. Features Hive NoSQL for secure local storage and FL Chart for data visualization.",
      image: "/projects/pro7.png",
      tags: ["FLUTTER", "DART", "HIVE NOSQL", "FL CHART"],
      link: "https://github.com/felipecezar01/finantials"
    },
    { id: 6, year: "2024", title: "06 - AWS CLOUD CALCULATOR", description: "A serverless application deployed on AWS EC2, focusing on cloud infrastructure management and server configuration for high-availability web services.", image: "/projects/pro6.png", tags: ["PYTHON", "AWS EC2", "SERVER CONFIG"], link: "https://github.com/felipecezar01/back-cloud-calculator" },
    { id: 5, year: "2024", title: "05 - RESTFUL CAR DEALERSHIP API", description: "Enterprise-grade API engineered with Java and Spring Framework. Implements a clean layered architecture and the MVC design pattern with full JWT security.", image: "/projects/pro5.png", tags: ["JAVA", "SPRING", "JWT", "SWAGGER"], link: "https://github.com/felipecezar01/back-API-cars" },
    { id: 4, year: "2024", title: "04 - IMMERSIVE ZOMBIE SURVIVAL", description: "A complex survival horror game developed in Unity. Features optimized 2D physics, AI pathfinding, and seamless web deployment via SIMMER.io.", image: "/projects/pro4.png", tags: ["UNITY", "C#", "SIMMER.IO", "VS CODE"], link: "https://www.linkedin.com/feed/update/urn:li:activity:7201312706274988033/" },
    { id: 3, year: "2024", title: "03 - OAUTH2 SECURE LOGIN SYSTEM", description: "Advanced authentication platform utilizing Google OAuth. Designed to demonstrate cybersecurity principles, HTTPS enforcement, and SQLi/XSS mitigation.", image: "/projects/pro3.png", tags: ["OAUTH", "CYBERSEC", "OPENID", "HTTPS"], link: "https://github.com/felipecezar01/fullstack-security-showcase" },
    { id: 2, year: "2024", title: "02 - NODE MONITORING API", description: "Full-stack REST API integrated with real-time telemetry. Leverages Prometheus for metric collection and Grafana for professional server health visualization.", image: "/projects/pro2.png", tags: ["GRAFANA", "PROMETHEUS", "JS", "MONITORING"], link: "https://github.com/felipecezar01/back-task-manager-monitor" },
    { id: 1, year: "2024", title: "01 - DOCKERIZED VISITOR COUNTER", description: "A DevOps-centric project focused on modern containerization and orchestration. Features a robust CI/CD pipeline using GitHub Actions and Docker Compose.", image: "/projects/pro1.png", tags: ["DOCKER", "CI/CD", "GITHUB ACTIONS", "LOGISTICS"], link: "https://github.com/felipecezar01/fullstack-visit-counter" },
  ];

  const experiences = [
    { side: 'right', title: "AI & Automation Developer", company: "Prefeitura Eficiente", year: "2025", desc: "Developed intelligent chatbots integrated with WhatsApp using Gemini LLMs to automate citizen support. Engineered generative AI systems for lead classification, significantly enhancing the efficiency of public demand routing.", tags: ["Python", "Gemini LLM", "n8n", "WhatsApp Business API"] },
    { side: 'left', title: "Low-Code Developer", company: "Instituto Teslando", year: "2025", desc: "Engineered industrial low-code mobile applications for operational management, focusing on inventory control and asset tracking. Optimized business workflows by implementing custom automations and REST API integrations.", tags: ["AppSheet", "Google Workspace", "SQL", "API Integrations"] },
    { side: 'right', title: "Technical Project Manager", company: "Instituto Robótica Sustentável", year: "2025", desc: "Directed end-to-end operations across six distinct organizational sectors within a high-impact NGO. Conducted comprehensive performance analysis and strategic planning to ensure seamless cross-functional alignment and project scalability.", tags: ["Project Management", "Data Analysis", "Team Leadership", "Strategic Planning"] },
    { side: 'left', title: "Graphic Design Assistant", company: "Mundi Coisas", year: "2025", desc: "Acted as a digital designer creating high-fidelity visual assets and vector illustrations. Managed end-to-end production cycles and custom design requests to meet diverse client specifications in a fast-paced environment.", tags: ["Affinity Designer", "Canva", "Vector Graphics", "Visual Identity"] },
    { side: 'right', title: "Academic Mentor", company: "ADS Degree Program", year: "2024", desc: "Provided technical mentorship to undergraduate students in the Analysis and Systems Development program. Guided peers through complex software architecture concepts and programming fundamentals to foster academic and professional growth.", tags: ["Mentorship", "Software Architecture", "Code Review", "Teaching"] },
  ];

  const education = [
    { id: 3, side: 'right', period: "2026 - 2027", title: "Postgraduate Degree in Data Science (Lato Sensu)", institution: "Unifor", image: "/education/pos.png", status: "In Progress" },
    { id: 1, side: 'left', period: "2021 - 2025", title: "Bachelor of Information Systems Degree", institution: "Unifametro", image: "/education/si.png", status: "Completed" },
    { id: 2, side: 'right', period: "2021 - 2024", title: "Associate Degree in Systems Analysis and Software Development", institution: "Unifametro", image: "/education/ads.png", status: "Completed" }
  ];

  const skillCategories = [
    {
      title: "Software Engineering",
      headerColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      glowColor: "rgba(59, 130, 246, 0.2)",
      skills: [
        { name: "Python", slug: "python", color: "3776AB" },
        { name: "React", slug: "react", color: "61DAFB" },
        { name: "TypeScript", slug: "typescript", color: "3178C6" },
        { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
        { name: "Dart", slug: "dart", color: "0175C2" },
        { name: "Flutter", slug: "flutter", color: "02569B" },
        { name: "GitHub", slug: "github", color: "FFFFFF" },
        { name: "SQL", slug: "mysql", color: "4479A1" },
        { name: "Docker", slug: "docker", color: "2496ED" },
        { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      ]
    },
    {
      title: "Data Specialist",
      headerColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.2)",
      skills: [
        { name: "Pandas", slug: "pandas", color: "150458" },
        { name: "Scikit-Learn", slug: "scikitlearn", color: "F7931E" },
        { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
        { name: "PyTorch", slug: "pytorch", color: "EE4C2C" },
        { name: "R Language", slug: "r", color: "276DC3" },
        { name: "MLflow", slug: "mlflow", color: "0194E2" },
        { name: "Apache Spark", slug: "apachespark", color: "E25A1C" },
        { name: "MongoDB", slug: "mongodb", color: "47A248" },
        { name: "LangChain", slug: "langchain", color: "1C3C3C" },
        { name: "NumPy", slug: "numpy", color: "013243" },
      ]
    }
  ];

  const chunkSize = 2;
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += chunkSize) { projectChunks.push(projects.slice(i, i + chunkSize)); }
  const totalSlides = projectChunks.length;

  const isAtStart = currentSlideIndex === 0;
  const isAtEnd = currentSlideIndex === totalSlides - 1;

  const nextSlide = () => { if (currentSlideIndex < totalSlides - 1) setCurrentSlideIndex(prev => prev + 1); };
  const prevSlide = () => { if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1); };

  return (
    <div className="h-screen w-screen relative bg-[#16161a] text-white selection:bg-cyber-cyan/30 overflow-hidden flex flex-col">

      <div className="absolute top-0 left-0 w-full h-[280px] z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
        <Hero3D />
      </div>

      <main className="relative z-10 flex-1 flex flex-row gap-8 px-12 pt-[180px] pb-12 overflow-hidden">

        <aside className="w-full md:w-1/4 flex flex-col gap-6 h-full">
          <div className="bg-[#1e1e24] p-8 rounded-2xl border border-white/5 shadow-2xl shrink-0">
            <div className="w-44 h-96 relative rounded-2xl mx-auto mb-6 overflow-hidden group border border-white/5 shadow-lg">
              <Image src="/me.jpg" alt="Felipe Cezar" fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 brightness-90" />
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_15px_rgba(0,0,0,0.85),inset_0_0_25px_rgba(0,243,255,0.3)] pointer-events-none"></div>
            </div>
            <div className="space-y-4 text-center">
              <h2 className="text-xl font-bold tracking-tight text-white uppercase italic">Felipe Cezar</h2>
              <p className="text-xs font-mono text-cyber-cyan uppercase tracking-tighter font-bold underline decoration-cyber-cyan/20">Software Engineer & Data Scientist</p>
              <div className="h-px w-full bg-white/10 my-4" />
              <p className="text-sm text-gray-400 leading-relaxed px-2">Building scalable solutions and intelligent automations.</p>
            </div>
          </div>
          <div className="bg-[#1e1e24] p-6 rounded-2xl border border-white/5 shadow-2xl flex justify-center gap-10 shrink-0">
            <a href="https://www.linkedin.com/in/felipecezarcruz/" target="_blank" className="p-4 rounded-full border-[0.5px] border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300 hover:scale-110"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            <a href="https://github.com/felipecezar01" target="_blank" className="p-4 rounded-full border-[0.5px] border-white/10 text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300 hover:scale-110"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
          </div>
        </aside>

        <section className="flex-1 flex flex-col gap-6 h-full overflow-hidden">
          <nav className="h-20 bg-[#1e1e24] rounded-2xl border border-white/5 shadow-2xl flex justify-around items-center px-6 shrink-0">
            {['PROJECTS', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'RESUME'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-black tracking-[0.2em] transition-all duration-500 relative group ${activeTab === tab ? 'text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 shadow-[0_0_20px_rgba(0,243,255,0.15)] scale-105' : 'text-gray-500 hover:text-gray-300'}`}>
                {tab}
                {activeTab === tab && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-cyber-cyan shadow-[0_0_10px_#00f3ff] rounded-full" />}
              </button>
            ))}
          </nav>

          <article className={`bg-[#1e1e24] rounded-2xl border border-white/5 shadow-2xl flex-1 relative ${activeTab === 'RESUME' ? 'overflow-hidden' : 'overflow-y-auto pr-2 p-8 custom-scrollbar'}`}>
            {activeTab === 'PROJECTS' && (
              <div className="h-full w-full relative group p-0">
                {!isAtStart && <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/10 bg-black/50 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></button>}
                <div className="h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
                  {projectChunks.map((chunk, idx) => (
                    <div key={idx} className="min-w-full h-full grid grid-cols-2 gap-6 p-6">
                      {chunk.map((project) => (
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full border border-white/5 rounded-xl overflow-hidden bg-gray-800/20 group/card hover:border-cyber-cyan/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-500 cursor-pointer">
                          <div className="aspect-video relative shrink-0 border-b border-white/5 bg-gray-900">
                            <Image src={project.image} alt={project.title} fill className="object-cover group-hover/card:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40"></div>
                          </div>
                          <div className="p-4 flex flex-col flex-1 justify-between">
                            <div>
                              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1 block font-bold">{project.year}</span>
                              <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight group-hover/card:text-cyber-cyan transition-colors line-clamp-1">{project.title}</h4>
                              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {project.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-1 bg-gray-800/80 border border-white/10 text-[11px] font-black text-cyber-cyan rounded-md tracking-wider uppercase group-hover/card:border-cyber-cyan/30 transition-colors">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                {!isAtEnd && <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-white/10 bg-black/50 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></button>}
              </div>
            )}

            {activeTab === 'EXPERIENCE' && (
              <div className="h-full w-full overflow-y-auto overflow-x-hidden p-10 custom-scrollbar relative">
                <div className="relative min-h-full">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-cyber-cyan/20 animate-[growHeight_1.5s_ease-out_forwards] origin-top"></div>
                  <div className="space-y-16 relative z-10">
                    {experiences.map((exp, i) => (
                      <div key={i} className={`relative flex items-center justify-between w-full opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] ${exp.side === 'left' ? 'flex-row-reverse' : ''}`} style={{ animationDelay: `${500 + (i * 300)}ms` }}>
                        <div className="w-[45%] group">
                          <div className="bg-gray-800/20 p-6 rounded-2xl border border-white/5 hover:border-cyber-cyan/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                            <span className="text-cyber-cyan font-mono text-sm font-bold tracking-[0.2em] uppercase">{exp.year}</span>
                            <h4 className="text-white font-black text-lg mt-1 uppercase group-hover:text-cyber-cyan transition-colors">{exp.title}</h4>
                            <p className="text-gray-400 font-bold text-sm mb-4 italic">{exp.company}</p>
                            <p className="text-gray-400 text-xs leading-relaxed mb-4">{exp.desc}</p>
                            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">{exp.tags.map((tag, tagI) => (<span key={tagI} className="px-2 py-1 bg-black/30 border border-cyber-cyan/30 text-[9px] font-bold text-cyber-cyan rounded-md uppercase tracking-wider">{tag}</span>))}</div>
                          </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#16161a] border-2 border-cyber-cyan shadow-[0_0_10px_#00f3ff] z-10"></div>
                        <div className="w-[45%]"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'EDUCATION' && (
              <div className="h-full w-full overflow-y-auto overflow-x-hidden p-10 custom-scrollbar relative">
                <div className="relative min-h-full">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-cyber-cyan/20 animate-[growHeight_1.5s_ease-out_forwards] origin-top"></div>
                  <div className="space-y-16 relative z-10">
                    {education.map((edu, i) => (
                      <div key={edu.id} className={`relative flex items-center justify-between w-full opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] ${edu.side === 'left' ? 'flex-row-reverse' : ''}`} style={{ animationDelay: `${500 + (i * 300)}ms` }}>
                        <div className="w-[45%] group">
                          <div className="bg-gray-800/20 p-6 rounded-2xl border border-white/5 hover:border-cyber-cyan/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)]">
                            <span className="text-cyber-cyan font-mono text-sm font-bold tracking-[0.2em] uppercase mb-1 block">{edu.period}</span>
                            <h4 className="text-white font-black text-lg uppercase group-hover:text-cyber-cyan transition-colors mb-2">{edu.title}</h4>
                            <p className="text-gray-400 font-bold text-sm italic mb-4">{edu.institution}</p>
                            <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 mb-2 bg-black/40"><Image src={edu.image} alt={edu.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /></div>
                            <p className="text-[8px] text-gray-500 italic text-right mb-4">* Image for illustrative purposes only</p>
                            <div className="flex justify-end mt-2"><span className={`text-[10px] font-black px-2 py-0.5 rounded border ${edu.status === 'Completed' ? 'border-green-500/50 text-green-500' : 'border-cyber-cyan/50 text-cyber-cyan'} uppercase tracking-widest`}>{edu.status}</span></div>
                          </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#16161a] border-2 border-cyber-cyan shadow-[0_0_10px_#00f3ff] z-10"></div>
                        <div className="w-[45%]"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'SKILLS' && (
              <div className="h-full w-full p-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="grid grid-cols-2 gap-10 h-full">
                  {skillCategories.map((cat, catIdx) => (
                    <div key={cat.title} className="flex flex-col space-y-6">
                      <h3 className={`${cat.headerColor} font-black text-xl tracking-[0.2em] uppercase border-b border-white/10 pb-4`}>
                        {cat.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {cat.skills.map((skill, i) => (
                          <div
                            key={skill.name}
                            className={`opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] flex flex-row items-center gap-4 px-4 py-3 bg-[#1e1e24]/60 border ${cat.borderColor} rounded-lg hover:shadow-[0_0_20px_${cat.glowColor}] transition-all duration-300 group cursor-default`}
                            style={{ animationDelay: `${200 + (catIdx * 200) + (i * 50)}ms` }}
                          >
                            <img
                              src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                              alt={skill.name}
                              className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-[11px] font-black text-gray-300 group-hover:text-white uppercase tracking-widest truncate">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'RESUME' && (
              <div className="h-full w-full flex flex-col items-center p-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="text-center space-y-4">
                  <h3 className="text-white font-black text-4xl tracking-tighter uppercase">Want to know more about me?</h3>
                  <p className="text-gray-400 text-lg font-medium tracking-wide">Download my CV in your preferred version below.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                  <a href="/docs/cv-felipe-pt.pdf" download className="group relative flex items-center gap-6 px-10 py-5 bg-gray-800/20 border border-emerald-500/30 rounded-2xl hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 hover:-translate-y-2">
                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🇧🇷</span>
                    <div className="flex flex-col items-start"><span className="text-emerald-400 font-black text-xs tracking-widest uppercase">Portuguese</span><span className="text-white font-bold text-lg uppercase">Download CV</span></div>
                  </a>
                  <a href="/docs/cv-felipe-en.pdf" download className="group relative flex items-center gap-6 px-10 py-5 bg-gray-800/20 border border-rose-500/30 rounded-2xl hover:border-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-500 hover:-translate-y-2">
                    <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">🇺🇸</span>
                    <div className="flex flex-col items-start"><span className="text-rose-400 font-black text-xs tracking-widest uppercase">English</span><span className="text-white font-bold text-lg uppercase">Download CV</span></div>
                  </a>
                </div>
              </div>
            )}
          </article>
        </section>
      </main>

      <footer className="h-6 shrink-0 bg-black/20 flex items-center justify-end px-4 gap-3">
        <span className="text-[8px] font-mono text-gray-500 tracking-[0.2em] uppercase">
          Built by <span className="text-gray-300 font-bold">Felipe Cezar</span> // Coworker: <span className="text-gray-300 font-bold">Gemini 3 Pro</span>
        </span>
        <img
          src="https://cdn.simpleicons.org/googlegemini/9ca3af"
          alt="Gemini Icon"
          className="h-3 w-3 opacity-60"
        />
      </footer>
    </div>
  );
}