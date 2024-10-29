'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import HeaderNav from './nav'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  const title = header?.title

  return (
    <header className="max-w-screen-sm  mx-auto pl-5 py-3 pr-4 flex justify-between items-center font-mono">
      <Link className="font-bold text-xl" href="/">
        {title}
      </Link>
      <HeaderNav header={header} />
    </header>
  )
}
