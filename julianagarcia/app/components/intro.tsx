import Image from 'next/image'
import { getAllData } from '../data'
import { Github, Linkedin } from '@styled-icons/bootstrap'
import Link from 'next/link'
import { bgWater } from '../constants'

const socialMedia = [{
    link: 'https://github.com/juagarciaga',
    icon: <Github />,
},
{
    link: 'https://www.linkedin.com/in/julianagarciag/',
    icon: <Linkedin />,
}]
export default function Intro() {
    const data = getAllData()

    return (
        <>
            <Image
                src="/picture-profile.jpeg"
                alt="Juliana Garcia"
                className='mb-3 rounded-full'
                width={300}
                height={76}
                priority
            />
            <h1 className='text-3xl mb-3'>{data.metadata?.title}</h1>
            <h2 className='text-2xl mb-3'>{data.metadata?.description}</h2>
            <p className='mb-3'>{data.intro?.description}</p>

            <div className='flex w-full my-3'>

                {socialMedia.map((media) => (
                    <span
                        className="flex text-center w-full justify-center relative"
                        style={{ height: '40px', color: bgWater }}
                    >
                        <Link href={media.link} className='absolute w-full h-full' target='_blank' />
                        {media.icon}
                    </span>
                ))}


            </div>
        </>
    )
}
