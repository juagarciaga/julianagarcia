import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "@/app/components/mdx-components"
import BackButton from "@/app/components/buttons/get-back.button"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(slug: any) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)
  if (!doc) notFound()
  return doc
}


export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug)

  return (
    <main className="relative p-9 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <BackButton />
        <hr className="my-2" />
        <h1 className="text-5xl">{doc.title}</h1>
        <hr className="my-2" />
        <Mdx code={doc.body.code}></Mdx>
      </div>
    </main>
  )
}