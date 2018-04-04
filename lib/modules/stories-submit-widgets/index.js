var sendemail = require('sendemail');
var sendMany = sendemail.sendMany;

module.exports = {
  extend: "apostrophe-pieces-submit-widgets",
  fields: ["testimonialTitle", "yourTestimonial", "title", "email"],
  construct: function(self, options) {
    self.beforeInsert = function(req, piece, callback) {
      var emailDetails = {
        toName: 'admin',
        email: process.env.SENDER_EMAIL_ADDRESS,
        title: piece.testimonialTitle,
        subject: 'A Best Evidence story has just been submitted',
        details: piece.yourTestimonial,
        clientEmail: piece.email,
        clientName: piece.title
      };
      var detailsForSendMany = {
        templateName: 'story',
        context: emailDetails,
        subject: emailDetails.subject,
        toAddresses: [emailDetails.email],
        senderEmailAddress: emailDetails.email,
        replyToAddress: emailDetails.replyToAddress,
        ccAddresses: null,
        bccAddresses: null
      };
      sendMany(detailsForSendMany, function(error, result) {
        if (error) {
          console.log('sendMany -- ERROR: ', error);
          callback(error);
          return;
        }
        console.log('sendMany -- RESULT: ', result);
        callback(null);
      });
    };
  }
}
