const { NotFound, BadRequest } = require('http-errors')
const { User } = require('../../models/users')
const { sendEmail } = require('../../helpers')

const secondVerification = async(req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw NotFound()
  }
  if (user.verify) {
    throw BadRequest('Verification has already been passed')
  }

  const mail = {
    to: email,
    subject: 'Email confirmation',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verifyToken}"Click here to verify your email</a>`
  }

  sendEmail(mail)

  res.json({
    status: 'success',
    code: 200,
    message: 'Verification email sent'
  })
}

module.exports = secondVerification
