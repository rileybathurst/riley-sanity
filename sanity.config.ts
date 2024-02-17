import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['settings'])

export default defineConfig({
  name: 'default',
  title: 'riley-sanity',

  projectId: 'ftaygkf6',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem().title('hero').id('hero').child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('hero').documentId('hero'),
            ),
            S.listItem()
              .title('about')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            // Regular document types
            S.documentTypeListItem('blog').title('blog'),
            S.documentTypeListItem('budget').title('budget'),
            S.documentTypeListItem('tag').title('tag'),
            S.documentTypeListItem('check').title('check'),
            S.documentTypeListItem('client').title('client'),
            S.documentTypeListItem('project').title('project'),
            S.documentTypeListItem('service').title('service'),
            S.documentTypeListItem('styleguide').title('styleguide'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
