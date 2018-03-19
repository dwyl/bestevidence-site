var sendemail = require('sendemail');
var sendMany = sendemail.sendMany;

module.exports = {
  extend: "apostrophe-pieces-submit-widgets",
  fields: ["subject", "details", "title", "email"],
  construct: function(self, options) {
    self.beforeInsert = function(req, piece, callback) {
      var person = {
        toName: 'admin',
        email: process.env.SENDER_EMAIL_ADDRESS,
        subject: piece.subject,
        details: piece.details,
        clientEmail: piece.email,
        clientName: piece.title
      };
      var detailsForSendMany = {
        templateName: 'template',
        context: person,
        subject: person.subject,
        toAddresses: [person.email],
        senderEmailAddress: person.senderEmailAddress,
        replyToAddress: person.replyToAddress,
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
