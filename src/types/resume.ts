export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    location: string;
  };

  summary: string;

  skills: string[];

  experiences: unknown[];

  educations: unknown[];

  projects: unknown[];

  certifications: string[];

  languages: string[];

  customSections: unknown[];
}