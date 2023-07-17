import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ftaygkf6',
    dataset: 'production',
  },
  graphql: [
    {
      playground: false,
      tag: 'experiment',
      // workspace: 'production',
      id: 'schema-experiment',
    },
  ],
})
