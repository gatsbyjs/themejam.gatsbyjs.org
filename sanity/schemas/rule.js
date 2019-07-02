export default {
  title: 'Rule',
  name: 'rule',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'The text displayed under the rules name.',
    },
    {
      title: 'Rule Icon',
      name: 'icon',
      type: 'rule-icon',
    },
  ],
};
