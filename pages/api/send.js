import sgMail from '@sendgrid/mail'
require('dotenv').config

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: 'resonatewithyourself@gmail.com',
      from: 'resonatewithyourselfemailer@gmail.com',
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `  
        <h3>You've got a new mail from ${req.body.firstName}, their email is: ${req.body.email} </h3>
        <h3>Gender: ${req.body.gender}</h3>
        <div style="font-size: 16px;">
        <strong>Message:</strong>
        <p>${req.body.message}</p>
        </div>`
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: '' })
}

export default sendEmail
