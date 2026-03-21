import { Link } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import {
  User, Code, FolderKanban, Briefcase, Mail, Phone, MapPin,
  Linkedin, Github, ExternalLink, ArrowRight, FileText
} from 'lucide-react';
import './PortfolioPage.css';

export default function PortfolioPage() {
  const { state } = useResume();
  const { personal, education, skills, projects, experience, certifications, achievements } = state;

  const hasContent = personal.fullName || skills.length > 0 || projects.length > 0 || experience.length > 0;

  if (!hasContent) {
    return (
      <div className="portfolio-page">
        <div className="container portfolio-empty">
          <div className="portfolio-empty-icon">
            <FileText size={64} />
          </div>
          <h2>No Portfolio Data Yet</h2>
          <p>Fill in your resume details first to auto-generate your portfolio.</p>
          <Link to="/create" className="btn btn-primary btn-lg">
            Create Resume <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-avatar">{getInitials(personal.fullName)}</div>
          <h1 className="portfolio-name">
            {personal.fullName || 'Your Name'}
          </h1>
          <p className="portfolio-title">
            {experience.length > 0 ? experience[0].role : 'Professional'}
            {experience.length > 0 && experience[0].company ? ` at ${experience[0].company}` : ''}
          </p>
          <div className="portfolio-social">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="portfolio-social-link" title="Email">
                <Mail size={20} />
              </a>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`}
                target="_blank" rel="noopener noreferrer" className="portfolio-social-link" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            )}
            {personal.github && (
              <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
                target="_blank" rel="noopener noreferrer" className="portfolio-social-link" title="GitHub">
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* About */}
      {personal.summary && (
        <section className="portfolio-section">
          <div className="container">
            <h2 className="portfolio-section-title">
              <User size={22} className="gradient-text" /> About Me
            </h2>
            <p className="portfolio-about-text">{personal.summary}</p>
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="portfolio-section">
          <div className="container">
            <h2 className="portfolio-section-title">
              <Code size={22} className="gradient-text" /> Skills
            </h2>
            <p className="portfolio-section-subtitle">Technologies and tools I work with</p>
            <div className="portfolio-skills-grid">
              {skills.map((skill, i) => (
                <div className="portfolio-skill-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="portfolio-skill-name">{skill}</div>
                  <div className="portfolio-skill-bar">
                    <div
                      className="portfolio-skill-fill"
                      style={{ width: `${70 + Math.random() * 30}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="portfolio-section">
          <div className="container">
            <h2 className="portfolio-section-title">
              <FolderKanban size={22} className="gradient-text" /> Projects
            </h2>
            <p className="portfolio-section-subtitle">Selected work and personal projects</p>
            <div className="portfolio-projects-grid">
              {projects.map((proj, i) => (
                <div className="portfolio-project-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="portfolio-project-header">
                    <h3 className="portfolio-project-title">{proj.title}</h3>
                    {proj.techStack && <div className="portfolio-project-tech">{proj.techStack}</div>}
                  </div>
                  <div className="portfolio-project-body">
                    {proj.description && <p className="portfolio-project-desc">{proj.description}</p>}
                    {proj.link && (
                      <a href={proj.link.startsWith('http') ? proj.link : `https://${proj.link}`}
                        target="_blank" rel="noopener noreferrer" className="portfolio-project-link">
                        View Project <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="portfolio-section">
          <div className="container">
            <h2 className="portfolio-section-title">
              <Briefcase size={22} className="gradient-text" /> Experience
            </h2>
            <p className="portfolio-section-subtitle">My professional journey</p>
            <div className="portfolio-timeline">
              {experience.map((exp, i) => (
                <div className="portfolio-timeline-item" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="portfolio-timeline-dot" />
                  <div className="portfolio-timeline-date">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <h3 className="portfolio-timeline-role">{exp.role}</h3>
                  <div className="portfolio-timeline-company">{exp.company}</div>
                  {exp.responsibilities && (
                    <p className="portfolio-timeline-desc">{exp.responsibilities}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="portfolio-section">
        <div className="container">
          <h2 className="portfolio-section-title">
            <Mail size={22} className="gradient-text" /> Get in Touch
          </h2>
          <p className="portfolio-section-subtitle">Feel free to reach out</p>
          <div className="portfolio-contact-grid">
            {personal.email && (
              <a href={`mailto:${personal.email}`} className="portfolio-contact-card">
                <div className="portfolio-contact-icon"><Mail size={20} /></div>
                <div>
                  <div className="portfolio-contact-label">Email</div>
                  <div className="portfolio-contact-value">{personal.email}</div>
                </div>
              </a>
            )}
            {personal.phone && (
              <div className="portfolio-contact-card">
                <div className="portfolio-contact-icon"><Phone size={20} /></div>
                <div>
                  <div className="portfolio-contact-label">Phone</div>
                  <div className="portfolio-contact-value">{personal.phone}</div>
                </div>
              </div>
            )}
            {personal.location && (
              <div className="portfolio-contact-card">
                <div className="portfolio-contact-icon"><MapPin size={20} /></div>
                <div>
                  <div className="portfolio-contact-label">Location</div>
                  <div className="portfolio-contact-value">{personal.location}</div>
                </div>
              </div>
            )}
            {personal.linkedin && (
              <a href={personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`}
                target="_blank" rel="noopener noreferrer" className="portfolio-contact-card">
                <div className="portfolio-contact-icon"><Linkedin size={20} /></div>
                <div>
                  <div className="portfolio-contact-label">LinkedIn</div>
                  <div className="portfolio-contact-value">{personal.linkedin}</div>
                </div>
              </a>
            )}
            {personal.github && (
              <a href={personal.github.startsWith('http') ? personal.github : `https://${personal.github}`}
                target="_blank" rel="noopener noreferrer" className="portfolio-contact-card">
                <div className="portfolio-contact-icon"><Github size={20} /></div>
                <div>
                  <div className="portfolio-contact-label">GitHub</div>
                  <div className="portfolio-contact-value">{personal.github}</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <p className="portfolio-footer-text">
            © {new Date().getFullYear()} {personal.fullName || 'Portfolio'}. Built with ResumeAI.
          </p>
        </div>
      </footer>
    </div>
  );
}
