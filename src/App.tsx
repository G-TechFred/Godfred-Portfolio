import React from "react";

const experience = [
  {
    number: "01",
    organization: "Controller & Accountant-General's Department",
    role: "Administrative Analyst",
    description:
      "Worked within the Pensions Computation Unit, applying quantitative analysis and Power BI to pension calculations and financial reporting. Managed digital records and tracking systems for 120+ vital records, supporting accuracy and administrative efficiency.",
    tags: ["Power BI", "Data Analysis", "Administration"],
  },
  {
    number: "02",
    organization: "Oye Ride",
    role: "Growth Marketing Lead",
    description:
      "Developed and managed digital campaigns while monitoring engagement and conversion metrics to evaluate campaign performance and improve user acquisition strategies.",
    tags: ["Analytics", "Digital Strategy", "Performance"],
  },
  {
    number: "03",
    organization: "Education / ICT",
    role: "ICT Tutor",
    description:
      "Designed and delivered technology-focused lessons for 150+ students, strengthening digital literacy and proficiency with collaborative tools and digital platforms.",
    tags: ["Education", "ICT", "Digital Literacy"],
  },
];

const research = [
  {
    type: "UNDERGRADUATE RESEARCH",
    title: "Classroom Management Styles & Student Engagement",
    organization: "University of Cape Coast",
    description:
      "Examined the relationship between Business Management teachers' classroom management practices and student engagement using quantitative research methods.",
    tools: ["SPSS", "Zotero", "Quantitative Research"],
  },
  {
    type: "ORGANIZATIONAL STUDY",
    title: "Organizational Performance Review",
    organization: "U-Splash Mineral Water Company",
    description:
      "Conducted an organizational diagnostic study examining management and performance challenges and used data to identify areas for organizational improvement.",
    tools: ["Tableau", "Excel", "Data Modeling"],
  },
];

const skills = [
  {
    title: "Data & Evaluation",
    items: ["Power BI", "Tableau", "SQL / MySQL", "SPSS", "Advanced Excel"],
  },
  {
    title: "Research",
    items: ["Qualtrics", "Survey Design", "Data Collection", "Zotero"],
  },
  {
    title: "Technology",
    items: ["React", "TypeScript", "Tailwind CSS", "Supabase", "GitHub"],
  },
  {
    title: "Automation",
    items: ["Power Automate", "Zapier", "Make.com", "Process Improvement"],
  },
  {
    title: "Project Management",
    items: ["Asana", "Trello", "Google Workspace", "Microsoft Office"],
  },
];

