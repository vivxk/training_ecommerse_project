const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)
// auth need to be added
router.get('/history', auth, userCtrl.history)

router.get('/getuser', auth, userCtrl.getUser)

router.post('/post/history', auth, userCtrl.posthistory)


module.exports = router