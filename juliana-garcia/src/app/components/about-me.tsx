'use client'
import { getAllData } from "@/data"

export default function AboutMe() {
    const data = getAllData()

    return (
        <div className='text-white w-50'>
            <h1 className='text-4xl bold mb-3'>About me</h1>
            <p>{data.aboutMe?.description}</p>
        </div>
    )
}
