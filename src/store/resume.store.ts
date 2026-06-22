import { create } from "zustand";
import { ResumeData } from "@/types/resume";

interface ResumeStore {
  resume: ResumeData;
  setResume: (resume: ResumeData) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: {
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      portfolio: "",
      location: "",
    },
    summary: "",
    skills: [],
    experiences: [],
    educations: [],
    projects: [],
    certifications: [],
    languages: [],
    customSections: [],
  },

  setResume: (resume) => set({ resume }),
}));