import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'navigations',
            type: 'array',
            fields: [
                {
                    name: 'navigation',
                    type: 'text'
                }
            ]
        }
    ]
}