function App() {
  return (
    <div className="site">

      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <div className="container nav-inner">

          <a href="#home" className="brand">
            <span className="brand-mark">GM</span>
            <span>Godfred Mensah</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>
        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-grid" />

          <div className="container hero-container">

            <div className="hero-copy">

              <div className="status">
                <span className="status-dot" />
                PROFESSIONAL & ACADEMIC PORTFOLIO
              </div>

              <p className="hero-intro">
                EDUCATION · RESEARCH · DATA · TECHNOLOGY
              </p>

              <h1>
                Turning data and
                <span> technology </span>
                into meaningful impact.
              </h1>

              <p className="hero-description">
                I am an education and management professional with experience
                spanning administration, research, data analysis, technology,
                project coordination and process improvement.
              </p>

              <p className="hero-description secondary-copy">
                My goal is to use evidence, technology, and innovative
                problem-solving to improve organizations, educational
                outcomes, and community-focused initiatives.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore My Work
                  <span>→</span>
                </a>

                <a href="/Godfred-Mensah-CV.pdf" target="_blank" rel="noreferrer" className="button button-outline">
                  View My CV
                </a>
              </div>

            </div>

            {/* Hero visual */}
            <div className="hero-visual">

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="profile-card">

                <div className="profile-top">
                  <span className="profile-label">PROFILE</span>
                  <span className="profile-number">01</span>
                </div>

                <div className="profile-avatar">
                  GM
                </div>

                <h3>Godfred Mensah</h3>

                <p>
                  Education & Management
                  <br />
                  Research · Data · Technology
                </p>

                <div className="profile-line" />

                <div className="profile-stat-grid">
                  <div>
                    <strong>150+</strong>
                    <span>Students</span>
                  </div>

                  <div>
                    <strong>120+</strong>
                    <span>Records</span>
                  </div>

                  <div>
                    <strong>05</strong>
                    <span>Core Areas</span>
                  </div>
                </div>

              </div>

              <div className="floating-card floating-card-one">
                <span>DATA</span>
                <strong>Analysis</strong>
              </div>

              <div className="floating-card floating-card-two">
                <span>TECH</span>
                <strong>Innovation</strong>
              </div>

            </div>
          </div>

          <div className="scroll-indicator">
            <span />
            Scroll to explore
          </div>
        </section>


        {/* ================= PROFILE SNAPSHOT ================= */}
        <section className="snapshot">
          <div className="container snapshot-grid">

            <div>
              <span className="snapshot-number">01</span>
              <strong>Education</strong>
              <p>Building knowledge through teaching and research.</p>
            </div>

            <div>
              <span className="snapshot-number">02</span>
              <strong>Administration</strong>
              <p>Improving processes through structured systems.</p>
            </div>

            <div>
              <span className="snapshot-number">03</span>
              <strong>Research</strong>
              <p>Using evidence to understand performance.</p>
            </div>

            <div>
              <span className="snapshot-number">04</span>
              <strong>Technology</strong>
              <p>Creating digital solutions for real problems.</p>
            </div>

          </div>
        </section>


        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-number">01 / ABOUT</span>

                <h2>
                  A multidisciplinary
                  <span> perspective.</span>
                </h2>
              </div>

              <p>
                My background sits at the intersection of education,
                administration, research, data and technology.
              </p>

            </div>

            <div className="about-grid">

              <div className="about-large-card">
                <span className="card-index">01</span>

                <h3>
                  From managing information
                  <br />
                  to creating solutions.
                </h3>

                <p>
                  My professional experiences have taught me that good
                  decisions depend on good information. Whether working with
                  administrative records, student data, research findings or
                  organizational performance, I am interested in transforming
                  information into actionable insights.
                </p>
              </div>

              <div className="about-side">

                <div className="mini-card">
                  <span>01</span>
                  <h3>Evidence</h3>
                  <p>
                    Research and quantitative analysis guide how I approach
                    problems.
                  </p>
                </div>

                <div className="mini-card">
                  <span>02</span>
                  <h3>Technology</h3>
                  <p>
                    Digital tools help me turn ideas into practical systems.
                  </p>
                </div>

                <div className="mini-card">
                  <span>03</span>
                  <h3>Impact</h3>
                  <p>
                    I focus on solutions that improve people, processes and
                    organizations.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section dark-section">

          <div className="container">

            <div className="section-heading light-heading">

              <div>
                <span className="section-number">02 / EXPERIENCE</span>

                <h2>
                  Experience that
                  <span> connects disciplines.</span>
                </h2>
              </div>

              <p>
                Professional experiences across public administration,
                education, technology and digital business.
              </p>

            </div>

            <div className="experience-list">

              {experience.map((item) => (
                <article className="experience-item" key={item.number}>

                  <div className="experience-number">
                    {item.number}
                  </div>

                  <div className="experience-main">

                    <span className="experience-org">
                      {item.organization}
                    </span>

                    <h3>{item.role}</h3>

                    <p>{item.description}</p>

                    <div className="tag-list">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </div>

                  <div className="experience-arrow">
                    ↗
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* ================= RESEARCH ================= */}
        <section id="research" className="section research-section">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-number">03 / RESEARCH</span>

                <h2>
                  Curiosity backed by
                  <span> evidence.</span>
                </h2>
              </div>

              <p>
                Research experiences that shaped my interest in evaluation,
                organizational performance, and educational outcomes.
              </p>

            </div>

            <div className="research-grid">

              {research.map((item, index) => (
                <article className="research-card" key={item.title}>

                  <div className="research-top">
                    <span>{item.type}</span>
                    <span>0{index + 1}</span>
                  </div>

                  <div className="research-content">

                    <p className="research-org">
                      {item.organization}
                    </p>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="research-tools">
                      {item.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>

                  </div>

                  <div className="research-footer">
                    <span>Research & Evaluation</span>
                    <span>↗</span>
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* ================= FEATURED PROJECT ================= */}
        <section id="projects" className="section project-section">

          <div className="container">

            <div className="section-heading light-heading">

              <div>
                <span className="section-number">04 / PROJECTS</span>

                <h2>
                  Building technology
                  <span> with purpose.</span>
                </h2>
              </div>

              <p>
                A selection of technology and process-improvement projects
                focused on solving practical problems.
              </p>

            </div>


            {/* Featured project */}
            <article className="featured-project">

              <div className="project-info">

                <div className="project-header">
                  <span>FEATURED PROJECT</span>
                  <span className="project-status-badge">
                    IN DEVELOPMENT
                  </span>
                </div>

                <h3>
                  Student Performance
                  <br />
                  Tracking Application
                </h3>

                <p>
                  A digital application designed to record, organize, and
                  monitor student assessment and performance data. The system
                  aims to make performance information easier to review while
                  supporting data-informed decisions about student progress.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Supabase</span>
                </div>

                <div className="project-link">
                  <span>Educational Technology</span>
                  <span>↗</span>
                </div>

              </div>


              <div className="project-interface">

                <div className="interface-window">

                  <div className="window-bar">
                    <div className="window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span>student-performance.app</span>
                  </div>

                  <div className="dashboard">

                    <div className="dashboard-header">
                      <div>
                        <small>OVERVIEW</small>
                        <h4>Student Performance</h4>
                      </div>

                      <span className="dashboard-pill">
                        2026
                      </span>
                    </div>

                    <div className="dashboard-stats">

                      <div>
                        <span>STUDENTS</span>
                        <strong>150+</strong>
                      </div>

                      <div>
                        <span>ASSESSMENTS</span>
                        <strong>428</strong>
                      </div>

                      <div>
                        <span>AVG. SCORE</span>
                        <strong>78%</strong>
                      </div>

                    </div>

                    <div className="chart">

                      <div className="chart-label">
                        <span>Performance trend</span>
                        <span>+12.4%</span>
                      </div>

                      <div className="chart-bars">
                        <i style={{ height: "35%" }} />
                        <i style={{ height: "48%" }} />
                        <i style={{ height: "42%" }} />
                        <i style={{ height: "62%" }} />
                        <i style={{ height: "55%" }} />
                        <i style={{ height: "76%" }} />
                        <i style={{ height: "88%" }} />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* Other projects */}
            <div className="project-grid">

              <article className="project-small">
                <span>02</span>

                <h3>Data Analysis & Visualization</h3>

                <p>
                  Using Power BI, Tableau, SQL, SPSS and Excel to transform
                  datasets into meaningful insights and visual reports.
                </p>

                <strong>Data · Analytics · Visualization →</strong>
              </article>

              <article className="project-small">
                <span>03</span>

                <h3>Workflow Automation</h3>

                <p>
                  Designing automated workflows with Power Automate, Zapier
                  and Make.com to reduce repetitive administrative work.
                </p>

                <strong>Automation · Process Design →</strong>
              </article>

              <article className="project-small">
                <span>04</span>

                <h3>Research & Survey Design</h3>

                <p>
                  Using Qualtrics and structured research methods to support
                  survey design, information gathering and data collection.
                </p>

                <strong>Research · Surveys · Evaluation →</strong>
              </article>

            </div>

          </div>

        </section>


        {/* ================= LEADERSHIP ================= */}
        <section className="section leadership-section">

          <div className="container leadership-grid">

            <div>

              <span className="section-number">05 / LEADERSHIP</span>

              <h2>
                Leadership through
                <span> collaboration.</span>
              </h2>

              <p>
                Beyond technical skills, I value teamwork, communication,
                responsibility and service.
              </p>

            </div>

            <div className="leadership-items">

              <article>
                <span>01</span>

                <div>
                  <small>RESEARCH LEADERSHIP</small>
                  <h3>Final Year Research Team Lead</h3>

                  <p>
                    Coordinated research activities, project timelines, survey
                    distribution and data collection workflows.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <small>COMMUNITY ENGAGEMENT</small>
                  <h3>YPF Africa — Outreach Volunteer</h3>

                  <p>
                    Participated in community outreach and volunteer
                    activities focused on engagement and service.
                  </p>
                </div>
              </article>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-number">06 / SKILLS</span>

                <h2>
                  Tools I use to
                  <span> create impact.</span>
                </h2>
              </div>

              <p>
                A combination of analytical, research, technological and
                professional skills developed through academic and practical
                experience.
              </p>

            </div>

            <div className="skills-grid">

              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>

                  <span className="skill-number">
                    0{index + 1}
                  </span>

                  <h3>{skill.title}</h3>

                  <div>
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>


        {/* ================= ACADEMIC DIRECTION ================= */}
        <section className="academic-section">

          <div className="container academic-container">

            <span className="section-number">
              ACADEMIC DIRECTION
            </span>

            <h2>
              Preparing to take the next step
              <span> through graduate study.</span>
            </h2>

            <p>
              I am interested in graduate study that allows me to deepen my
              knowledge of technology, research, data, organizational
              performance, educational systems, and evidence-based
              decision-making.
            </p>

            <div className="academic-pills">
              <span>Research & Evaluation</span>
              <span>Educational Technology</span>
              <span>Data Analytics</span>
              <span>Public Administration</span>
              <span>Organizational Performance</span>
            </div>

          </div>

        </section>


        {/* ================= RESUME ================= */}
        <section className="resume-section">

          <div className="container resume-container">

            <div>

              <span className="section-number">
                PROFESSIONAL DOCUMENTS
              </span>

              <h2>
                Want to know more
                <br />
                about my background?
              </h2>

            </div>

            <a
              href="/Godfred-Mensah-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-button"
            >
              <span>View / Download CV</span>
              <strong>↗</strong>
            </a>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">

          <div className="container contact-container">

            <div className="contact-heading">

              <span className="section-number">
                07 / CONTACT
              </span>

              <h2>
                Let's start a
                <span> conversation.</span>
              </h2>

              <p>
                I welcome opportunities related to graduate study, research,
                technology, program evaluation, data analysis, public
                administration, and community-focused initiatives.
              </p>

            </div>

            <div className="contact-links">

              <a href="mailto:godfredmens78@gmail.com">
                <span>Email</span>
                <strong>↗</strong>
              </a>

              <a
                href="https://github.com/G-TechFredE"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>↗</strong>
              </a>

              <a
                href="https://www.linkedin.com/in/godfred-mensah1"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>↗</strong>
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="container footer-inner">

          <div>
            <strong>Godfred Mensah</strong>
            <span>
              Education · Research · Data · Technology
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Godfred Mensah. All rights reserved.
          </p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;