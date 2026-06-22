export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  location: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string[];
}

export interface Education {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
  cgpa: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  projects: unknown[];
  certifications: string[];
  languages: string[];
  customSections: unknown[];
}