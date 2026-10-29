import './index.css';

type Project = {
  status: string;
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  technologies: string[];
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

const CV_PATH = '/Godfred-Mensah-CV.pdf';
const PROFILE_IMAGE = '/Profile.jpg';

const projects: Project[] = [
  {
    status: 'In Development',
    title: 'First-Year Student Mentorship & Peer Advising Platform',
    description:
      'Developing a digital platform designed to match first-year students with senior peer mentors based on academic majors and career interests. The platform is intended to support student onboarding, mentoring activities, and feedback collection through organized digital workflows.',
    link: {
      label: 'Quick Demo',
      href: 'https://campus-connect-ten-tau.vercel.app/',
    },
    technologies: ['Supabase', 'Web Workflows', 'Dashboards'],
    images: [
      {
        src: '/mentorship-dashboard.jpg',
        alt: 'Student mentorship platform dashboard',
        caption: 'Platform Dashboard',
      },
      {
        src: '/mentorship-2.jpg',
        alt: 'Student mentorship platform interface',
        caption: 'Platform Interface',
      },
      {
        src: '/mentorship-3.jpg',
        alt: 'Student mentor matching interface',
        caption: 'Mentor Matching',
      },
      {
        src: '/mentorship-4.jpg',
        alt: 'Student mentorship tracking interface',
        caption: 'Mentorship Tracking',
      },
    ],
  },
  {
    status: 'Completed',
    title: 'Student Affairs Program Assessment & Feedback Pipeline',
    description:
      'Designed an assessment workflow for collecting and organizing student feedback after workshops and campus activities. The project demonstrates how survey responses, satisfaction measures, and reporting dashboards can support program review and evidence-informed administrative decisions.',
    link: {
      label: 'Test Feedback Form',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSesj9pVo9MrkRTIuR7mMZD2Tlz_Q-yHTyqQjU1u_c2KpbEHPg/viewform?usp=publish-editor',
    },
    technologies: [
      'Google Forms',
      'Google Sheets',
      'Looker Studio',
      'Apps Script',
    ],
    images: [
      {
        src: '/survey-1.jpg',
        alt: 'Student program assessment survey',
        caption: 'Feedback Survey',
      },
      {
        src: '/survey-2.jpg',
        alt: 'Student survey response collection',
        caption: 'Response Collection',
      },
      {
        src: '/survey-3.jpg',
        alt: 'Student feedback data organization',
        caption: 'Data Organization',
      },
      {
        src: '/survey-4.jpg',
        alt: 'Student program assessment report',
        caption: 'Assessment Report',
      },
    ],
  },
  {
    status: 'Completed',
    title: 'Automated Student Service Request Workflow',
    description:
      'Developed a student service request workflow using online forms and automation tools to capture requests and organize records for follow-up. The project explores how digital processes can reduce repetitive administrative tasks and improve request tracking, departmental coordination, and communication.',
    link: {
      label: 'Live Request Form',
      href: 'https://cmt0jjy7m002iuog4b30r0qac.zapier.app/',
    },
    technologies: [
      'Zapier',
      'Apps Script',
      'Google Sheets',
      'Workflow Automation',
    ],
    images: [
      {
        src: '/request-workflow.jpg',
        alt: 'Student service request workflow overview',
        caption: 'Workflow Overview',
      },
      {
        src: '/request-2.jpg',
        alt: 'Student service request submission form',
        caption: 'Request Form',
      },
      {
        src: '/request-3.jpg',
        alt: 'Student service request records',
        caption: 'Request Records',
      },
      {
        src: '/request-4.jpg',
        alt: 'Student service request processing workflow',
        caption: 'Request Processing',
      },
    ],
  },
  {
    status: 'In Development',
    title: 'Student Performance Tracking Application',
    description:
      'Building a web application for recording continuous assessments and term results using applicable Ghana Education Service grading standards. The application focuses on organizing student records and presenting performance summaries to support progress monitoring and informed educational decisions.',
    link: {
      label: 'Live Demo',
      href: 'https://learning-lode-app.vercel.app/',
    },
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
    images: [
      {
        src: '/tracker-app.jpg',
        alt: 'Student performance tracking dashboard',
        caption: 'Performance Dashboard',
      },
      {
        src: '/tracker-2.jpg',
        alt: 'Student performance records interface',
        caption: 'Student Records',
      },
      {
        src: '/tracker-3.jpg',
        alt: 'Student assessment results interface',
        caption: 'Assessment Results',
      },
      {
        src: '/tracker-4.jpg',
        alt: 'Student academic progress report',
        caption: 'Progress Report',
      },
    ],
  },
];

/* Reusable Browser Mockup Component */
function BrowserMockup({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="browser-mockup">
      <div className="browser-header">
        <div className="browser-dots">
          <div className="browser-dot dot-red"></div>
          <div className="browser-dot dot-yellow"></div>
          <div className="browser-dot dot-green"></div>
        </div>

        <div className="browser-url">{url}</div>

        <div style={{ width: '36px' }}></div>
      </div>

      <div className="browser-body">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Godfred Mensah
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-content">
          <div className="profile-photo-container">
            <img
              src={PROFILE_IMAGE}
              alt="Godfred Mensah — Professional Profile"
              className="profile-photo"
              width={160}
              height={160}
              fetchPriority="high"
              onError={(event) => {
                console.error(
                  'Profile photo could not be loaded. Check that public/Profile.jpg exists and the filename matches exactly.',
                  event.currentTarget.src
                );
              }}
            />
          </div>

          <div className="eyebrow">Professional Portfolio</div>

          <h1>
            Education, Public Administration & Technology
            <span></span>
          </h1>

          <p className="hero-description">
            Education and Administrative professional with
            experience in research, data
            analysis, workflow automation and technology-enabled
            process improvement.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Work
            </a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="eyebrow">Experience</div>

          <h2>Professional Background</h2>

          <div className="cards two-cards">
            <article className="card">
              <span className="card-label">
                BUILD the Company
              </span>

              <h3>Administrative Assistant</h3>

              <p>
                Organizes internal office records and tracks operational workflow using digital tools to keep team project running smoothly. Manages data collection and entry to ensure accurate records for reports, projects tracking and company resources.
              </p>
            </article>

            <article className="card">
              <span className="card-label">
                Controller and Accountant-General&apos;s Department
              </span>

              <h3>Administrative Support</h3>

              <p>
                Calculated complex pension benefits and maintained
                organized digital records for government pension
                documentation. Reviewed supporting documents for
                accuracy, tracked pending files, and supported
                administrative follow-up and records management.
              </p>
            </article>

            <article className="card">
              <span className="card-label">
                Ngleshie Amanfro Senior High
              </span>

              <h3>Applied Teaching Practicum</h3>

              <p>
                Delivered Business Management lessons using class
                discussions and group activities to encourage student
                participation. Organized classroom quizzes and tracked
                student scores to identify learning needs and provide
                targeted support.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="section light-section projects-section"
      >
        <div className="container">
          <div className="eyebrow">Selected Work</div>

          <h2>Projects in Administration, Research &amp; Technology</h2>

          <p className="projects-intro">
            Practical projects exploring how digital systems, data
            analysis and process improvement can support student
            services, program evaluation and better administrative
            decisions.
          </p>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="card project-card"
                key={project.title}
              >
                <div className="project-heading">
                  <span className="card-label">
                    {project.status}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-actions">
                  <a
                    className="project-link"
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div
                  className="technology-list"
                  aria-label="Project technologies"
                >
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div
                  className="project-gallery"
                  aria-label={`${project.title} screenshots`}
                >
                  {project.images.map((image, imageIndex) => (
                    <a
                      className="gallery-item"
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${image.caption} image for ${project.title}`}
                      key={image.src}
                    >
                      <BrowserMockup
                        url={`${project.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]/g, '-')}.app`}
                      >
                        <div className="gallery-image-wrapper">
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                          />

                          <span className="image-zoom">
                            View image ↗️
                          </span>
                        </div>
                      </BrowserMockup>

                      <span className="gallery-image-caption">
                        <span className="image-number">
                          {String(imageIndex + 1).padStart(2, '0')}
                        </span>

                        {image.caption}
                      </span>
                    </a>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-number">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="project-image-count">
                    {project.images.length} screenshots
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education and Research Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="eyebrow">Background</div>

          <h2>Education &amp; Research Experience</h2>

          <div className="cards two-cards">
            <article className="card">
              <span className="card-label">
                University of Cape Coast
              </span>

              <h3>Bachelor of Education in Business Management</h3>

              <p>
                Completed undergraduate studies with a final-year
                research project examining Business Management
                Teachers&apos; classroom management styles and
                Students&apos; Engagement in the Cape Coast Metropolis.
                Used SPSS to support quantitative data analysis.
              </p>
            </article>

            <article className="card">
              <span className="card-label">
                U-Splash Mineral Water Company
              </span>

              <h3>Organizational Performance Review</h3>

              <p>
                Conducted an organizational diagnostic field study
                examining sales management issues. Organized records
                in Excel, developed Tableau visualizations to examine
                sales trends, and proposed practical performance
                improvement strategies.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section light-section">
        <div className="container">
          <div className="eyebrow">Expertise</div>

          <h2>Analytical, Research &amp; Technology Skills</h2>

          <div className="skills-grid">
            <article className="skill-group">
              <h3>Data &amp; Analysis</h3>

              <p>
                Power BI, SQL (MySQL), Tableau, SPSS, and Advanced
                Excel.
              </p>
            </article>

            <article className="skill-group">
              <h3>Workflow &amp; Process Improvement</h3>

              <p>
                Zapier, Make.com, workflow design, and administrative
                process improvement.
              </p>
            </article>

            <article className="skill-group">
              <h3>Research &amp; Data Collection</h3>

              <p>
                Qualtrics, Zotero, survey design, field data
                collection, and quantitative analysis.
              </p>
            </article>

            <article className="skill-group">
              <h3>Web &amp; Digital Tools</h3>

              <p>
                React, TypeScript, Tailwind CSS, VS Code, GitHub,
                Vercel, Firebase and Supabase.
              </p>
            </article>

            <article className="skill-group">
              <h3>Project &amp; Team Management</h3>

              <p>
                Asana, Trello, Google Sheets, and Microsoft 365.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section light-section">
        <div className="container">
          <div className="eyebrow">Curriculum Vitae</div>

          <h2>My Professional Resume</h2>

          <p className="projects-intro">
            Explore my academic background, professional experience,
            research interests, analytical skills and technology
            projects in greater detail.
          </p>

          <div className="hero-buttons">
            {/* View CV in a new browser tab */}
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              View CV ↗️
            </a>

            {/* Download the original PDF file */}
            <a
              href={CV_PATH}
              download="Godfred-Mensah-CV.pdf"
              className="button primary"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="eyebrow">Connect</div>

          <h2>Let&apos;s Build Something Meaningful</h2>

          <p className="contact-text">
            I am interested in opportunities and collaborations
            involving educational development, public administration,
            student success, data-driven operations and using educational
            technology to bridge administrative gaps.
          </p>

          <div className="contact-links">
            <a
              href="mailto:godfredmens78@gmail.com"
              className="contact-button email-button"
            >
              Email Me ↗️
            </a>

            <a
              href="https://github.com/G-TechFred"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button github-button"
            >
              GitHub Profile ↗️
            </a>

            <a
              href="https://www.linkedin.com/in/godfred-mensah1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button linkedin-button"
            >
              LinkedIn Profile ↗️
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            ©️ {new Date().getFullYear()} Godfred Mensah. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}