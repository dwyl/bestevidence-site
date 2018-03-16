module.exports = {
  extend: "apostrophe-pieces",
  name: "message",
  label: "Message",
  pluralLabel: "Messages",
  addFields: [
    {
      name: "subject",
      type: "string",
      required: true
    },
    {
      name: "details",
      type: "string",
      textarea: true,
      required: true
    },
    {
      name: "title",
      label: "Your Name",
      type: "string",
      required: true
    },
    {
      name: "email",
      label: "Your Email Address",
      type: "string",
      required: true
    }
  ],

  arrangeFields: [
    {
      name: "basics",
      label: "Message Details",
      fields: ["subject", "details", "title", "email"]
    }
  ]
};
