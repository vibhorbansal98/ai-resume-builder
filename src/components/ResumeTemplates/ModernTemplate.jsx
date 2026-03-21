import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import './ModernTemplate.css';

export default function ModernTemplate() {
  const { state } = useResume();
  const { personal, education, skills, projects, experience, certifications, achievements } = state;

  return (
    <div className="modern-template" id="resume-modern">
      {/* Sidebar */}
      <div className="modern-sidebar">
        <h1 className="modern-sidebar-name">{personal.fullName || 'Your Name'}</h1>
        <div className="modern-sidebar-title">
          {experience.length > 0 ? experience[0].role : 'Professional'}
        </div>

        {/* Contact */}
        <div className="modern-sidebar-section">
          <h2 className="modern-sidebar-section-title">Contact</h2>
          {personal.email && (
            <div className="modern-contact-item">
              <Mail size={12} className="modern-contact-icon" /> {personal.email}
            </div>
          )}
          {personal.phone && (
            <div className="modern-contact-item">
              <Phone size={12} className="modern-contact-icon" /> {personal.phone}
            </div>
          )}
          {personal.location && (
            <div className="modern-contact-item">
              <MapPin size={12} className="modern-contact-icon" /> {personal.location}
            </div>
          )}
          {personal.linkedin && (
            <div className="modern-contact-item">
              <Linkedin size={12} className="modern-contact-icon" /> {personal.linkedin}
            </div>
          )}
          {personal.github && (
            <div className="modern-contact-item">
              <Github size={12} className="modern-contact-icon" /> {personal.github}
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="modern-sidebar-section">
            <h2 className="modern-sidebar-section-title">Skills</h2>
            <div className="modern-skills-grid">
              {skills.map((skill, i) => (
                <span className="modern-skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="modern-sidebar-section">
            <h2 className="modern-sidebar-section-title">Certifications</h2>
            {certifications.map((cert, i) => (
              <div className="modern-sidebar-cert" key={i}>
                <div className="modern-cert-name">{cert.name}</div>
                <div className="modern-cert-detail">
                  {cert.issuer}{cert.date && ` · ${cert.date}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="modern-sidebar-section">
            <h2 className="modern-sidebar-section-title">Education</h2>
            {education.map((edu, i) => (
              <div className="modern-sidebar-cert" key={i}>
                <div className="modern-cert-name">{edu.degree}</div>
                <div className="modern-cert-detail">
                  {edu.institution}{edu.year && ` · ${edu.year}`}
                </div>
                {edu.gpa && <div className="modern-cert-detail">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="modern-main">
        {/* Summary */}
        {personal.summary && (
          <div className="modern-section">
            <h2 className="modern-section-title">About Me</h2>
            <p className="modern-summary">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="modern-section">
            <h2 className="modern-section-title">Experience</h2>
            {experience.map((exp, i) => (
              <div className="modern-item" key={i}>
                <div className="modern-item-header">
                  <span className="modern-item-title">{exp.role}</span>
                  <span className="modern-item-date">{exp.startDate} — {exp.endDate}</span>
                </div>
                <div className="modern-item-subtitle">{exp.company}</div>
                {exp.responsibilities && <p className="modern-item-desc">{exp.responsibilities}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="modern-section">
            <h2 className="modern-section-title">Projects</h2>
            {projects.map((proj, i) => (
              <div className="modern-item" key={i}>
                <div className="modern-item-title">{proj.title}</div>
                {proj.description && <p className="modern-item-desc">{proj.description}</p>}
                {proj.techStack && <div className="modern-item-tech">{proj.techStack}</div>}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="modern-section">
            <h2 className="modern-section-title">Achievements</h2>
            {achievements.map((ach, i) => (
              <div className="modern-achievement-item" key={i}>
                <div className="modern-ach-title">{ach.title}</div>
                {ach.description && <p className="modern-ach-desc">{ach.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
