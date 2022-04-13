import sgMail from '@sendgrid/mail'

sgMail.setApiKey(
  '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'
)

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
