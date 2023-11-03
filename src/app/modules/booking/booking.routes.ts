/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import authPermission from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { bookingController } from './booking.controller'

const router = express.Router()

router.post('/create-booking', bookingController.createBooking)
router.get(
  '/all-booking',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  bookingController.getAllBookings,
)

router.get(
  '/all-booking/:id',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  bookingController.getAllBookingByUser,
)

router.get(
  '/booking/:id',
  // authPermission(ENUM_USER_ROLE.ADMIN),
  bookingController.getSingleBookingById,
)

// router.patch(
//   '/service/:id',
//   // authPermission(ENUM_USER_ROLE.ADMIN),
//   bookingController.updateService,
// )

router.delete(
  '/booking/:id',
  //   authPermission(ENUM_USER_ROLE.ADMIN),
  bookingController.deleteBookingById,
)

// router.get(
//   '/profile',
//   authPermission(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
//   userController.getProfile,
// )

export const bookingRoutes = router
