'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import type { Footer } from '@/payload-types'
import FooterNav from '.'

interface FooterClientProps {
  footer: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ footer }) => {
  return (
    <footer className="max-w-screen-sm w-full mx-auto pl-5 py-4 mt-36 pr-4 flex justify-between items-center font-mono">
      <FooterNav footer={footer} />
    </footer>
  )
}
