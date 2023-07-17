export default {
  title: 'Blog',
  name: 'blog',
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
      title: 'Blogs',
      name: 'blogs',
      type: 'reference',
      to: [{type: 'blog'}],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'reference',
      to: [{type: 'tag'}],
    },
  ],
}
