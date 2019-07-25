export default {
  title: 'Showcase',
  name: 'showcase',
  type: 'object',
  fields: [
    {
      title: 'Number of entries to display',
      name: 'numDisplay',
      type: 'number',
      validation: Num => Num.required().integer().positive().warning('Number must be a positive integer')
    },
  ],
};
