export default {
  title: 'Pages',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'This is only for internal reference.',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h1' },
            { title: 'Sub-heading', value: 'h2' },
          ],
        },
        { type: 'arrow' },
        { type: 'button' },
        { type: 'callout' },
        { type: 'lede' },
        { type: 'page-image' },
        { type: 'rule' },
        { type: 'showcase' },
      ],
    },
    {
      title: 'SEO Information',
      name: 'seo',
      type: 'seo',
    },
  ],
};
