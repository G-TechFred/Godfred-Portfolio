import React, { useState } from 'react';
import { 
  FileText, Mail, Github, Linkedin, ExternalLink, 
  ChevronRight, Briefcase, GraduationCap, Code, Database, 
  Cpu, Users, BarChart2, CheckCircle2, Award, Menu, X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Godfred Mensah
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#research" className="hover:text-indigo-600 transition-colors">Research</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm"
            >
              Get in Touch
            </a>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-600">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)}>Research</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
              Professional Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Management Research & Evaluation · Data & Technology
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Education and management professional with experience in administration, research, data analysis, project coordination, and technology-enabled process improvement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
              >
                View My Work <ChevronRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-300 font-medium rounded-xl hover:bg-slate-50 transition-all shadow-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">About</h2>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            Management, evidence and technology
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            I have a background in education and management, with professional experience in administration, research, data analysis, and project coordination.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            My work has involved using data and digital tools to improve administrative processes, monitor performance, and support informed decision-making. I am particularly interested in program evaluation, organizational performance, public administration, and community-focused initiatives.
          </p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Experience</h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">Professional experience</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Controller & Accountant-General's Department</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Administrative Analyst</h4>
                <p className="text-slate-600 leading-relaxed">
                  Worked within the Pensions Computation Unit, applying quantitative analysis and Power BI to pension calculations and financial reporting. Managed digital records and tracking systems for 120+ vital records, supporting accuracy, consistency, and administrative efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Oye Ride</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Growth Marketing Lead</h4>
                <p className="text-slate-600 leading-relaxed">
                  Developed and managed digital campaigns while monitoring engagement and conversion metrics to evaluate campaign performance and improve user acquisition strategies.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Education / ICT</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">ICT Tutor</h4>
                <p className="text-slate-600 leading-relaxed">
                  Designed and delivered technology-focused lessons for 150+ students, strengthening digital literacy and proficiency with collaborative tools and digital platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Evaluation Section */}
      <section id="research" className="py-20 max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Research & Evaluation</h2>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">Using evidence to understand performance</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">University of Cape Coast · Undergraduate Research</span>
              <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Classroom Management Styles & Students' Engagement</h4>
              <p className="text-slate-600 leading-relaxed">
                Conducted research examining the relationship between Business Management teachers' classroom management practices and student engagement. Used SPSS for quantitative analysis and Zotero for research reference management.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">U-Splash Mineral Water Company</span>
              <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">Organizational Performance Review</h4>
              <p className="text-slate-600 leading-relaxed">
                Conducted an organizational diagnostic study examining management and performance challenges. Applied quantitative analysis, Tableau, and Excel data modeling to assess organizational performance and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Projects</h2>
            <h3 className="text-3xl font-bold tracking-tight">Technology applied to real-world problems</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full mb-4">In Development</span>
                <h4 className="text-xl font-bold mb-3">Student Performance Tracking Application</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Developing a digital application for recording, organizing, and monitoring student assessment and performance data. The project is designed to make performance information easier to review and support data-informed decisions about student progress.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {['React', 'TypeScript', 'Tailwind CSS', 'Supabase'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full mb-4">Analytics</span>
                <h4 className="text-xl font-bold mb-3">Data Analysis & Visualization</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Projects involving Power BI, Tableau, SQL, SPSS, and Excel for analyzing and presenting data.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {['Power BI', 'Tableau', 'SQL', 'SPSS'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full mb-4">Automation</span>
                <h4 className="text-xl font-bold mb-3">Workflow Automation</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Projects using Power Automate, Zapier, and Make.com to streamline repetitive administrative processes.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {['Power Automate', 'Zapier', 'Make.com'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-4">Research Tools</span>
                <h4 className="text-xl font-bold mb-3">Research & Survey Design</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Experience with Qualtrics for survey design, research data collection, and structured information gathering.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {['Qualtrics', 'Zotero', 'Survey Design'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-900 text-slate-300 text-xs rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Community Engagement</h2>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">Community involvement and service</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Community Engagement</span>
              <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-4">YPF Africa — Outreach Volunteer</h4>
              <p className="text-slate-600 leading-relaxed">
                Participated in community outreach and volunteer activities, contributing to initiatives focused on community engagement and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Skills</h2>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">Technical & professional skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BarChart2 size={18} className="text-indigo-600" /> Data & Evaluation
              </h4>
              <p className="text-slate-600 text-sm">Power BI, Tableau, SQL/MySQL, SPSS, Advanced Excel</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText size={18} className="text-indigo-600" /> Research
              </h4>
              <p className="text-slate-600 text-sm">Qualtrics, Zotero, Survey Design, Data Collection</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Cpu size={18} className="text-indigo-600" /> Workflow & Process Improvement
              </h4>
              <p className="text-slate-600 text-sm">Power Automate, Zapier, Make.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Code size={18} className="text-indigo-600" /> Digital Development
              </h4>
              <p className="text-slate-600 text-sm">React, TypeScript, Tailwind CSS, Supabase, GitHub</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users size={18} className="text-indigo-600" /> Project & Collaboration
              </h4>
              <p className="text-slate-600 text-sm">Asana, Trello, Google Sheets, Microsoft Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download / Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {/* Resume Block */}
          <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Resume</span>
              <h3 className="text-3xl font-bold tracking-tight mt-1">Interested in my background?</h3>
            </div>
            <a 
              href="#cv" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 transition-all shadow-md shrink-0"
            >
              <FileText size={18} /> Download My CV
            </a>
          </div>

          {/* Contact Block */}
          <div className="space-y-6 max-w-2xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Contact</span>
              <h3 className="text-3xl font-bold tracking-tight mt-1">Interested in connecting?</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              I welcome opportunities related to public administration, program evaluation, research, data analysis, and community-focused initiatives.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="mailto:contact@godfredmensah.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-all"
              >
                <Mail size={18} /> Email
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-all"
              >
                <Github size={18} /> GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-all"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800 text-center text-sm">
        <p>© 2026 Godfred Mensah. Professional Portfolio.</p>
      </footer>
    </div>
  );
}
  return (
    <div className="page">
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Godfred Mensah
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#leadership">Community</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <p className="eyebrow">PROFESSIONAL PORTFOLIO</p>

            <h1>
              Management
              <br />
              <span>Research & Evaluation · Data & Technology</span>
            </h1>

            <p className="hero-description">
              Education and management professional with experience in
              administration, research, data analysis, project coordination,
              and technology-enabled process improvement.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View My Work
              </a>

              <a href="#contact" className="button secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container">
            <p className="eyebrow">ABOUT</p>

            <h2>Management, evidence and technology</h2>

            <div className="two-column">
              <p>
                I have a background in education and management, with
                professional experience in administration, research, data
                analysis, and project coordination.
              </p>

              <p>
                My work has involved using data and digital tools to improve
                administrative processes, monitor performance, and support
                informed decision-making. I am particularly interested in
                program evaluation, organizational performance, public
                administration, and community-focused initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section light-section">
          <div className="container">
            <p className="eyebrow">EXPERIENCE</p>

            <h2>Professional experience</h2>

            <div className="cards three-cards">
              <article className="card">
                <p className="card-label">
                  Controller & Accountant-General's Department
                </p>

                <h3>Administrative Analyst</h3>

                <p>
                  Worked within the Pensions Computation Unit, applying
                  quantitative analysis and Power BI to pension calculations
                  and financial reporting. Managed digital records and
                  tracking systems for 120+ vital records, supporting accuracy,
                  consistency, and administrative efficiency.
                </p>
              </article>

              <article className="card">
                <p className="card-label">Oye Ride</p>

                <h3>Growth Marketing Lead</h3>

                <p>
                  Developed and managed digital campaigns while monitoring
                  engagement and conversion metrics to evaluate campaign
                  performance and improve user acquisition strategies.
                </p>
              </article>

              <article className="card">
                <p className="card-label">Education / ICT</p>

                <h3>ICT Tutor</h3>

                <p>
                  Designed and delivered technology-focused lessons for 150+
                  students, strengthening digital literacy and proficiency
                  with collaborative tools and digital platforms.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="section">
          <div className="container">
            <p className="eyebrow">RESEARCH & EVALUATION</p>

            <h2>Using evidence to understand performance</h2>

            <div className="cards two-cards">
              <article className="card">
                <p className="card-label">
                  University of Cape Coast · Undergraduate Research
                </p>

                <h3>
                  Classroom Management Styles & Students' Engagement
                </h3>

                <p>
                  Conducted research examining the relationship between
                  Business Management teachers' classroom management practices
                  and student engagement. Used SPSS for quantitative analysis
                  and Zotero for research reference management.
                </p>
              </article>

              <article className="card">
                <p className="card-label">U-Splash Mineral Water Company</p>

                <h3>Organizational Performance Review</h3>

                <p>
                  Conducted an organizational diagnostic study examining
                  management and performance challenges. Applied quantitative
                  analysis, Tableau, and Excel data modeling to assess
                  organizational performance and identify areas for
                  improvement.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section light-section">
          <div className="container">
            <p className="eyebrow">PROJECTS</p>

            <h2>Technology applied to real-world problems</h2>

            <article className="featured-project">
              <div>
                <p className="project-status">IN DEVELOPMENT</p>

                <h3>Student Performance Tracking Application</h3>

                <p>
                  Developing a digital application for recording, organizing,
                  and monitoring student assessment and performance data. The
                  project is designed to make performance information easier
                  to review and support data-informed decisions about student
                  progress.
                </p>

                <div className="technology-list">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Supabase</span>
                </div>
              </div>
            </article>

            <div className="cards three-cards project-cards">
              <article className="card">
                <h3>Data Analysis & Visualization</h3>

                <p>
                  Projects involving Power BI, Tableau, SQL, SPSS, and Excel
                  for analyzing and presenting data.
                </p>
              </article>

              <article className="card">
                <h3>Workflow Automation</h3>

                <p>
                  Projects using Power Automate, Zapier, and Make.com to
                  streamline repetitive administrative processes.
                </p>
              </article>

              <article className="card">
                <h3>Research & Survey Design</h3>

                <p>
                  Experience with Qualtrics for survey design, research data
                  collection, and structured information gathering.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="leadership" className="section">
          <div className="container">
            <p className="eyebrow">COMMUNITY ENGAGEMENT</p>

            <h2>Community involvement and service</h2>

            <div className="cards">
              <article className="card">
                <p className="card-label">Community Engagement</p>

                <h3>YPF Africa — Outreach Volunteer</h3>

                <p>
                  Participated in community outreach and volunteer activities,
                  contributing to initiatives focused on community engagement
                  and service.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section light-section">
          <div className="container">
            <p className="eyebrow">SKILLS</p>

            <h2>Technical & professional skills</h2>

            <div className="skills-grid">
              <div className="skill-group">
                <h3>Data & Evaluation</h3>
                <p>
                  Power BI · Tableau · SQL/MySQL · SPSS · Advanced Excel
                </p>
              </div>

              <div className="skill-group">
                <h3>Research</h3>
                <p>
                  Qualtrics · Zotero · Survey Design · Data Collection
                </p>
              </div>

              <div className="skill-group">
                <h3>Workflow & Process Improvement</h3>
                <p>Power Automate · Zapier · Make.com</p>
              </div>

              <div className="skill-group">
                <h3>Digital Development</h3>
                <p>
                  React · TypeScript · Tailwind CSS · Supabase · GitHub
                </p>
              </div>

              <div className="skill-group">
                <h3>Project & Collaboration</h3>
                <p>
                  Asana · Trello · Google Sheets · Microsoft Office
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section className="resume-section">
          <div className="container resume-box">
            <div>
              <p className="eyebrow">RESUME</p>

              <h2>Interested in my background?</h2>
            </div>

            <a
              href="/Godfred-Mensah-CV.pdf"
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              Download My CV
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <p className="eyebrow">CONTACT</p>

            <h2>Interested in connecting?</h2>

            <p className="contact-text">
              I welcome opportunities related to public administration,
              program evaluation, research, data analysis, and
              community-focused initiatives.
            </p>

            <div className="contact-links">
              <a href="mailto:godfredmens78@gmail.com">
                Email
              </a>

              <a
                href="https://github.com/G-TechFred"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/godfred-mensah1"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()} Godfred Mensah. Professional
            Portfolio