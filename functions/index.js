/**
 * TUTO: https://github.com/firebase/functions-samples/tree/master/quickstarts/email-users
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

const APP_NAME = 'Job hunting emails';

// [sendWelcomeEmail to a new user]
exports.sendWelcomeEmail = functions.auth.user().onCreate(user => {
  const email = user.email;
  const displayName = user.displayName;
  return sendWelcomeEmail(email, displayName);
});

// [sendByeEmail to users who delete their accounts]
exports.sendByeEmail = functions.auth.user().onDelete(user => {
  const email = user.email;
  const displayName = user.displayName;
  return sendGoodbyeEmail(email, displayName);
});

// Sends a welcome email to the given user.
async function sendWelcomeEmail(email, displayName = '') {
  const mailOptions = {
    from: `${APP_NAME} <jubhunting.test@gmail.com>`,
    to: email,
    subject: `Welcome to ${APP_NAME}!`,
    text: `Hey ${displayName}! Welcome to ${APP_NAME}. We hope you will enjoy our service.`
  };
  await mailTransport.sendMail(mailOptions);
  console.log('New welcome email sent to:', email);
  return null;
}

// Sends a goodbye email to the given user.
async function sendGoodbyeEmail(email, displayName = '') {
  const mailOptions = {
    from: `${APP_NAME} <jubhunting.test@gmail.com>`,
    to: email,
    subject: `Bye!`,
    text: `Hey ${displayName}!, We confirm that we have deleted your ${APP_NAME} account.`
  };
  await mailTransport.sendMail(mailOptions);
  console.log('Account deletion confirmation email sent to:', email);
  return null;
}

