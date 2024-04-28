import { FaGithub, FaUbuntu, FaMemory, FaLinkedin, FaGitAlt, FaReact } from "react-icons/fa";
import { SiOctanerender, SiMicrosoftazure, SiTypescript, SiNodedotjs, SiNextdotjs, SiNestjs, SiExpress, SiMongodb, SiMysql, SiAzuredevops, SiAzurepipelines, SiStorybook, SiJest } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

export const icons: Record<string, any> = {
    "Ubuntu": <FaUbuntu />,
    "Memory": <FaMemory />,
    "Render": <SiOctanerender />,
    "Microsoftazure": <SiMicrosoftazure />,
    "Github": <FaGithub />,
    "Linkedin": <FaLinkedin />,
    "Octanerender": <SiOctanerender/>, 
    "Javascript": <IoLogoJavascript/>, 
    "Typescript": <SiTypescript/>, 
    "Nextdotjs": <SiNextdotjs/>, 
    "Nestjs": <SiNestjs/>, 
    "Express": <SiExpress/>, 
    "Mongodb": <SiMongodb/>, 
    "Mysql": <SiMysql/>, 
    "Azuredevops": <SiAzuredevops/>, 
    "Azurepipelines": <SiAzurepipelines/>, 
    "Storybook": <SiStorybook/>, 
    "Jest" : <SiJest/>,
    "Nodejs": <SiNodedotjs/>, 
    "ReactLogo": <FaReact/>, 
    "Git": <FaGitAlt/>,
    "ArrowLeft": <FaArrowLeft/>
}