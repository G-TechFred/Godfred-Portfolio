import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Godfred Mensah</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <div className="eyebrow">Professional Portfolio</div>
          <h1>
            Management Research & Evaluation <span>& Data Technology</span>
          </h1>
          <p className="hero-description">
            Education and management professional with experience in administration, research, data analysis, project coordination, and technology-enabled process improvement.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="button primary">Explore Projects</a>
            <a href="#contact" className="button secondary">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="eyebrow">Experience</div>
          <h2>Professional background</h2>
          <div className="cards two-cards">
            <div className="card">
              <span className="card-label">Controller & Accountant-General's Department</span>
              <h3>Administrative Analyst</h3>
              <p>
                Worked within the Pensions Computation Unit, applying quantitative analysis and Power BI to pension calculations and financial reporting. Managed digital records and tracking systems for 120+ vital records, supporting accuracy, consistency, and administrative efficiency.
              </p>
            </div>
            <div className="card">
              <span className="card-label">Oye Ride</span>
              <h3>Growth Marketing Lead</h3>
              <p>
                Developed and managed digital campaigns while monitoring engagement and conversion metrics to scale user acquisition and brand visibility.
              </p>
            </div>
            <div className="card">
              <span className="card-label">Omega School</span>
              <h3>ICT Tutor</h3>
              <p>
                Provided structured instructional background in Information and Communication Technology, fostering digital literacy and foundational tech skills for students.
              </p>
            </div>
            <div className="card">
              <span className="card-label">University of Cape Coast</span>
              <h3>Research Team Lead</h3>
              <p>
                Led an undergraduate thesis investigating business management teacher and student engagement dynamics, successfully completed in 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section light-section">
        <div className="container">
          <div className="eyebrow">Innovation</div>
          <h2>Featured development project</h2>
          <div className="featured-project">
            <div className="project-status">In Progress • Active Build</div>
            <h3>Automated Student Performance Tracker</h3>
            <p>
              Designing a comprehensive tracking application tailored to align seamlessly with the Ghana Education Service grading framework, built using modern web architectures.
            </p>
            <div className="technology-list">
              <span>React</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>Supabase</span>
              <span>VS Code</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="eyebrow">Expertise</div>
          <h2>Technical & analytical stack</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Data & Analytics</h3>
              <p>Python, SQL/MySQL, Tableau, Power BI, quantitative data evaluation, and financial reporting.</p>
            </div>
            <div className="skill-group">
              <h3>Web Development</h3>
              <p>React, TypeScript, Tailwind CSS, Supabase, Git, GitHub, and modern component design.</p>
            </div>
            <div className="skill-group">
              <h3>Management & Research</h3>
              <p>Administrative workflows, process tracking, educational coordination, and academic research leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section light-section">
        <div className="container">
          <div className="eyebrow">Connect</div>
          <h2>Let's build something exceptional together.</h2>
          <p className="contact-text">
            Whether you are looking to discuss management research, data technology solutions, or graduate opportunities, my inbox is always open.
          </p>
          <div className="contact-links">
            <a href="mailto:godfred@example.com">Send Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Network</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2026 Godfred Mensah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}