export const PROFILE = {
  name: "邹雨婷",
  identity: "物联网工程专业本科生",
  careerGoal: "Java 后端 / 全栈开发实习",
  techStack: ["Java", "Spring Boot", "Vue 3", "MySQL", "Git", "Astro", "Tailwind CSS"],
  // TODO: 填写真实邮箱后，Contact 和首页联系按钮会自动启用。
  email: "1038003259@qq.com",
  // TODO: 填写完整 GitHub 主页地址，例如 https://github.com/your-name。
  github: "",
  // TODO: 填写完整 LinkedIn 主页地址。
  linkedin: "",
  // TODO: 部署前替换为正式域名，并同步修改 astro.config.mjs 与 public/robots.txt。
  siteUrl: "https://TODO-REPLACE-ME.example.com",
  resumePath: "/resume.pdf",
} as const;

export const SITE_TITLE = `${PROFILE.name}｜${PROFILE.careerGoal}`;
export const SITE_DESCRIPTION = `${PROFILE.name}的个人求职作品集，${PROFILE.identity}，正在寻找${PROFILE.careerGoal}机会。`;
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;
