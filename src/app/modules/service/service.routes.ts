/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import authPermission from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { serviceController } from './service.controller'
// import { FileUploadHelper } from '../../../helpers/FileUploadhelper'

const router = express.Router()

// router.post(
//   '/service',
//   FileUploadHelper.upload.single('file'),
//   (req: Request, res: Response, next: NextFunction) => {
//     req.body = JSON.parse(req.body.data)
//     return serviceController.insertIntoDB(req, res, next)
//   },
// )

router.post('/service', serviceController.insertIntoDB)
router.get(
  '/services',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  serviceController.getAllServices,
)

router.get(
  '/service/:id',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  serviceController.getReviewsByService,
)

router.patch(
  '/service/:id',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  serviceController.updateService,
)

router.delete(
  '/service/:id',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  serviceController.deleteService,
)

// router.get(
//   '/profile',
//   authPermission(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
//   userController.getProfile,
// )

export const serviceRoutes = router
