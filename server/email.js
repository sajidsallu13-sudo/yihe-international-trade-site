/**
 * Future: Email integration module
 * Requires nodemailer and SMTP configuration
 * 
 * Usage in server/index.js:
 * const { sendContactEmail, sendSupplierEmail } = require('./email');
 * 
 * Then in routes:
 * await sendContactEmail({ name, email, message });
 * await sendSupplierEmail({ company_name, contact_name, email, phone, country });
 */

// Example implementation (when you add SMTP):
/*
const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function loadTemplate(name, data) {
  const path = `./templates/${name}.txt`;
  let content = fs.readFileSync(path, 'utf8');
  Object.keys(data).forEach(key => {
    content = content.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
  });
  return content;
}

async function sendContactEmail(contactData) {
  const message = loadTemplate('email-contact-acknowledgement', contactData);
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'noreply@yihe.com',
    to: contactData.email,
    subject: 'Thank You for Contacting YIHE',
    text: message
  });
  
  // Also send internal notification
  const notif = loadTemplate('email-contact-notification', contactData);
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.INTERNAL_EMAIL || 'mohd.yihe@gmail.com',
    subject: `New Contact: ${contactData.name}`,
    text: notif
  });
}

async function sendSupplierEmail(supplierData) {
  const message = loadTemplate('email-supplier-welcome', supplierData);
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'noreply@yihe.com',
    to: supplierData.email,
    subject: 'Welcome to YIHE — Registration Confirmed',
    text: message
  });
}

module.exports = { sendContactEmail, sendSupplierEmail };
*/
