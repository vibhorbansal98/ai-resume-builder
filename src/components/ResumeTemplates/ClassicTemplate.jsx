import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './ClassicTemplate.css';

export default function ClassicTemplate() {
  const { state } = useResume();
  const { personal, education, skills, projects, experience, certifications, achievements } = state;

  return (
    <div className="classic-template" id="resume-classic">
      {/* Header */}
      <div className="classic-header">
        <h1 className="classic-name">{personal.fullName || 'Your Name'}</h1>
        <div className="classic-contact">
          {personal.email && <span><Mail size={11} /> {personal.email}</span>}
          {personal.phone && <span><Phone size={11} /> {personal.phone}</span>}
          {personal.location && <span><MapPin size={11} /> {personal.location}</span>}
          {personal.linkedin && <span><Linkedin size={11} /> {personal.linkedin}</span>}
          {personal.github && <span><Github size={11} /> {personal.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {personal.summary && (
        <div className="classic-section">
          <h2 className="classic-section-title">Professional Summary</h2>
          <p className="classic-summary">{personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Experience</h2>
          {experience.map((exp, i) => (
            <div className="classic-item" key={i}>
              <div className="classic-item-header">
                <span className="classic-item-title">{exp.role}</span>
                <span className="classic-item-date">{exp.startDate} — {exp.endDate}</span>
              </div>
              <div className="classic-item-subtitle">{exp.company}</div>
              {exp.responsibilities && <p className="classic-item-desc">{exp.responsibilities}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Education</h2>
          {education.map((edu, i) => (
            <div className="classic-item" key={i}>
              <div className="classic-item-header">
                <span className="classic-item-title">{edu.degree}</span>
                <span className="classic-item-date">{edu.year}</span>
              </div>
              <div className="classic-item-subtitle">
                {edu.institution}{edu.gpa && ` — GPA: ${edu.gpa}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Skills</h2>
          <div className="classic-skills-list">
            {skills.map((skill, i) => (
              <span className="classic-skill" key={i}>{skill}</span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Projects</h2>
          {projects.map((proj, i) => (
            <div className="classic-item" key={i}>
              <div className="classic-item-title">{proj.title}</div>
              {proj.techStack && <div className="classic-item-subtitle">Tech: {proj.techStack}</div>}
              {proj.description && <p className="classic-item-desc">{proj.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Certifications</h2>
          {certifications.map((cert, i) => (
            <div className="classic-cert-item" key={i}>
              <span className="classic-cert-name">{cert.name}</span>
              {cert.issuer && <span className="classic-cert-issuer"> — {cert.issuer}</span>}
              {cert.date && <span className="classic-item-date"> ({cert.date})</span>}
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="classic-section">
          <h2 className="classic-section-title">Achievements</h2>
          {achievements.map((ach, i) => (
            <div className="classic-achievement-item" key={i}>
              <div className="classic-item-title">{ach.title}</div>
              {ach.description && <p className="classic-item-desc">{ach.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
