import { cn } from 'src/utils/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

// import { ContentBlock } from '@/blocks/Content/Component'

// import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TopSectionBlock } from './TopSection/Component'
import SocialMediaLinks from './socialIcons/Component'
// import WorksBlock from './Works/Component'
import PostListComponentBlock from './PostList/Component'
import { ContentBlock } from './content-block/Component'

const blockComponents = {
  content: ContentBlock,
  // mediaBlock: MediaBlock,
  topSection: TopSectionBlock,
  socialMediaLinks: SocialMediaLinks,
  // works: WorksBlock,
  postList: PostListComponentBlock

}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks} = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-ignore */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
