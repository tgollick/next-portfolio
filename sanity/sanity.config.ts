import {isDev} from 'sanity/lib/exports'
import {defineConfig} from 'sanity/lib/exports'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'navy-opossum',

  projectId: 'op4cefm5',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
})
