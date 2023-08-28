export default {
  title: 'Hero',
  name: 'hero',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'homepage hero',
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    },
  ],
}
