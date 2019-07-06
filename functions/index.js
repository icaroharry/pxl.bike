const functions = require('firebase-functions');
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(functions.config().sendgrid.key);

exports.sendBikePixelOnEmail = functions.https.onRequest(async (request, response) => {
  const msg = {
    to: 'icaropc17@gmail.com',
    from: 'test@example.com',
    subject: 'Here is your Bike Pixel',
    text: 'Hey! This is your bike pixel.',
    html: '<strong> have fun! </strong>',
  };

  try {
    const res = await sendgrid.send(msg);
    response.send(res);
  } catch (err) {
    console.error(err);
    console.error(JSON.stringify(err));
    response.end(err.response.body);
  }
});
