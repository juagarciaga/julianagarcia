import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "@/app/components/mdx-components"

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
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Mdx code={doc.body.code}></Mdx>
      </div>
    </main>
  )
}