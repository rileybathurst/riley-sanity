export default {
  title: 'Tag',
  name: 'tag',
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
  ],
}
