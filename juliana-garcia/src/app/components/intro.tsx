import { greyBg } from "@/constants"
import { getAllData } from "@/data"
import Image from 'next/image'

export default function Intro() {
    const data = getAllData()

    return (
        <div className='col-span-12 lg:col-span-3 bg-slate-300 flex flex-col items-center gap-1 text-black text-left py-3 px-10' style={{ background: greyBg }}>
            <Image
                src="/picture-profile.jpeg"
                alt="Juliana Garcia"
                className='mb-3 rounded-full'
                width={300}
                height={76}
                priority
            />
            <h1 className='text-3xl mb-3'>Juliana García</h1>
            <h2 className='text-2xl mb-3'>Full-Stack Developer</h2>
            <p className='text-2xl mb-3'>{data.intro?.description}</p>
        </div>
    )
}
