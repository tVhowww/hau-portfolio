// --- Home page data ---

export interface ProfileStat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  birthdate: string;
  gender: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  avatar: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  cvUrl: string;
  stats: ProfileStat[];
}

export const profile: Profile = {
  name: "Nguyen Trung Hau",
  birthdate: "2004",
  gender: "Male",
  title: "Frontend Developer Intern",
  tagline:
    "Final-year Software Engineering student, focused on Frontend with ReactJS/Next.js and TailwindCSS.",
  summary:
    "I build responsive interfaces, integrate REST APIs, and manage state cleanly — a solid backend foundation helps me collaborate well within a team.",
  location: "Go Vap, Ho Chi Minh City, Vietnam",
  avatar: "/avatar.png",
  email: "nguyentrunghau7746@gmail.com",
  phone: "0384 358 560",
  github: "github.com/tVhowww",
  githubUrl: "https://github.com/tVhowww",
  cvUrl: "/CV_Frontend_NguyenTrungHau.pdf",
  stats: [
    { label: "GPA", value: "3.36/4.00" },
    { label: "TOEIC", value: "740/990" },
    { label: "Featured Projects", value: "03" },
  ],
};

// --- Resume page data ---

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export const objective: string[] = [
  "Looking for a Frontend Internship to build dynamic and accessible user interfaces using ReactJS, TypeScript, and TailwindCSS.",
  "Leveraging my solid foundation in RESTful APIs to ensure smooth frontend-backend integration and robust error handling.",
  "Dedicated to writing clean, maintainable code and continuously improving my skills in UI performance optimization.",
];

export const education: EducationItem[] = [
  {
    school: "Industrial University of Ho Chi Minh City",
    degree: "B.Eng. in Software Engineering",
    period: "Sept 2022 – Mar 2027 (Expected)",
    details: [
      "GPA: 3.36 / 4.00",
      "Academic Excellence Scholarship: 2022, 2024",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Alo Chat",
    role: "Fullstack Developer (Team of 5)",
    period: "Jan 2026 – Jun 2026",
    details: [
      "Contributed to gateway routing, Eureka service discovery, RabbitMQ events, Redis caching and Socket.io real-time communication.",
      "Built admin/moderation features: user management, ban/unban, group moderation, report review, global broadcast.",
      "Implemented real-time chat features (typing indicators, presence, auto-reconnect) on both Web and Mobile using Zustand + socket.io-client.",
    ],
  },
  {
    company: "FinTrack Pro",
    role: "Fullstack Developer (Personal project)",
    period: "Dec 2025 – May 2026",
    details: [
      "Built the frontend dashboard with Next.js (App Router), TailwindCSS, Recharts and React Query for state sync and client-side caching.",
      "Architected a 6-service Spring Cloud system (Identity, Wallet, Transaction, Notification, Gateway, Eureka), secured with HttpOnly JWT cookies, token rotation and Google OAuth2.",
      "Implemented Kafka Saga, Transactional Outbox/Inbox patterns with Redis distributed locks for zero data loss during cross-wallet transfers.",
      "Integrated Google Gemini (Spring AI) to auto-parse receipts and power a financial advisor chatbot.",
    ],
  },
  {
    company: "WatchStore Website",
    role: "Fullstack Developer (Team of 6)",
    period: "Sept 2025 – Dec 2025",
    details: [
      "Developed 18+ Spring Boot REST controllers (Products, Categories, Suppliers, Inventory).",
      "Implemented product filtering/pagination, VNPay payment integration and client-side Cloudinary media upload.",
      "Built ReactJS customer flows (cart, checkout, search) and modular admin panels using React Router DOM.",
    ],
  },
];
