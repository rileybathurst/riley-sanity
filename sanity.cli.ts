import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ftaygkf6',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      id: 'gatsby',
    },
  ],
})
