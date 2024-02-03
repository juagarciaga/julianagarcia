"use client";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Nestjs } from "@styled-icons/simple-icons/Nestjs";
import { Express } from "@styled-icons/simple-icons/Express";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Microsoftazure } from "@styled-icons/simple-icons/Microsoftazure";
import { Azuredevops } from "@styled-icons/simple-icons/Azuredevops";
import { Azurepipelines } from "@styled-icons/simple-icons/Azurepipelines";
import { Git } from "@styled-icons/boxicons-logos/Git";

const skills = [
  {
    frontend: [
      {
        label: "Javascript",
        icon: <Javascript />,
        description:
          "I’m well-versed in both JavaScript and TypeScript, using them to create dynamic and interactive web applications. Whether it’s vanilla JS or the latest ES6 features, I’ve got you covered.",
      },
      {
        label: "Typescript",
        icon: <Typescript />,
        description:
          "Strong typing system allows to catch errors at compile-time rather than runtime, which can save valuable time and effort",
      },
      {
        label: "React JS",
        icon: <ReactLogo />,
        description:
          "React is my go-to library for building robust user interfaces. I’ve worked extensively with React components, state management (Redux, Context), and hooks.",
      },
      {
        label: "Next.JS",
        icon: <Nextdotjs />,
        description:
          "A powerful framework built on top of React, enables server-side rendering (SSR) and seamless routing. I’ve developed scalable applications using Next.js, ensuring optimal performance and SEO",
      },
    ],
  },
  {
    backend: [
      {
        label: "Node JS",
        icon: <Nodejs />,
        description:
          "On the server side, I leverage Node.js and Express to build RESTful APIs and handle backend logic. Express provides a lightweight, flexible framework for creating web servers and APIs.",
      },
      {
        label: "Nestjs",
        icon: <Nestjs />,
        description:
          "Nest.js is my preferred choice for building scalable and maintainable back-end applications. It combines TypeScript, decorators, and dependency injection to create a robust framework.",
      },
      {
        label: "Express",
        icon: <Express />,
        description:
          "I’ve implemented authentication, middleware, and database interactions using Express.",
      },
      {
        label: "Mysql",
        icon: <Mysql />,
        description:
          "I’ve designed schemas, written complex queries, and optimized database performance.",
      },
      {
        label: "Mongo DB / Cosmos DB",
        icon: <Mongodb />,
        description:
          "I’ve worked with NoSQL databases, modeling data as documents and utilizing features like aggregation pipelines.",
      },
    ],
  },
  {
    infra: [
      {
        label: "Git",
        icon: <Git />,
        description:
          "Git is my version control system of choice. Branching, merging, and resolving conflicts. Collaborating with team members using Git workflows. Managing repositories on platforms like GitHub, GitLab, or Azure Repos.",
      },
      {
        label: "Pipelines",
        icon: <Azurepipelines />,
        description:
          "I’ve set up end-to-end CI/CD pipelines using Azure Pipelines. Configure build and release pipelines for continuous integration and deployment. Automate testing, packaging, and deployment stages. Monitor pipeline performance and troubleshoot issues.",
      },
      {
        label: "Microsoftazure",
        icon: <Microsoftazure />,
        description:
          "I’m proficient in setting up CI/CD pipelines using Azure DevOps. From code commits to deployment, I ensure a smooth development workflow.",
      },
      {
        label: "Azuredevops",
        icon: <Azuredevops />,
        description:
          "Microsoft Azure provides a robust cloud platform. I’ve deployed applications, managed resources, and utilized Azure services like Azure Functions, Azure Storage, and Azure App Service.",
      },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-white">Skills</h1>
      <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-2 border-current">
        {skills[0].frontend?.map((skill, index) => (
          <div key={index} className="text-white w-25">
            <span className="flex w-100" style={{ height: "50px" }}>
              {skill.icon}
            </span>
            <b>{skill.label}</b>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-2 border-current">
        {skills[1].backend?.map((skill, index) => (
          <div key={index} className="text-white w-25">
            <span className="flex w-100" style={{ height: "50px" }}>
              {skill.icon}
            </span>
            <b>{skill.label}</b>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="inline-grid grid-cols-2 lg:grid-cols-4 gap-2 border-current">
        {skills[2].infra?.map((skill, index) => (
          <div key={index} className="text-white w-25">
            <span className="flex w-100" style={{ height: "50px" }}>
              {skill.icon}
            </span>
            <b>{skill.label}</b>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
