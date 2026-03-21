import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import {
  User, GraduationCap, Code, FolderKanban, Briefcase,
  Award, Trophy, ArrowRight, ArrowLeft, Plus, X, CheckCircle
} from 'lucide-react';
import './FormPage.css';

const STEPS = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'certifications', label: 'Certs', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
];

export default function FormPage() {
  const { state, dispatch } = useResume();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [skillInput, setSkillInput] = useState('');

  const goNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
    else navigate('/preview');
  };
  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const progressWidth = `${(currentStep / (STEPS.length - 1)) * 90}%`;

  const handlePersonalChange = (field, value) => {
    dispatch({ type: 'UPDATE_PERSONAL', payload: { [field]: value } });
  };

  const addSkill = () => {
    if (skillInput.trim() && !state.skills.includes(skillInput.trim())) {
      dispatch({ type: 'ADD_SKILL', payload: skillInput.trim() });
      setSkillInput('');
    }
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const addEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
      payload: { degree: '', institution: '', year: '', gpa: '' },
    });
  };

  const updateEducation = (index, field, value) => {
    const updated = [...state.education];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'SET_EDUCATION', payload: updated });
  };

  const addProject = () => {
    dispatch({
      type: 'ADD_PROJECT',
      payload: { title: '', description: '', techStack: '', link: '' },
    });
  };

  const updateProject = (index, field, value) => {
    const updated = [...state.projects];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'SET_PROJECTS', payload: updated });
  };

  const addExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: { role: '', company: '', startDate: '', endDate: '', responsibilities: '' },
    });
  };

  const updateExperience = (index, field, value) => {
    const updated = [...state.experience];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'SET_EXPERIENCE', payload: updated });
  };

  const addCertification = () => {
    dispatch({
      type: 'ADD_CERTIFICATION',
      payload: { name: '', issuer: '', date: '' },
    });
  };

  const updateCertification = (index, field, value) => {
    const updated = [...state.certifications];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'SET_CERTIFICATIONS', payload: updated });
  };

  const addAchievement = () => {
    dispatch({
      type: 'ADD_ACHIEVEMENT',
      payload: { title: '', description: '' },
    });
  };

  const updateAchievement = (index, field, value) => {
    const updated = [...state.achievements];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'SET_ACHIEVEMENTS', payload: updated });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return renderPersonal();
      case 1: return renderEducation();
      case 2: return renderSkills();
      case 3: return renderProjects();
      case 4: return renderExperience();
      case 5: return renderCertifications();
      case 6: return renderAchievements();
      default: return null;
    }
  };

  const renderPersonal = () => (
    <div className="form-step" key="personal">
      <h2 className="form-step-title"><User size={22} /> Personal Information</h2>
      <p className="form-step-subtitle">Tell us about yourself — this goes at the top of your resume.</p>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input className="form-input" placeholder="John Doe" value={state.personal.fullName}
            onChange={(e) => handlePersonalChange('fullName', e.target.value)} id="input-fullname" />
        </div>
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input className="form-input" placeholder="john@example.com" type="email" value={state.personal.email}
            onChange={(e) => handlePersonalChange('email', e.target.value)} id="input-email" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input className="form-input" placeholder="+1 (555) 123-4567" value={state.personal.phone}
            onChange={(e) => handlePersonalChange('phone', e.target.value)} id="input-phone" />
        </div>
        <div className="form-group">
          <label className="form-label">Location</label>
          <input className="form-input" placeholder="San Francisco, CA" value={state.personal.location}
            onChange={(e) => handlePersonalChange('location', e.target.value)} id="input-location" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">LinkedIn</label>
          <input className="form-input" placeholder="linkedin.com/in/johndoe" value={state.personal.linkedin}
            onChange={(e) => handlePersonalChange('linkedin', e.target.value)} id="input-linkedin" />
        </div>
        <div className="form-group">
          <label className="form-label">GitHub</label>
          <input className="form-input" placeholder="github.com/johndoe" value={state.personal.github}
            onChange={(e) => handlePersonalChange('github', e.target.value)} id="input-github" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Professional Summary</label>
        <textarea className="form-input" placeholder="A brief summary of your professional background, skills, and career goals..."
          value={state.personal.summary}
          onChange={(e) => handlePersonalChange('summary', e.target.value)} id="input-summary" rows={4} />
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="form-step" key="education">
      <h2 className="form-step-title"><GraduationCap size={22} /> Education</h2>
      <p className="form-step-subtitle">Add your educational background — degrees, institutions, and achievements.</p>
      {state.education.map((edu, i) => (
        <div className="repeatable-item" key={i}>
          <button className="remove-item-btn" onClick={() => dispatch({ type: 'REMOVE_EDUCATION', payload: i })}
            aria-label="Remove education">
            <X size={14} />
          </button>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Degree *</label>
              <input className="form-input" placeholder="B.S. Computer Science" value={edu.degree}
                onChange={(e) => updateEducation(i, 'degree', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Institution *</label>
              <input className="form-input" placeholder="Stanford University" value={edu.institution}
                onChange={(e) => updateEducation(i, 'institution', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Year</label>
              <input className="form-input" placeholder="2020 - 2024" value={edu.year}
                onChange={(e) => updateEducation(i, 'year', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">GPA</label>
              <input className="form-input" placeholder="3.8 / 4.0" value={edu.gpa}
                onChange={(e) => updateEducation(i, 'gpa', e.target.value)} />
            </div>
          </div>
        </div>
      ))}
      <button className="add-item-btn" onClick={addEducation} id="add-education-btn">
        <Plus size={16} /> Add Education
      </button>
    </div>
  );

  const renderSkills = () => (
    <div className="form-step" key="skills">
      <h2 className="form-step-title"><Code size={22} /> Skills</h2>
      <p className="form-step-subtitle">Add your technical and soft skills — press Enter or click Add to add each one.</p>
      <div className="skills-container">
        {state.skills.map((skill, i) => (
          <span className="skill-tag" key={i}>
            {skill}
            <button onClick={() => dispatch({ type: 'REMOVE_SKILL', payload: i })} aria-label={`Remove ${skill}`}>
              <X size={12} />
            </button>
          </span>
        ))}
      </div>
      <div className="skill-input-row">
        <input className="form-input" placeholder="e.g. React, Python, Leadership..."
          value={skillInput} onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleSkillKeyDown} id="input-skill" />
        <button className="btn btn-primary btn-sm" onClick={addSkill} id="add-skill-btn">Add</button>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="form-step" key="projects">
      <h2 className="form-step-title"><FolderKanban size={22} /> Projects</h2>
      <p className="form-step-subtitle">Showcase your best projects — include descriptions and tech stacks.</p>
      {state.projects.map((proj, i) => (
        <div className="repeatable-item" key={i}>
          <button className="remove-item-btn" onClick={() => dispatch({ type: 'REMOVE_PROJECT', payload: i })}
            aria-label="Remove project">
            <X size={14} />
          </button>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Project Title *</label>
              <input className="form-input" placeholder="Portfolio Website" value={proj.title}
                onChange={(e) => updateProject(i, 'title', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Tech Stack</label>
              <input className="form-input" placeholder="React, Node.js, MongoDB" value={proj.techStack}
                onChange={(e) => updateProject(i, 'techStack', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-input" placeholder="Brief description of the project and your role..."
              value={proj.description} onChange={(e) => updateProject(i, 'description', e.target.value)} rows={3} />
          </div>
          <div className="form-group">
            <label className="form-label">Project Link</label>
            <input className="form-input" placeholder="https://github.com/..." value={proj.link}
              onChange={(e) => updateProject(i, 'link', e.target.value)} />
          </div>
        </div>
      ))}
      <button className="add-item-btn" onClick={addProject} id="add-project-btn">
        <Plus size={16} /> Add Project
      </button>
    </div>
  );

  const renderExperience = () => (
    <div className="form-step" key="experience">
      <h2 className="form-step-title"><Briefcase size={22} /> Experience</h2>
      <p className="form-step-subtitle">Detail your professional experience — roles, companies, and key responsibilities.</p>
      {state.experience.map((exp, i) => (
        <div className="repeatable-item" key={i}>
          <button className="remove-item-btn" onClick={() => dispatch({ type: 'REMOVE_EXPERIENCE', payload: i })}
            aria-label="Remove experience">
            <X size={14} />
          </button>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Role / Title *</label>
              <input className="form-input" placeholder="Software Engineer" value={exp.role}
                onChange={(e) => updateExperience(i, 'role', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Company *</label>
              <input className="form-input" placeholder="Google" value={exp.company}
                onChange={(e) => updateExperience(i, 'company', e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input className="form-input" placeholder="Jan 2022" value={exp.startDate}
                onChange={(e) => updateExperience(i, 'startDate', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input className="form-input" placeholder="Present" value={exp.endDate}
                onChange={(e) => updateExperience(i, 'endDate', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Responsibilities</label>
            <textarea className="form-input" placeholder="Describe your key responsibilities and achievements..."
              value={exp.responsibilities} onChange={(e) => updateExperience(i, 'responsibilities', e.target.value)} rows={3} />
          </div>
        </div>
      ))}
      <button className="add-item-btn" onClick={addExperience} id="add-experience-btn">
        <Plus size={16} /> Add Experience
      </button>
    </div>
  );

  const renderCertifications = () => (
    <div className="form-step" key="certifications">
      <h2 className="form-step-title"><Award size={22} /> Certifications</h2>
      <p className="form-step-subtitle">List your professional certifications and licenses.</p>
      {state.certifications.map((cert, i) => (
        <div className="repeatable-item" key={i}>
          <button className="remove-item-btn" onClick={() => dispatch({ type: 'REMOVE_CERTIFICATION', payload: i })}
            aria-label="Remove certification">
            <X size={14} />
          </button>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Certification Name *</label>
              <input className="form-input" placeholder="AWS Solutions Architect" value={cert.name}
                onChange={(e) => updateCertification(i, 'name', e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Issuing Organization</label>
              <input className="form-input" placeholder="Amazon Web Services" value={cert.issuer}
                onChange={(e) => updateCertification(i, 'issuer', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input className="form-input" placeholder="March 2023" value={cert.date}
              onChange={(e) => updateCertification(i, 'date', e.target.value)} />
          </div>
        </div>
      ))}
      <button className="add-item-btn" onClick={addCertification} id="add-certification-btn">
        <Plus size={16} /> Add Certification
      </button>
    </div>
  );

  const renderAchievements = () => (
    <div className="form-step" key="achievements">
      <h2 className="form-step-title"><Trophy size={22} /> Achievements</h2>
      <p className="form-step-subtitle">Highlight your awards, honors, and notable achievements.</p>
      {state.achievements.map((ach, i) => (
        <div className="repeatable-item" key={i}>
          <button className="remove-item-btn" onClick={() => dispatch({ type: 'REMOVE_ACHIEVEMENT', payload: i })}
            aria-label="Remove achievement">
            <X size={14} />
          </button>
          <div className="form-group">
            <label className="form-label">Achievement Title *</label>
            <input className="form-input" placeholder="First Place — National Hackathon" value={ach.title}
              onChange={(e) => updateAchievement(i, 'title', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-input" placeholder="Brief description of the achievement..."
              value={ach.description} onChange={(e) => updateAchievement(i, 'description', e.target.value)} rows={2} />
          </div>
        </div>
      ))}
      <button className="add-item-btn" onClick={addAchievement} id="add-achievement-btn">
        <Plus size={16} /> Add Achievement
      </button>
    </div>
  );

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-header">
          <h1>Build Your <span className="gradient-text">Resume</span></h1>
          <p>Fill in your details step by step — we'll handle the formatting.</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-steps">
            <div className="progress-line" style={{ width: progressWidth }} />
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`progress-step ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
                onClick={() => setCurrentStep(i)}
              >
                <div className="progress-dot">
                  {i < currentStep ? <CheckCircle size={16} /> : i + 1}
                </div>
                <span className="progress-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="form-card" id="form-card">
          {renderStep()}
          <div className="form-nav">
            <button className="btn btn-secondary" onClick={goPrev} disabled={currentStep === 0}
              style={{ opacity: currentStep === 0 ? 0.4 : 1 }} id="form-prev-btn">
              <ArrowLeft size={16} /> Previous
            </button>
            <button className="btn btn-primary" onClick={goNext} id="form-next-btn">
              {currentStep === STEPS.length - 1 ? (
                <>Preview Resume <CheckCircle size={16} /></>
              ) : (
                <>Next Step <ArrowRight size={16} /></>
              )}
            </button>
          </div>
        </div>

        <div className="form-page-footer">
          <p>Step {currentStep + 1} of {STEPS.length} — {STEPS[currentStep].label}</p>
        </div>
      </div>
    </div>
  );
}
