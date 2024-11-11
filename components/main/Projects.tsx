import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* Project 1: Mobile Chat Application */}
        <Link href="/mobile-chat-app">
          <ProjectCard
            src="/app.png"
            title="Mobile Chat Application"
            description="This app is built with React Native. React Native is very powerful as it can build cross-platform applications."
          />
        </Link>

        {/* Project 2: E-commerce Website */}
        <Link href="/e-commerce-site">
          <ProjectCard
            src="/products.png"
            title="E-commerce Website"
            description="This website is built with the MERN stack (MongoDB, Express, React, Node.js). It is a powerful stack for building web applications."
          />
        </Link>

        {/* Project 3: Web Chat Application (External Link) */}
        <a
          href="https://github.com/your-github-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/text-AirDrop.png"
            title="Web Chat Application"
            description="This web application is built with Next.js, MongoDB, Prisma, Express, and Node.js, making it a powerful set for building modern web apps."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
