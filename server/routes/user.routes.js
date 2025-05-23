import { Router } from 'express'
import { upload } from '../middleware/multer.middleware.js'
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  getUserData
} from '../controllers/user.controller.js'
import { verfiyJWT } from '../middleware/user.middleware.js'
const router = Router()

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)
router.route('/getUser').get(verfiyJWT, getUserData)

// Protected routes
router.route('/logout').post(verfiyJWT, logoutUser)
router.route('/refresh-token').post(refreshAccessToken)

export default router
