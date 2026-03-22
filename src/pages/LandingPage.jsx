import { Link } from 'react-router-dom';
import {
  FileText, Sparkles, Download, Globe, Palette, Zap,
  ArrowRight, CheckCircle
} from 'lucide-react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero" id="hero-section">
        <div className="hero-bg">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              AI-Powered Resume Builder
            </div>
            <h1 className="hero-title">
              Build Your Dream<br />
              <span className="gradient-text">Resume & Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              Create a stunning, professional resume and personal portfolio in minutes.
              Just fill in your details — our AI transforms them into beautifully formatted documents.
            </p>
            <div className="hero-actions">
              <Link to="/create" className="btn btn-primary btn-lg" id="hero-cta">
                Start Building <ArrowRight size={18} />
              </Link>
              <a href="#features" className="btn btn-secondary btn-lg">
                See Features
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Templates</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">PDF</div>
                <div className="hero-stat-label">Download</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">AI</div>
                <div className="hero-stat-label">Suggestions</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="resume-anim">
              {/* Floating decorative elements */}
              <div className="resume-sparkle resume-sparkle-1">✦</div>
              <div className="resume-sparkle resume-sparkle-2">✦</div>
              <div className="resume-sparkle resume-sparkle-3">✦</div>

              {/* The resume page */}
              <div className="resume-page">
                {/* Header with avatar */}
                <div className="resume-page-header">
                  <div className="resume-avatar">
                    <span>JD</span>
                  </div>
                  <div className="resume-name-block">
                    <div className="resume-name">John Doe</div>
                    <div className="resume-role">Full Stack Developer</div>
                    <div className="resume-contact-row">
                      <span className="resume-contact-chip">📧 john@email.com</span>
                      <span className="resume-contact-chip">🔗 linkedin.com/in/john</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="resume-section resume-section-delay-1">
                  <div className="resume-section-title">Summary</div>
                  <div className="resume-text-line" style={{ width: '100%' }} />
                  <div className="resume-text-line" style={{ width: '85%' }} />
                </div>

                {/* Experience */}
                <div className="resume-section resume-section-delay-2">
                  <div className="resume-section-title">Experience</div>
                  <div className="resume-exp-entry">
                    <div className="resume-exp-role">Senior Developer — TechCorp</div>
                    <div className="resume-exp-date">2022 – Present</div>
                    <div className="resume-text-line" style={{ width: '90%' }} />
                    <div className="resume-text-line" style={{ width: '70%' }} />
                  </div>
                </div>

                {/* Skills */}
                <div className="resume-section resume-section-delay-3">
                  <div className="resume-section-title">Skills</div>
                  <div className="resume-skills-row">
                    <span className="resume-skill-tag">React</span>
                    <span className="resume-skill-tag">Node.js</span>
                    <span className="resume-skill-tag">Python</span>
                    <span className="resume-skill-tag">AWS</span>
                    <span className="resume-skill-tag">TypeScript</span>
                  </div>
                  <div className="resume-skill-bars">
                    <div className="resume-skill-bar">
                      <div className="resume-skill-bar-fill" style={{ width: '92%' }} />
                    </div>
                    <div className="resume-skill-bar">
                      <div className="resume-skill-bar-fill" style={{ width: '85%' }} />
                    </div>
                    <div className="resume-skill-bar">
                      <div className="resume-skill-bar-fill" style={{ width: '78%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Second stacked page behind */}
              <div className="resume-page-bg resume-page-bg-1" />
              <div className="resume-page-bg resume-page-bg-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="section-subtitle">
              From filling out a simple form to generating a complete portfolio — we handle it all.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={24} />
              </div>
              <h3 className="feature-title">Smart Form Builder</h3>
              <p className="feature-desc">
                Step-by-step guided form that captures your education, skills, projects, and experience effortlessly.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Palette size={24} />
              </div>
              <h3 className="feature-title">Multiple Templates</h3>
              <p className="feature-desc">
                Choose from Classic, Modern, or Minimal templates — each designed for different industries and styles.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">AI Suggestions</h3>
              <p className="feature-desc">
                Get intelligent suggestions for stronger action verbs, missing sections, and formatting improvements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Download size={24} />
              </div>
              <h3 className="feature-title">PDF Download</h3>
              <p className="feature-desc">
                Export your resume as a professional PDF with one click — ready to send to recruiters.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={24} />
              </div>
              <h3 className="feature-title">Portfolio Generator</h3>
              <p className="feature-desc">
                Automatically create a beautiful personal portfolio website from your resume data.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={24} />
              </div>
              <h3 className="feature-title">Instant Preview</h3>
              <p className="feature-desc">
                See your resume update in real-time as you type — switch templates and see changes instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">
              Three Simple <span className="gradient-text">Steps</span>
            </h2>
            <p className="section-subtitle">
              Build your professional resume and portfolio in just a few minutes.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Fill Your Details</h3>
              <p className="step-desc">
                Enter your information using our guided step-by-step form — education, skills, projects, and more.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Choose a Template</h3>
              <p className="step-desc">
                Pick from multiple professionally designed templates. Preview and switch in real-time.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Download & Share</h3>
              <p className="step-desc">
                Export your resume as a PDF and view your auto-generated portfolio page — ready to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build Your <span className="gradient-text">Perfect Resume</span>?
              </h2>
              <p className="cta-subtitle">
                Join thousands of professionals who've already created their resumes with ResumeAI.
              </p>
              <Link to="/create" className="btn btn-primary btn-lg" id="cta-button">
                Get Started Free <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2025 ResumeAI. Built with <span className="footer-heart">♥</span> for job seekers everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
