import CMSLink from '@/components/link'
import { Header } from '@/payload-types'
import React from 'react'

type Props = {
    header: Header
}

const HeaderNav = ({header}: Props) => {
  
    const navItems = header?.navigations || []
  return (
    <nav className='flex gap-1 text-sm items-center'>
        {navItems.length > 0 && navItems.map(({link}, index) => {
            return <CMSLink key={index} link={link}/>
        })}
    </nav>
  )
}

export default HeaderNav