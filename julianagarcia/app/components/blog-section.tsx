import Link from "next/link"
import { bgWater } from "../constants"
import getPostMetadata from "@/utils/getPostMetadata"
import { icons } from "./icons"

const bgStyle = {
    background: bgWater,
    padding: "1rem"
}

export default function Blog() {

    const postMetadata = getPostMetadata('content/blog')

    return (
        <>
            <div className='text-white w-50 text-center' style={bgStyle}>
                <h1 className='text-4xl bold mb-3'>Visit my blog</h1>
                <p>Writing articles helps me to study and to keep a record about the daily learning in this technological journey</p>
            </div>

            <div className="border-current gap-4 grid-cols-1 lg:grid-cols-2 inline-grid mb-5 w-100 mt-5">
                {postMetadata.map((doc, index) =>
                    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 relative" key={index}>
                        <Link title={doc.title} key={index} href={doc.slug} className="absolute w-full h-full" />
                        <div style={{ width: "80px", margin: "0", color: bgWater }} className="iconSp">
                            {icons[doc.icon]}
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black">{doc.title}</div>
                            <p className="text-slate-500">{doc.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
