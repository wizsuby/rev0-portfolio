import React from 'react'

import type { Page } from '@/payload-types'
import RichText from '@/richtext'
import { ContentLink } from '@/components/link/content-link'
import { cn } from '@/utils/cn'
import { Prose } from '@/components/Prose'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'content' }>

export const ContentBlock = (props: Props) => {
  const { content } = props

  return (
    <div className="container my-16">
      <Prose>
        <RichText content={content as any } />
      </Prose>
    </div>
  )
}
