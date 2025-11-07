import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'children',
      type: 'blocks',
      blocks: [],
      blockReferences:['Container']
    },
  ],
}
