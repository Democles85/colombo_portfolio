import sgMail from '@sendgrid/mail'
require('dotenv').config

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  const { subject, firstName, email, gender, message, country } = req.body

  try {
    await sgMail.send({
      to: 'resonatewithyourself@gmail.com',
      from: 'resonatewithyourselfemailer@gmail.com',
      subject: `[Lead from website] : ${subject}`,
      html: `  
        <h3>You've got a new mail from ${firstName}, their email is: ${email} </h3>
        <h3>They are from: ${country.label}</h3>
        <h3>Gender: ${gender.label}</h3>
        <div style="font-size: 16px;">
        <strong>Message:</strong>
        <p>${message}</p>
        </div>`
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: '' })
}

export default sendEmail
