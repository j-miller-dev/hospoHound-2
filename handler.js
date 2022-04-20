// define the options for your email and domain
const options = {
  myEmail: process.env.EMAIL, // myEmail is the email address you enabled in AWS SES in the AWS Console
  myDomain: process.env.DOMAIN, // add the domain of your website or '*' if you want to accept requests from any domain
};

// initialize the function
const { sendJSON, sendFormEncoded } = require("lambda-mailer")(options);

// Content-Type: application/json
// The event.body needs to be a JSON object with 3 properties
// - email
// - name
// - content
module.exports.sendJSON = sendJSON;

// Content-Type: application/x-www-form-urlencoded
// The event.body needs to a URI encoded string with 3 parameters
// - email
// - name
// - content
module.exports.sendFormEncoded = sendFormEncoded;
