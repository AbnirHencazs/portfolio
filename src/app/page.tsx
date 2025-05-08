import ProjectCard from "app/components/ProjectCard";
import Timeline from "app/components/Timeline";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiAngular,
  SiVuedotjs,
  SiTestinglibrary,
  SiLaravel,
  SiNginx,
  SiPhp,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Vue", icon: <SiVuedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Testing Library", icon: <SiTestinglibrary /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "Nginx", icon: <SiNginx /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Git", icon: <SiGit /> },
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Vue and vuetify, featuring real-time inventory management and secure payment processing.",
    image: "https://hilazia.online/images/HilaziaHero.webp",
    technologies: ["Vue", "TypeScript", "Vuetify"],
    demoUrl: "https://hilazia.online",
    githubUrl: "https://github.com/AbnirHencazs/HilaziaVue",
  },
  {
    title: "Mocktube",
    description:
      "A youtube clone (mocktube) using Google Youtube data API. Has search and favorites feature alongside light/dark modes.",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "GoogleCloudPlatform", "localStorage"],
    demoUrl: "https://hilazia.online/mocktube/",
    githubUrl: "https://github.com/AbnirHencazs/react-bootcamp-2020",
  },
  {
    title: "NASA Photo of the day",
    description:
      "A React application which fetches Image of the Day from NASA api",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "NASA API"],
    demoUrl: "https://hilazia.online/nasa-calendar/",
    githubUrl: "https://github.com/AbnirHencazs/react-testing-bootcamp-cp-2022",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://hilazia.online/portfolio/",
    githubUrl: "https://github.com/AbnirHencazs/portfolio",
  },
];

const experience = [
  {
    date: "April, 2022 - Present",
    title: "Software Engineer - Frontend",
    description:
      "Leading development of flagship applications using TypeScript. Implementing CI/CD pipelines.",
    icon: <FaBriefcase />,
  },
  {
    date: "May, 2021 - April, 2022",
    title: "Full Stack Developer",
    description:
      "Developed and maintained multiple web applications using modern javascript frameworks. Implemented responsive designs and RESTful APIs. Mentored junior developers.",
    icon: <FaBriefcase />,
  },
  {
    date: "January, 2021 - May, 2021",
    title: "Frontend internship",
    description:
      "I took this internship while still working with my current employer at the time. We worked with React and learn a lot.",
    icon: <FaBriefcase />,
  },
  {
    date: "July, 2019 - May, 2021",
    title: "Embedded Systems Developer/Web Developer",
    description:
      "Wrote firmware for microcontrollers in IoT applications. Built User interfaces for supporting the microcontrollers reports.",
    icon: <FaBriefcase />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Brian Sanchez Izquierdo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A seasoned Fullstack developer with 5+ years of experience
            delivering reliable applications across SaaS, CMS, and IoT domains
            for diverse industries, employing Atomic design and unit testing.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            <p className="mb-4">
              I&apos;m a passionate for web technologies and confident in my
              hability to create beautiful, responsive, and user-friendly
              interfaces.
            </p>
            <p className="mb-4">
              With a strong foundation in React, Next.js, and TypeScript, I
              build performant and maintainable web applications that deliver
              exceptional user experiences.
            </p>
            <p>
              I love playing my bass guitar, going for runs in my favorite
              public park, watching films and tv. I&apos;m a person who is
              cheerful and fun, but also serious about my work ethic.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <Timeline stops={experience} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Let&apos;s get in touch and I&apos;ll send you my resume/CV.
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
