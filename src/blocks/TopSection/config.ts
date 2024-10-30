import { Block } from "payload";

export const TopSection: Block = {
    slug: 'topSection',
    fields: [
        {
            name: 'avater',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name:'paragraph',
            type: 'richText'
        }
    ]
}