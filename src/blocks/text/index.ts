import type { Block } from 'payload'
import { addComponentInfo } from '@/fileds/componentInfo'

export const Text: Block = {
  slug: 'text',
  fields: [
    {
      name: 'tag',
      type: 'select',
      defaultValue: 'p',
      options: ['p', 'h1', 'h2', 'h3', 'h4'],
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      defaultValue: '',
    },
    ...addComponentInfo('Text', 'lib')
  ],
  interfaceName: 'Text',
}
