export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", level: 88 },
      { name: "Next.js", level: 70 },
      { name: "TypeScript / JavaScript", level: 80 },
      { name: "TailwindCSS", level: 88 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "React Native", level: 70 },
      { name: "Zustand / React Query", level: 78 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Java (Spring Boot)", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "REST APIs / JWT", level: 82 },
      { name: "JPA / Hibernate", level: 72 },
    ],
  },
  {
    category: "Data & Messaging",
    skills: [
      { name: "PostgreSQL / MariaDB", level: 76 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 68 },
      { name: "Kafka / RabbitMQ", level: 66 },
      { name: "Socket.io", level: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 68 },
      { name: "Postman / Swagger", level: 80 },
      { name: "Figma", level: 60 },
      { name: "Jira / Agile Scrum", level: 75 },
    ],
  },
];

export const softSkills = [
  {
    name: "Teamwork",
    desc: "Collaborated in teams of 5–6 people using Agile/Scrum.",
  },
  {
    name: "Technical Communication",
    desc: "Presenting solutions, code reviews and writing API documentation.",
  },
  {
    name: "Self-learning",
    desc: "Proactively picking up new frameworks through docs and real projects.",
  },
  {
    name: "Time Management",
    desc: "Balancing group assignments, personal projects and coursework.",
  },
  {
    name: "Problem Solving",
    desc: "Breaking large problems into small, measurable tasks.",
  },
];

export const languages = [
  { name: "Vietnamese", level: "Native" },
  {
    name: "English",
    level: "TOEIC 740/990 — good technical reading comprehension",
  },
];
