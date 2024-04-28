import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
import fs from 'fs'
import matter from "gray-matter"
import BackButton from "@/app/components/buttons/get-back.button"
import { bgWater, greyBg } from "@/app/constants"

const folderPath = 'content/blog/'

function getPostContent(slug: any) {
    const file = folderPath + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    return matter(content)
}

export const generateStaticParams = () => {
    const posts = getPostMetadata(folderPath)
    return posts.map((post) =>  ({ slug: post.slug.split('/')[1] }))
}

export async function generateMetadata({ params, searchParams }: any) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `Juliana Garcia ⋅ Blog ${id.replaceAll('_', ' ')}`
    }
}

export default function ArticlePage(props: any) {
    const { slug } = props.params
    const post = getPostContent(slug)
    const { content, data } = post
    const { title, dateWritten, tags } = data

    const formatTags = tags?.split(',').map((tag: string, index: number) => (<b key={index} style={{ color: bgWater, textTransform: "uppercase" }}>  ⋅ #{tag} ⋅  </b>))

    return (
        <main style={{ background: 'white', color: 'black' }}>
            <div style={{ height: '20px', background: bgWater }} />
            <div style={{ height: '15px', background: greyBg }} />

            <article className="container" style={{ maxWidth: '800px', margin: '20px auto', padding: '0 0 20px' }} >
                <div>
                    <span>{dateWritten} / </span>
                    {formatTags}</div>
                <hr className="my-2" />
                <h1 className="text-5xl">{title}</h1>
                <hr className="my-2" />
                <Markdown style={{margin: '20px 0'}}>{content}</Markdown>
                <BackButton />
            </article>
        </main>
    )
}