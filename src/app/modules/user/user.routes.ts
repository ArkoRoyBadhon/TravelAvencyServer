import express from 'express'
import { userController } from './user.controller'
import authPermission from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './user.validations'

const router = express.Router()

router.post(
  '/auth/signup',
  validateRequest(UserValidation.createUser),
  userController.insertIntoDB,
)
router.post('/auth/signin', userController.loginUser)
router.get(
  '/users',
  authPermission(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  userController.getAllUsers,
)
router.get(
  '/normal-users',
  authPermission(ENUM_USER_ROLE.ADMIN),
  userController.getAllNormalUsers,
)
router.get(
  '/users/:id',
  authPermission(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  userController.getSingleUserById,
)
router.patch(
  '/users/:id',
  authPermission(
    ENUM_USER_ROLE.USER,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
  ),
  validateRequest(UserValidation.updateUser),
  userController.updateUserById,
)
router.delete(
  '/users/:id',
  authPermission(ENUM_USER_ROLE.ADMIN),
  userController.deleteUserById,
)

// router.get(
//   '/profile',
//   authPermission(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
//   userController.getProfile,
// )

export const userRoutes = router
