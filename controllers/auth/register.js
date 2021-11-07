/* eslint-disable no-tabs */
const { User } = require('../../models')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

const { nanoid } = require('nanoid')
const { sendEmail } = require('../../helpers')

const register = async(req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })
	if (user) {
		throw new Conflict('Email in use')
	}
const avatarURL = gravatar.url(email)
const verifyToken = nanoid()
const newUSer = new User({ email, avatarURL, verifyToken })
newUSer.setPassword(password)
await newUSer.save()

const mail = {
to: email,
subject: 'Email confirmation',
html: `<a target="_blank" href="http://loclhost:300/api/users/verify/${verifyToken}">Click here to verify your email</a>`
}

sendEmail(mail)
	res.status(201).json({
		status: 'success',
		code: 201,
		message: 'Registration is successful'
	})
}

module.exports = register
