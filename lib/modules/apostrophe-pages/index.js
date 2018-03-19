// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'pricing',
      label: 'Pricing'
    },
    {
      name: 'about',
      label: 'About'
    },
    {
      name: 'apostrophe-blog-page',
      label: 'Blog Index'
    },
    {
      name: 'contact',
      label: 'Contact'
    },
    {
      name: 'appraising',
      label: 'Appraising'
    },
    {
      name: 'stories',
      label: 'Stories'
    },
    {
      name: 'howToUseBestEvidence',
      label: 'How to Use Best Evidence'
    },
    {
      name: 'faq',
      label: 'FAQs'
    }
    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
