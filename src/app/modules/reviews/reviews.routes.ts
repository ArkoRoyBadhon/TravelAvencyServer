/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import authPermission from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/users'
import { reviewsController } from './reviews.controller'

const router = express.Router()

router.post('/review', reviewsController.insertIntoDB)
router.get(
  '/review',
  //   authPermission(ENUM_USER_ROLE.ADMIN),
  reviewsController.getAllReviews,
)

export const reviewRoutes = router
