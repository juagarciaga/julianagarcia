import { greyBg } from "@/constants"
import { getAllData } from "@/data"
import Image from 'next/image'

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
        </>
    )
}
