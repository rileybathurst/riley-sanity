export default {
  title: 'Styleguide',
  name: 'styleguide',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'styleguide',
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
      title: 'Article',
      name: 'article',
      type: 'text',
    },
    {
      title: 'Blog',
      name: 'blog',
      type: 'reference',
      to: [{type: 'blog'}],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'reference',
      to: [{type: 'tag'}],
    },
    {
      title: 'Check',
      name: 'check',
      type: 'reference',
      to: [{type: 'check'}],
    },
  ],
}
