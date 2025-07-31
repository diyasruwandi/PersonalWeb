export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bimbel Learn Website",
    description:
      "An interactive learning platform designed to help students master school subjects with ease.",
    image: "/src/images/Screenshot 2025-05-29 214324.png",
    tags: ["HTML", "Javascript", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Parralax Website",
    description:
      "Showcasing my passion for web development through real-world projects.",
    image: "src/images/par.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Glassmorphine Website",
    description: "Glassmorphine is a sleek and modern website featuring a clean glassmorphism-inspired design with soft blur and transparency effects",
    image: "src/images/Screenshot 2025-07-01 094650.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
