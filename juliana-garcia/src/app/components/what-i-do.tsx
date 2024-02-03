import { getAllData } from "@/data"

export default function WhatIDo() {
    const data = getAllData()
    return (
        <div className='text-white w-50 mt-5'>
            <h1 className='text-4xl bold mb-3'>What I do</h1>
            <p>{data.introduction?.description}</p>
        </div>
    )
}
