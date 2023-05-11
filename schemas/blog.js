export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'lowercase',
    },
  ]
}