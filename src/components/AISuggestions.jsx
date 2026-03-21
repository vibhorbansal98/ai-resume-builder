import { useState, useMemo } from 'react';
import { useResume } from '../context/ResumeContext';
import { Sparkles, ChevronDown, Lightbulb, AlertCircle, Zap, CheckCircle } from 'lucide-react';
import './AISuggestions.css';

const WEAK_VERBS = ['did', 'made', 'worked', 'helped', 'got', 'went', 'was', 'used', 'had'];
const STRONG_VERBS = {
  did: 'Executed', made: 'Developed', worked: 'Collaborated',
  helped: 'Facilitated', got: 'Acquired', went: 'Transitioned',
  was: 'Served as', used: 'Leveraged', had: 'Managed'
};

const COMMON_SKILL_PAIRS = {
  'React': ['TypeScript', 'Next.js', 'Redux', 'Tailwind CSS'],
  'Python': ['Django', 'Flask', 'FastAPI', 'NumPy'],
  'JavaScript': ['TypeScript', 'Node.js', 'React', 'Vue.js'],
  'Node.js': ['Express', 'MongoDB', 'PostgreSQL', 'REST API'],
  'Java': ['Spring Boot', 'Hibernate', 'Maven', 'JUnit'],
  'AWS': ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  'Docker': ['Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  'SQL': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
};

export default function AISuggestions() {
  const { state, dispatch } = useResume();
  const [isOpen, setIsOpen] = useState(true);
  const [appliedIds, setAppliedIds] = useState(new Set());

  const suggestions = useMemo(() => {
    const items = [];

    // Missing sections
    if (!state.personal.summary) {
      items.push({
        id: 'missing-summary',
        type: 'missing',
        label: 'Add a Professional Summary',
        desc: 'Resumes with summaries are 36% more likely to get callbacks. Go back to Step 1 and add a brief summary.',
      });
    }

    if (state.education.length === 0) {
      items.push({
        id: 'missing-education',
        type: 'missing',
        label: 'Add Education',
        desc: 'Most employers expect to see your educational background. Add at least one entry.',
      });
    }

    if (state.skills.length === 0) {
      items.push({
        id: 'missing-skills',
        type: 'missing',
        label: 'Add Skills',
        desc: 'Skills help ATS systems match your resume to job descriptions. Add your key skills.',
      });
    }

    if (state.experience.length === 0 && state.projects.length === 0) {
      items.push({
        id: 'missing-experience',
        type: 'missing',
        label: 'Add Experience or Projects',
        desc: 'Include professional experience or projects to showcase your abilities.',
      });
    }

    // Weak verbs in experience
    state.experience.forEach((exp, i) => {
      if (exp.responsibilities) {
        const words = exp.responsibilities.toLowerCase().split(/\s+/);
        const found = words.filter(w => WEAK_VERBS.includes(w));
        if (found.length > 0) {
          const replacements = found.map(w => `"${w}" → "${STRONG_VERBS[w]}"`).join(', ');
          items.push({
            id: `weak-verb-${i}`,
            type: 'improve',
            label: `Strengthen Verbs in "${exp.role || 'Experience'}"`,
            desc: `Replace weak verbs with action verbs: ${replacements}`,
            action: () => {
              let text = exp.responsibilities;
              found.forEach(w => {
                const regex = new RegExp(`\\b${w}\\b`, 'gi');
                text = text.replace(regex, STRONG_VERBS[w]);
              });
              const updated = [...state.experience];
              updated[i] = { ...updated[i], responsibilities: text };
              dispatch({ type: 'SET_EXPERIENCE', payload: updated });
            },
          });
        }
      }
    });

    // Short summary
    if (state.personal.summary && state.personal.summary.length < 50) {
      items.push({
        id: 'short-summary',
        type: 'improve',
        label: 'Expand Your Summary',
        desc: 'Your summary is quite short. Aim for 2-3 sentences describing your background, key skills, and career goals.',
      });
    }

    // Skill pairs suggestion
    state.skills.forEach(skill => {
      const pairs = COMMON_SKILL_PAIRS[skill];
      if (pairs) {
        const missing = pairs.filter(p => !state.skills.includes(p));
        if (missing.length > 0) {
          items.push({
            id: `skill-pair-${skill}`,
            type: 'tip',
            label: `Skills Related to ${skill}`,
            desc: `Consider adding: ${missing.slice(0, 3).join(', ')}`,
            action: () => {
              missing.slice(0, 2).forEach(s => {
                dispatch({ type: 'ADD_SKILL', payload: s });
              });
            },
          });
        }
      }
    });

    // LinkedIn/GitHub missing
    if (!state.personal.linkedin && !state.personal.github) {
      items.push({
        id: 'missing-links',
        type: 'tip',
        label: 'Add LinkedIn or GitHub',
        desc: 'Professional links boost credibility. Add your LinkedIn profile or GitHub to stand out.',
      });
    }

    return items;
  }, [state]);

  const handleApply = (suggestion) => {
    if (suggestion.action) {
      suggestion.action();
    }
    setAppliedIds(prev => new Set([...prev, suggestion.id]));
  };

  const iconMap = {
    improve: <Zap size={16} />,
    missing: <AlertCircle size={16} />,
    tip: <Lightbulb size={16} />,
  };

  return (
    <div className="ai-suggestions" id="ai-suggestions-panel">
      <div className="ai-suggestions-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="ai-suggestions-title">
          <Sparkles size={18} />
          AI Suggestions
          {suggestions.length > 0 && <span className="ai-badge">{suggestions.length}</span>}
        </div>
        <ChevronDown size={18} className={`ai-toggle-icon ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <div className="ai-suggestions-body">
          {suggestions.length === 0 ? (
            <div className="ai-no-suggestions">
              <CheckCircle size={24} />
              <p>Your resume looks great! No suggestions at this time.</p>
            </div>
          ) : (
            suggestions.map(s => (
              <div
                key={s.id}
                className={`ai-suggestion-card ${appliedIds.has(s.id) ? 'applied' : ''}`}
                onClick={() => handleApply(s)}
              >
                <div className={`ai-suggestion-icon ${s.type}`}>
                  {iconMap[s.type]}
                </div>
                <div className="ai-suggestion-text">
                  <div className="ai-suggestion-label">{s.label}</div>
                  <div className="ai-suggestion-desc">{s.desc}</div>
                  {s.action && !appliedIds.has(s.id) && (
                    <span className="ai-suggestion-apply">Click to apply →</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
