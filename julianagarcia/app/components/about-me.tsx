'use client'
import { getAllData } from "../data"


const bgStyle = {
    background: "#2b6b658f",
    padding: "1rem"
}

export default function AboutMe() {
    const data = getAllData()

    return (
        <>
        <div className='text-white w-50' style={bgStyle}>
            <h1 className='text-4xl bold mb-3'>About me</h1>
            <p>{data.aboutMe?.description}</p>
        </div>

        <div className='text-white w-50 mt-5' style={bgStyle}>
            <h1 className='text-4xl bold mb-3'>What I do</h1>
            <p>{data.introduction?.description}</p>
        </div>
        </>
    )
}
