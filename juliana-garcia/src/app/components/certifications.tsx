import Image from 'next/image'
import Link from 'next/link'

const certifications = [
  {
      "label": "AZ-900",
      "icon": "/certifications/AZ900.png",
      "description": "Microsoft Azure Fundamentals",
      "link": "https://learn.microsoft.com/pt-br/credentials/certifications/exams/az-900/"
  },
  {
      "label": "DP-900",
      "icon": "/certifications/DP900.png",
      "description": "Microsoft Azure Data Fundamentals",
      "link": "https://learn.microsoft.com/pt-br/credentials/certifications/exams/dp-900/"
  },
  {
      "label": "AI-900",
      "icon": "/certifications/AI900.png",
      "description": "Microsoft Azure AI Fundamentals",
      "link": "https://learn.microsoft.com/pt-br/credentials/certifications/exams/ai-900/"
  },
  {
      "label": "98-382",
      "icon": "/certifications/mta-badge.svg",
      "description": "Introduction to Programming using Javascript",
      "link": "https://learn.microsoft.com/en-us/credentials/certifications/mta-introduction-to-programming-using-javascript/?WT.mc_id=techcom_learn-blog-wwl"
  },
  {
      "label": "98-383",
      "icon": "/certifications/mta-badge.svg",
      "description": "Introduction to Programming using HTML and CSS",
      "link": "https://learn.microsoft.com/en-us/credentials/certifications/mta-introduction-to-programming-using-html-and-css/?WT.mc_id=techcom_learn-blog-wwl"
  }
]

export default function Certifications() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-white mb-5">Certifications</h1>
      <div className="flex flex-wrap items-center justify-items-center justify-evenly">
        {certifications?.map((skill, index) => (
          <div key={index} className="text-white relative flex flex-col items-center justify-items-center  w-1/3 mb-3">
            <Link href={skill.link} className='absolute w-full h-full' target='_blank'/>
            <Image
                src={skill.icon}
                alt={skill.label}
                className='mb-3 rounded-full'
                width={`${150}`}
                height={`${300}`}
                priority
            />
            <b>{skill.label}</b>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
