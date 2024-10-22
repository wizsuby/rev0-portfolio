import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title'
    },
    fields: [
        {
            name: 'meta',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea'
                }
            ]
        },
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
        
        {
            name: 'layout',
            type: 'blocks',
            blocks: []
        }
    ]
}