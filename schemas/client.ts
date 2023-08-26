export default {
  title: 'Client',
  name: 'client',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'lowercase hyphens only',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'string',
      description: '120 chars',
    },
    {
      title: 'Article',
      name: 'article',
      type: 'text',
      description: 'the post',
    },
    {
      title: 'Start',
      name: 'start',
      type: 'date',
      description: 'YYYY-MM-DD',
    },
    {
      title: 'Finish',
      name: 'finish',
      type: 'date',
      description: 'YYYY-MM-DD',
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
    },
    {
      title: 'Styleguide',
      name: 'styleguide',
      type: 'reference',
      to: [{type: 'styleguide'}],
    },
  ],
}
