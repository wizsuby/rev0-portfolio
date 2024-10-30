import type { Footer } from '@/payload-types'
import { getCachedGlobal } from '@/utils/getGlobals'
import { FooterClient } from './Component.client'


const Footer = async() => {
    const footer = await getCachedGlobal('footer', 1)()
  return (
    <FooterClient footer={footer as Footer}/>
  )

}

export default Footer