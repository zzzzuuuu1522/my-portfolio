export interface Project {
  id: string;
  title: string;
  status: string;
  type?: string;
  description: string;
  techStack: string[];
  coreFeatures?: string[];
  completedItems?: string[];
  plannedItems?: string[];
  responsibility?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "studyflow",
    title: "StudyFlow 学习任务管理系统",
    status: "已完成",
    type: "全栈练习项目",
    description:
      "面向个人学习计划管理的全栈应用，支持学习任务规划、状态跟踪、优先级管理、学习时长记录与数据统计。",
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Web",
      "Spring Data JPA",
      "MySQL 8",
      "Vue 3",
      "Vite",
      "JavaScript",
      "CSS",
      "JUnit 5",
      "Mockito",
      "MockMvc",
    ],
    coreFeatures: [
      "学习任务的新增、查询、编辑和删除",
      "按未开始、进行中、已完成筛选任务",
      "高、中、低优先级管理与筛选",
      "学习记录的新增、查询、编辑和删除",
      "按任务与日期范围筛选学习记录",
      "今日、本周、本月学习时长统计",
      "最近 7 天学习时长柱状图",
      "按学习分钟数排序的任务排行",
      "删除任务时同步删除关联学习记录",
      "参数校验与统一 JSON 异常响应",
    ],
    responsibility: "独立完成前后端基础功能实现、数据库设计、接口联调、测试与项目文档整理",
    githubUrl: "https://github.com/zzzzuuuu1522/studyflow",
    featured: true,
  },
  {
    id: "portfolio",
    title: "个人作品集网站",
    status: "开发中",
    description: "用于展示个人学习经历、项目实践与技术文章的静态个人网站。",
    techStack: ["Astro", "Tailwind CSS", "Git"],
    completedItems: [
      "基于 Astro 模板进行个人化改造",
      "实现桌面端侧栏与移动端抽屉导航",
      "完成首页、项目、博客、简历等基础页面结构",
      "优化基础 SEO 与响应式布局",
    ],
    plannedItems: [
      "部署至 Cloudflare Pages",
      "补充 Java 后端与全栈项目",
      "持续记录学习笔记与项目复盘",
    ],
  },
];
