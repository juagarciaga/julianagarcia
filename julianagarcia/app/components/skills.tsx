import { bgWater } from "../constants";
import { icons } from "./icons";

const skills = [
  [
    {
      label: "Node JS",
      icon: icons["Nodejs"],
      description:
        "On the server side, I leverage Node.js and Express to build RESTful APIs and handle backend logic.",
    },
    {
      label: "Javascript",
      icon: icons["Javascript"],
      description:
        "Whether it’s vanilla JS or the latest ES6 features, I’ve got you covered.",
    },
    {
      label: "Typescript",
      icon: icons["Typescript"],
      description:
        "Strong typing system allows to catch errors at compile-time rather than runtime, which can save valuable time and effort",
    },

    {
      label: "React JS",
      icon: icons["ReactLogo"],
      description:
        "React is my go-to library for building robust user interfaces. React components, state management (Redux, Context), and hooks <3.",
    },
    {
      label: "Next.JS",
      icon: icons["Nextdotjs"],
      description:
        "A powerful framework built on top of React, enables server-side rendering (SSR) and seamless routing. I’ve developed scalable applications using Next.js, ensuring optimal performance and SEO",
    },
    {
      label: "Storybook",
      icon: icons["Storybook"],
      description:
        "Storybook is a frontend workshop for building UI components and pages in isolation. Empowering UI development, testing, and documentation.",
    },
    {
      label: "Express",
      icon: icons["Express"],
      description:
        "Authentication, middleware, and database interactions based on Node.js is one of my favorites too",
    },
    {
      label: "Nestjs",
      icon: icons["Nestjs"],
      description:
        "Nest.js is my preferred choice for building scalable and maintainable back-end applications. Combining TypeScript, decorators, and dependency injection to create a robust framework.",
    },
    {
      label: "Jest",
      icon: icons["Jest"],
      description:
        "Jest allows you to simulate requests to your API endpoints, helping you identify security weaknesses. services function as expected, return correct responses, and maintain reliability.",
    },

    {
      label: "Mysql",
      icon: icons["Mysql"],
      description:
        "I’ve designed schemas, written complex queries, and optimized database performance.",
    },
    {
      label: "Mongo DB / Cosmos DB",
      icon: icons["Mongodb"],
      description:
        "I’ve worked with NoSQL databases, modeling data as documents and utilizing features like aggregation pipelines.",
    },

    {
      label: "Microsoftazure",
      icon: icons["Microsoftazure"],
      description:
        "I’m proficient in setting up CI/CD pipelines using Azure DevOps. From code commits to deployment, I ensure a smooth development workflow.",
    },
    {
      label: "Pipelines",
      icon: icons["Azurepipelines"],
      description:
        "I’ve set up end-to-end CI/CD pipelines using Azure Pipelines. Configure build and release pipelines for continuous integration and deployment. Automate testing, packaging, and deployment stages. Monitor pipeline performance and troubleshoot issues.",
    },
    {
      label: "Azuredevops",
      icon: icons["Azuredevops"],
      description:
        "Microsoft Azure provides a robust cloud platform. I’ve deployed applications, managed resources, and utilized Azure services like Azure Functions, Azure Storage, and Azure App Service.",
    },
    {
      label: "Git",
      icon: icons["Git"],
      description:
        "Git is my version control system of choice. Branching, merging, and solving conflicts. Collaborating with team members using Git workflows. Managing repositories on platforms like GitHub, GitLab, or Azure Repos.",
    },
  ],
];

export default function Skills() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl mb-3" style={{ color: bgWater }}>Skills</h1>

      {skills.map((group, i) => (
        <div
          className="inline-grid grid-cols-2 lg:grid-cols-3 mb-5 gap-4 border-current"
          key={i}
        >
          {group.map((skill, index) => (
            <div key={index}>
              <span
                className="flex w-100 mb-2 iconSp"
                style={{ height: "50px", color: bgWater }}
              >
                {skill.icon}
              </span>
              <b style={{ color: bgWater }}>{skill.label}</b>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
