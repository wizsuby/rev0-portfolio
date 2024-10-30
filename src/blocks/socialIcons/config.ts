import { Block } from 'payload';


export const SocialMediaLinks: Block = {
  slug: 'socialMediaLinks',
  labels: {
    singular: 'Social Media Link',
    plural: 'Social Media Links',
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'Facebook' },
            { label: 'Twitter', value: 'Twitter' },
            { label: 'Instagram', value: 'Instagram' },
            { label: 'LinkedIn', value: 'Linkedin' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
 
};
