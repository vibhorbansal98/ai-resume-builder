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
            <div className="hero-mockup">
              <div className="mockup-header">
                <span className="mockup-dot" />
                <span className="mockup-dot" />
                <span className="mockup-dot" />
              </div>
              <div className="mockup-body">
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
                <div className="mockup-line" />
              </div>
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
