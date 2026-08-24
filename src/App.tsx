function App() {
  return (
    <div className="page" style={{ backgroundColor: "#f8fafc", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Navigation & Top Profile Header */}
      <header className="navbar" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 100, padding: "0.75rem 0" }}>
        <div className="container nav-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Logo / Name & Picture */}
          <a href="#home" className="logo" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "#0f172a", fontWeight: "700", fontSize: "1.15rem" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", overflow: "hidden", border: "2px solid #3b82f6", flexShrink: 0 }}>
              <img 
                src="/Profile.jpg" 
                alt="Godfred Mensah" 
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} 
              />
            </div>
            <span>Godfred Mensah</span>
          </a>

          <nav className="nav-links" style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}>
            <a href="#about" style={{ color: "#475569", textDecoration: "none" }}>About</a>
            <a href="#experience" style={{ color: "#475569", textDecoration: "none" }}>Experience</a>
            <a href="#research" style={{ color: "#475569", textDecoration: "none" }}>Research</a>
            <a href="#projects" style={{ color: "#475569", textDecoration: "none" }}>Projects</a>
            <a href="#skills" style={{ color: "#475569", textDecoration: "none" }}>Skills</a>
            <a href="#contact" style={{ color: "#475569", textDecoration: "none" }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)", padding: "5rem 1.5rem", borderBottom: "1px solid #e2e8f0" }}>
          <div className="container hero-content" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", letterSpacing: "0.05em", fontSize: "0.85rem", marginBottom: "1rem" }}>PROFESSIONAL PORTFOLIO</p>

            <h1 style={{ fontSize: "3rem", lineHeight: "1.2", color: "#0f172a", marginBottom: "1.5rem" }}>
              Management
              <br />
              <span style={{ color: "#2563eb" }}>Research & Evaluation · Data & Technology</span>
            </h1>

            <p className="hero-description" style={{ fontSize: "1.15rem", color: "#475569", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "750px" }}>
              Education and management professional with experience in
              administration, research, data analysis, project coordination,
              and technology-enabled process improvement.
            </p>

            <div className="hero-buttons" style={{ display: "flex", gap: "1rem" }}>
              <a href="#projects" className="button primary" style={{ backgroundColor: "#1e3a8a", color: "#ffffff", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", fontWeight: "600" }}>
                View My Work
              </a>

              <a href="#contact" className="button secondary" style={{ backgroundColor: "#ffffff", color: "#1e3a8a", border: "1px solid #cbd5e1", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", fontWeight: "600" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section" style={{ padding: "5rem 1.5rem", backgroundColor: "#ffffff" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>ABOUT</p>

            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2rem" }}>Management, evidence and technology</h2>

            <div className="two-column" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", color: "#475569", lineHeight: "1.7" }}>
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
        <section id="experience" className="section light-section" style={{ padding: "5rem 1.5rem", backgroundColor: "#f8fafc" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>EXPERIENCE</p>

            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2.5rem" }}>Professional experience</h2>

            <div className="cards three-cards" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <article className="card" style={{ backgroundColor: "#ffffff", padding: "2rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <p className="card-label" style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600", marginBottom: "0.5rem" }}>
                  Controller & Accountant-General's Department
                </p>
                <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "0.75rem" }}>Administrative Analyst</h3>
                <p style={{ color: "#475569", lineHeight: "1.6" }}>
                  Worked within the Pensions Computation Unit, applying quantitative analysis and Power BI to pension calculations and financial reporting. Managed digital records and tracking systems for 120+ vital records, supporting accuracy, consistency, and administrative efficiency.
                </p>
              </article>

              <article className="card" style={{ backgroundColor: "#ffffff", padding: "2rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <p className="card-label" style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600", marginBottom: "0.5rem" }}>Oye Ride</p>
                <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "0.75rem" }}>Growth Marketing Lead</h3>
                <p style={{ color: "#475569", lineHeight: "1.6" }}>
                  Developed and managed digital campaigns while monitoring engagement and conversion metrics to evaluate campaign performance and improve user acquisition strategies.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="section" style={{ padding: "5rem 1.5rem", backgroundColor: "#ffffff" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>RESEARCH & EVALUATION</p>
            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2.5rem" }}>Using evidence to understand performance</h2>

            <div className="cards two-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <article className="card" style={{ backgroundColor: "#f8fafc", padding: "2rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                <p className="card-label" style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600", marginBottom: "0.5rem" }}>University of Cape Coast</p>
                <h3 style={{ fontSize: "1.15rem", color: "#0f172a", marginBottom: "0.75rem" }}>Classroom Management Styles & Student Engagement</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6" }}>Conducted research examining the relationship between Business Management teachers' practices and student engagement using SPSS.</p>
              </article>

              <article className="card" style={{ backgroundColor: "#f8fafc", padding: "2rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                <p className="card-label" style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "600", marginBottom: "0.5rem" }}>U-Splash Mineral Water Company</p>
                <h3 style={{ fontSize: "1.15rem", color: "#0f172a", marginBottom: "0.75rem" }}>Organizational Performance Review</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6" }}>Conducted an organizational diagnostic study applying quantitative analysis, Tableau, and Excel data modeling.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section light-section" style={{ padding: "5rem 1.5rem", backgroundColor: "#f8fafc" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>PROJECTS</p>
            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2rem" }}>Technology applied to real-world problems</h2>

            <article className="featured-project" style={{ backgroundColor: "#ffffff", padding: "2.5rem", borderRadius: "0.5rem", border: "1px solid #cbd5e1", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
              <p className="project-status" style={{ fontSize: "0.75rem", backgroundColor: "#dbeafe", color: "#1e40af", display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "1rem", fontWeight: "700", marginBottom: "1rem" }}>IN DEVELOPMENT</p>
              <h3 style={{ fontSize: "1.5rem", color: "#0f172a", marginBottom: "1rem" }}>Student Performance Tracking Application</h3>
              <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                Developing a digital application for recording, organizing, and monitoring student assessment and performance data in alignment with educational grading frameworks.
              </p>
              <div className="technology-list" style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ backgroundColor: "#f1f5f9", color: "#334155", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.85rem" }}>React</span>
                <span style={{ backgroundColor: "#f1f5f9", color: "#334155", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.85rem" }}>TypeScript</span>
                <span style={{ backgroundColor: "#f1f5f9", color: "#334155", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontSize: "0.85rem" }}>Supabase</span>
              </div>
            </article>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section" style={{ padding: "5rem 1.5rem", backgroundColor: "#ffffff" }}>
          <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>SKILLS</p>
            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "2.5rem" }}>Technical & professional skills</h2>

            <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div className="skill-group" style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                <h3 style={{ color: "#1e3a8a", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Data & Evaluation</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem" }}>Power BI · Tableau · SQL/MySQL · SPSS · Advanced Excel</p>
              </div>
              <div className="skill-group" style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "0.5rem", border: "1px solid #e2e8f0" }}>
                <h3 style={{ color: "#1e3a8a", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Digital Development</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem" }}>React · TypeScript · Tailwind CSS · Supabase · GitHub</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section light-section" style={{ padding: "5rem 1.5rem", backgroundColor: "#f8fafc", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p className="eyebrow" style={{ color: "#2563eb", fontWeight: "600", fontSize: "0.85rem", marginBottom: "0.5rem" }}>CONTACT</p>
            <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "1rem" }}>Interested in connecting?</h2>
            <p className="contact-text" style={{ color: "#475569", marginBottom: "2rem", lineHeight: "1.6" }}>
              I welcome opportunities related to public administration, program evaluation, research, data analysis, and community-focused initiatives.
            </p>
            <div className="contact-links" style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              <a href="mailto:godfredmens78@gmail.com" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}>Email Me</a>
              <a href="https://linkedin.com/in/godfred-mensah1" target="_blank" rel="noreferrer" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}>LinkedIn</a>
              <a href="https://github.com/G-TECHFRED" target="_blank" rel="noreferrer" style={{ color: "#2563eb", fontWeight: "600", textDecoration: "none" }}>GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "2rem 1.5rem", textAlign: "center", fontSize: "0.9rem" }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Godfred Mensah. Professional Portfolio.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;