import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { reviewService } from './reviews.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewService.createReview(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review created successfully!',
    data: result,
  })
})

const getAllReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await reviewService.getAllReviews()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully!',
    data: result,
  })
})

export const reviewsController = {
  insertIntoDB,
  getAllReviews,
}
