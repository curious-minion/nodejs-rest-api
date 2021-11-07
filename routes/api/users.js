const express = require('express')
const router = express.Router()

const { controllerWrapper, authenticate, upload } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

router.post('/verify', controllerWrapper(ctrl.secondVerification))
router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))
router.patch('/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.updateAvatar))

module.exports = router
