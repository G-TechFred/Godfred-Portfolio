function App() {
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
            Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;