import CMSLink from '@/components/link'
import Logo from '@/components/logo'
import { Footer } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

type Props = {
  footer: Footer
}

const FooterNav = ({ footer }: Props) => {
  const navItem = footer?.navigation
  return (
    <nav className="flex justify-between w-full">
      <div className="flex gap-2 items-center text-sm">
        <span className="tracking-tight">{navItem.title}</span>
        (
        <CMSLink
          className="hover:bg-transparent font-medium text-blue-700 px-0"
          link={navItem.link}
        />
        )
      </div>
      <div className='flex items-center text-sm tracking-tight'>
        build with 💖 by (
        <Link href="https://glozinfinity.tech">
          <Logo />
        </Link>
        )
      </div>
    </nav>
  )
}

export default FooterNav
