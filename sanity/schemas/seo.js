export default {
  title: 'SEO Information',
  name: 'seo',
  type: 'object',
  fieldsets: [{ name: 'social', title: 'SEO Information' }],
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
      description:
        'This description will be used for SEO results, but is not visible on the page.',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Shown in SEO previews and social sharing.',
    },
  ],
};
