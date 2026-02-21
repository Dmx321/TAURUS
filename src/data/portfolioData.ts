import { Project, ProcessStep } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Inclusive Branding for 'EcoPath'",
    category: "Branding & Accessibility",
    image: "https://picsum.photos/seed/ecopath/800/600",
    description: "A high-contrast, screen-reader-friendly identity for an environmental non-profit focused on urban trail accessibility."
  },
  {
    id: "2",
    title: "GovPortal Redesign",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/gov/800/600",
    description: "Applying Google's Material Design 3 principles to a complex local government tax filing portal, reducing filing time by 40%."
  },
  {
    id: "3",
    title: "The 360° Launch: 'Aura'",
    category: "Cross-Platform Campaign",
    image: "https://picsum.photos/seed/aura/800/600",
    description: "A comprehensive campaign spanning digital ads, interactive landing pages, and physical sustainable packaging."
  },
  {
    id: "4",
    title: "Climate Pulse Dashboard",
    category: "Data Visualization",
    image: "https://picsum.photos/seed/data/800/600",
    description: "Turning complex global temperature anomalies into an intuitive, beautiful interactive dashboard for policy makers."
  }
];

export const PROCESS_STEPS: (Omit<ProcessStep, 'icon'> & { iconName: 'Accessibility' | 'Layout' | 'BarChart3' | 'Share2' })[] = [
  {
    title: "The Challenge",
    description: "Defining the core problem. Who are we solving for? What are the constraints?",
    iconName: 'Accessibility'
  },
  {
    title: "The Research",
    description: "Deep dives into user behavior, mood boards, and 'messy' ideation to find the right path.",
    iconName: 'Layout'
  },
  {
    title: "The Solution",
    description: "Crafting high-fidelity, accessible designs that bridge the gap between beauty and utility.",
    iconName: 'BarChart3'
  },
  {
    title: "The Impact",
    description: "Measuring success. How did the design change the user experience or business goals?",
    iconName: 'Share2'
  }
];
