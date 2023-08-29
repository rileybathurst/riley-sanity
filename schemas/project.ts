export default {
  title: 'Project',
  name: 'project',
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
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'hero',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
    {
      type: 'boolean',
      name: 'featured',
      title: 'Featured',
      description: 'Show on home page',
    },
  ],
}
