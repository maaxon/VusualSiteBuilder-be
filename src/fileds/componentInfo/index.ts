import { Field } from 'payload'

export function addComponentInfo(componentName: string, componentPath: 'lib' | 'project'): Field[] {
  return [
    {
      name: 'componentName',
      type: 'text',
      defaultValue: componentName,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'componentPath',
      type: 'text',
      defaultValue: componentPath,
      admin: {
        hidden: true,
      },
    },
  ]
}
