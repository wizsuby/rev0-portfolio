import link from "@/fields/link";
import { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
    slug: 'footer',
    fields: [
        {
            name: 'navigation',
            type: 'group',
            fields: [
                {
                    name:'title',
                    type:'text'
                },
                link
            ]
        }
    ]
}