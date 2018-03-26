module.exports = {
  extend: 'apostrophe-pieces',
  name: 'story',
  label: 'Story',
  pluralLabel: 'Stories',
  addFields: [
    {
      name: 'testimonialTitle',
      label: 'Testimonial Title',
      type: 'string',
      required: true
    },
    {
      name: 'yourTestimonial',
      label: 'Your Testimonial',
      type: 'string',
      textarea: true,
      required: true
    },
    {
      name: 'title',
      label: 'Your Name',
      type: 'string',
      required: true
    },
    {
      name: 'email',
      label: 'Your Email Address',
      type: 'string',
      required: true
    }
  ],

  arrangeFields: [
    {
      name: 'basics',
      label: 'Message Details',
      fields: ['testimonialTitle', 'yourTestimonial', 'title', 'email']
    }
  ]
};
