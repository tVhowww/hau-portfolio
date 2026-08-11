export interface ProfileStat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
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
  title: "Frontend Developer Intern",
  tagline:
    "Final-year Software Engineering student, focused on Frontend with ReactJS/Next.js and TailwindCSS.",
  summary:
    "I build responsive interfaces, integrate REST APIs, and manage state cleanly — a solid backend foundation helps me collaborate well within a team.",
  location: "Ho Chi Minh City, Vietnam",
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
