import link from "@/fields/link";
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
                link
            ]
        }
    ]
}