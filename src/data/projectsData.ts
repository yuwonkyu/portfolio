import { ProjectData } from "../components/ProjectCard";

export const basicProjects: ProjectData[] = [
  {
    id: "basic-1",
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🌐",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "basic-2",
    title: "프로젝트 2",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "📱",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "basic-3",
    title: "프로젝트 3",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🎮",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const intermediateProjects: ProjectData[] = [
  {
    id: "intermediate-1",
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "⚛️",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "intermediate-2",
    title: "프로젝트 2",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🛒",
    technologies: ["React", "JavaScript", "API"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "intermediate-3",
    title: "프로젝트 3",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "📊",
    technologies: ["React", "Chart.js", "API"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const advancedProjects: ProjectData[] = [
  {
    id: "advanced-1",
    title: "프로젝트 1",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🌐",
    technologies: ["React", "TypeScript", "Node.js"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "advanced-2",
    title: "프로젝트 2",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "💬",
    technologies: ["React", "TypeScript", "Socket.io"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "advanced-3",
    title: "프로젝트 3",
    description: "프로젝트 설명이 들어갈 자리입니다.",
    icon: "🎯",
    technologies: ["React", "TypeScript", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const colorSchemes = {
  green: {
    bg: "bg-green-100",
    border: "border-green-200",
    titleColor: "text-green-800",
    descColor: "text-green-700",
    techBg: "bg-green-100",
    techText: "text-green-700",
    buttonBg: "bg-green-500",
    buttonHover: "hover:bg-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    border: "border-blue-200",
    titleColor: "text-blue-800",
    descColor: "text-blue-700",
    techBg: "bg-blue-100",
    techText: "text-blue-700",
    buttonBg: "bg-blue-500",
    buttonHover: "hover:bg-blue-600",
  },
  purple: {
    bg: "bg-purple-100",
    border: "border-purple-200",
    titleColor: "text-purple-800",
    descColor: "text-purple-700",
    techBg: "bg-purple-100",
    techText: "text-purple-700",
    buttonBg: "bg-purple-500",
    buttonHover: "hover:bg-purple-600",
  },
};
