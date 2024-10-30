import { Header, Page } from '@/payload-types'
import { cn } from '@/utils/cn'

import { icons } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  link: NonNullable<Header['navigations']>[number]['link']
  className?: string
}

const CMSLink = ({ link,className }: Props) => {
 
  switch (link.type) {
    case 'social':
      return <SocialLink link={link} />
    case 'page':
     
      return <Link className={cn('hover:bg-black/10 px-2 py-1 transition-all duration-500', className)} href={'/' + (link.page as Page)?.slug || '/'}>{link.label}</Link>
    default:
      return <Link className={cn('hover:bg-black/10 px-2 py-1 transition-all duration-500', className)} href={link.url || '/'}>{link.label}</Link>
  }
}

const SocialLink = ({ link }: Props) => {
  const IconComponent = icons[link['social icon']!]
  return (
    <Link className="flex items-center gap-2 hover:bg-black/10 px-2 py-1 transition-all duration-500" href={link.social || '/'}>
      <IconComponent size={18} />
      {link.label}
    </Link>
  )
}

export default CMSLink
