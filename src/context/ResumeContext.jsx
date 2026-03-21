import { createContext, useContext, useReducer } from 'react';

const ResumeContext = createContext();

const initialState = {
  personal: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
    summary: '',
  },
  education: [],
  skills: [],
  projects: [],
  experience: [],
  certifications: [],
  achievements: [],
  selectedTemplate: 'modern',
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case 'SET_EDUCATION':
      return { ...state, education: action.payload };
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, action.payload] };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter((_, i) => i !== action.payload) };
    case 'SET_SKILLS':
      return { ...state, skills: action.payload };
    case 'ADD_SKILL':
      return { ...state, skills: [...state.skills, action.payload] };
    case 'REMOVE_SKILL':
      return { ...state, skills: state.skills.filter((_, i) => i !== action.payload) };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'REMOVE_PROJECT':
      return { ...state, projects: state.projects.filter((_, i) => i !== action.payload) };
    case 'SET_EXPERIENCE':
      return { ...state, experience: action.payload };
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, action.payload] };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter((_, i) => i !== action.payload) };
    case 'SET_CERTIFICATIONS':
      return { ...state, certifications: action.payload };
    case 'ADD_CERTIFICATION':
      return { ...state, certifications: [...state.certifications, action.payload] };
    case 'REMOVE_CERTIFICATION':
      return { ...state, certifications: state.certifications.filter((_, i) => i !== action.payload) };
    case 'SET_ACHIEVEMENTS':
      return { ...state, achievements: action.payload };
    case 'ADD_ACHIEVEMENT':
      return { ...state, achievements: [...state.achievements, action.payload] };
    case 'REMOVE_ACHIEVEMENT':
      return { ...state, achievements: state.achievements.filter((_, i) => i !== action.payload) };
    case 'SET_TEMPLATE':
      return { ...state, selectedTemplate: action.payload };
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}

export default ResumeContext;
