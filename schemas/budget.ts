export default {
  title: 'Budget',
  name: 'budget',
  type: 'document',
  fields: [
    {
      title: 'Service',
      name: 'service',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'What am I paying for?',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'How much is it?',
    },
    {
      title: 'Order',
      name: 'order',
      type: 'number',
      description: 'What order should this appear in?',
    },
  ],
}
