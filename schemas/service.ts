export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
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
      title: 'Client',
      name: 'client',
      type: 'reference',
      to: [{type: 'client'}],
    },
  ],
}
