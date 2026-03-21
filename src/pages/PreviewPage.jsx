import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import ClassicTemplate from '../components/ResumeTemplates/ClassicTemplate';
import ModernTemplate from '../components/ResumeTemplates/ModernTemplate';
import MinimalTemplate from '../components/ResumeTemplates/MinimalTemplate';
import AISuggestions from '../components/AISuggestions';
import {
  Download, Eye, Edit3, Globe, X, Maximize2
} from 'lucide-react';
import './PreviewPage.css';

const templates = {
  classic: { name: 'Classic', component: ClassicTemplate },
  modern: { name: 'Modern', component: ModernTemplate },
  minimal: { name: 'Minimal', component: MinimalTemplate },
};

export default function PreviewPage() {
  const { state, dispatch } = useResume();
  const [fullscreen, setFullscreen] = useState(false);
  const resumeRef = useRef(null);

  const selectedTemplate = state.selectedTemplate || 'modern';
  const TemplateComponent = templates[selectedTemplate].component;

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: 0,
      filename: `${state.personal.fullName || 'resume'}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="preview-page">
      <div className="container">
        <div className="preview-header">
          <h1>Preview Your <span className="gradient-text">Resume</span></h1>
          <p>Choose a template and download your professional resume.</p>
        </div>

        {/* Template Selector */}
        <div className="template-selector" id="template-selector">
          {Object.entries(templates).map(([key, tmpl]) => (
            <button
              key={key}
              className={`template-option ${selectedTemplate === key ? 'active' : ''}`}
              onClick={() => dispatch({ type: 'SET_TEMPLATE', payload: key })}
              id={`template-${key}`}
            >
              <span className={`template-dot ${key}`} />
              {tmpl.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="preview-actions">
          <button className="btn btn-primary" onClick={() => setFullscreen(true)} id="preview-resume-btn">
            <Eye size={16} /> Preview Resume
          </button>
          <button className="btn btn-primary" onClick={handleDownloadPDF} id="download-resume-btn">
            <Download size={16} /> Download PDF
          </button>
          <Link to="/create" className="btn btn-secondary" id="edit-resume-btn">
            <Edit3 size={16} /> Edit Resume
          </Link>
          <Link to="/portfolio" className="btn btn-secondary" id="view-portfolio-btn">
            <Globe size={16} /> View Portfolio
          </Link>
        </div>

        {/* Layout: Resume + AI Sidebar */}
        <div className="preview-layout">
          <div className="preview-main">
            <div className="resume-container">
              <div className="resume-wrapper" ref={resumeRef}>
                <TemplateComponent />
              </div>
            </div>
          </div>

          <div className="preview-sidebar">
            <AISuggestions />
          </div>
        </div>
      </div>

      {/* Fullscreen Preview */}
      {fullscreen && (
        <div className="preview-fullscreen" id="fullscreen-preview">
          <div className="fullscreen-header">
            <span className="fullscreen-title">Resume Preview — {templates[selectedTemplate].name} Template</span>
            <button className="fullscreen-close" onClick={() => setFullscreen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="fullscreen-body">
            <div className="resume-wrapper">
              <TemplateComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
