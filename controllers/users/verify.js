const { NotFound } = require('http-errors')

const { User } = require('../../models')

const verify = async(req, res) => {
    const { verificationToken } = req.params
    const user = await User.findOne({ verifyToken: verificationToken })
    if (!user) {
        throw NotFound('User not found')
    }
    await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null })

    res.json({
        status: 'success',
        code: 200,
        message: 'Email was successfully verified'
    })
}

module.exports = verify
