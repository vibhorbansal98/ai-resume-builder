import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './MinimalTemplate.css';

export default function MinimalTemplate() {
  const { state } = useResume();
  const { personal, education, skills, projects, experience, certifications, achievements } = state;

  return (
    <div className="minimal-template" id="resume-minimal">
      {/* Header */}
      <div className="minimal-header">
        <h1 className="minimal-name">{personal.fullName || 'Your Name'}</h1>
        <div className="minimal-contact">
          {personal.email && <span><Mail size={11} /> {personal.email}</span>}
          {personal.phone && <span><Phone size={11} /> {personal.phone}</span>}
          {personal.location && <span><MapPin size={11} /> {personal.location}</span>}
          {personal.linkedin && <span><Linkedin size={11} /> {personal.linkedin}</span>}
          {personal.github && <span><Github size={11} /> {personal.github}</span>}
        </div>
      </div>

      <div className="minimal-divider" />

      {/* Summary */}
      {personal.summary && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Summary</h2>
            <p className="minimal-summary">{personal.summary}</p>
          </div>
          <div className="minimal-divider" />
        </>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Experience</h2>
            {experience.map((exp, i) => (
              <div className="minimal-item" key={i}>
                <div className="minimal-item-header">
                  <span className="minimal-item-title">{exp.role}</span>
                  <span className="minimal-item-date">{exp.startDate} — {exp.endDate}</span>
                </div>
                <div className="minimal-item-subtitle">{exp.company}</div>
                {exp.responsibilities && <p className="minimal-item-desc">{exp.responsibilities}</p>}
              </div>
            ))}
          </div>
          <div className="minimal-divider" />
        </>
      )}

      {/* Education */}
      {education.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Education</h2>
            {education.map((edu, i) => (
              <div className="minimal-item" key={i}>
                <div className="minimal-item-header">
                  <span className="minimal-item-title">{edu.degree}</span>
                  <span className="minimal-item-date">{edu.year}</span>
                </div>
                <div className="minimal-item-subtitle">
                  {edu.institution}{edu.gpa && ` · GPA: ${edu.gpa}`}
                </div>
              </div>
            ))}
          </div>
          <div className="minimal-divider" />
        </>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Skills</h2>
            <div className="minimal-skills-row">
              {skills.map((skill, i) => (
                <span className="minimal-skill" key={i}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="minimal-divider" />
        </>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <>
          <div className="minimal-section">
            <h2 className="minimal-section-title">Projects</h2>
            {projects.map((proj, i) => (
              <div className="minimal-item" key={i}>
                <div className="minimal-item-title">{proj.title}</div>
                {proj.description && <p className="minimal-item-desc">{proj.description}</p>}
                {proj.techStack && <div className="minimal-item-tech">{proj.techStack}</div>}
              </div>
            ))}
          </div>
          <div className="minimal-divider" />
        </>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="minimal-section">
          <h2 className="minimal-section-title">Certifications</h2>
          {certifications.map((cert, i) => (
            <div className="minimal-cert-item" key={i}>
              <span className="minimal-cert-name">{cert.name}</span>
              <span className="minimal-cert-detail">
                {cert.issuer}{cert.date && ` · ${cert.date}`}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="minimal-section">
          <h2 className="minimal-section-title">Achievements</h2>
          {achievements.map((ach, i) => (
            <div className="minimal-ach-item" key={i}>
              <div className="minimal-ach-title">{ach.title}</div>
              {ach.description && <p className="minimal-ach-desc">{ach.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
