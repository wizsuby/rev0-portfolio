import type { Header } from '@/payload-types'
import { getCachedGlobal } from '@/utils/getGlobals'
import React from 'react'
import { HeaderClient } from './Component.client'

const Header = async() => {
    const header: Header = await getCachedGlobal('header', 1)()
  return (
    <HeaderClient header={header}/>
  )
}

export default Header