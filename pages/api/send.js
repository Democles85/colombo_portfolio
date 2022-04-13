import sgMail from '@sendgrid/mail'
import 'dotenv/config'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'democleschannel28@gmail.com',
  from: 'resonatewithyourself@gmail.com',
  subject: 'Test Message',
  text: 'Test Text',
  html: '<strong>Test Strong Text</strong>'
}

sgMail
  .send(msg)
  .then(() => {
    console.log('email sent')
  })
  .catch(error => {
    console.log('There was an error', error)
  })
