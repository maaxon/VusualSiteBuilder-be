import type { Block } from 'payload'
import { addComponentInfo } from '@/fileds/componentInfo'

export const Container: Block = {
  slug: 'Container',
  fields: [
    {
      name: 'tag',
      type: 'select',
      defaultValue: 'div',
      options: ['div', 'main','section'],
      required: true,
    },
    {
      name: 'children',
      type: 'blocks',
      blocks: [],
      blockReferences: ['text']
    },
    ...addComponentInfo('Div', 'lib')
  ],
  interfaceName: 'Div',
}
