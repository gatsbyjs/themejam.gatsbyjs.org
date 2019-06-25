export default {
  title: 'Page Image',
  name: 'page-image',
  type: 'image',
  fields: [
    {
      type: 'string',
      name: 'alt',
      title: 'Alt text',
      description:
        'Add a description of the image content for the visually impaired.',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
