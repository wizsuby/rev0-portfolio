import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { getYearFromISO } from '@/utils/formatdate'
import Link from 'next/link'
import { DogIcon, Rss } from 'lucide-react'

const PostListComponentBlock = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
  })

  return (
    <div className="mt-10">
      {/* <div className="flex items-center gap-2">
        <Rss size={18} />
        <p className="font-bold tracking-tight">Posts</p>
        <hr className="flex-1 border-border" />
      </div> */}
      <div className="max-w-screen-sm mx-auto">
        <div className="mt-5">
          <div className="flex font-mono tracking-tight gap-7 px-5 text-sm text-neutral-500 border-b border-border pb-3">
            <span className="block flex-1">title</span>
            <span className="block">date</span>
          </div>

          <ul className="divide-y divide-border">
            {posts.docs.map((item) => (
              <Link key={item.id} href={'/blog/' + item.slug}>
                <li className="flex font-mono px-5 transition-all duration-500 tracking-tighter gap-7 py-3 items-end hover:bg-hover">
                  <span className="block flex-1">{item.title}</span>
                  <span className="block text-neutral-500 w-[32px]">
                    {getYearFromISO(item.publishedAt!)}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostListComponentBlock
