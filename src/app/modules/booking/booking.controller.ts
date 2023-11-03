import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { bookingService } from './booking.service'

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await bookingService.createBooking(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully!',
    data: result,
  })
})

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await bookingService.getAllBookings()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Bookings retrieved successfully!',
    data: result,
  })
})

const getAllBookingByUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookingService.getAllBookingByUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Bookings retrieved successfully!',
    data: result,
  })
})

const getSingleBookingById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookingService.getSingleBookingById(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single booking retrieved successfully!',
    data: result,
  })
})

const deleteBookingById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookingService.deleteBookingById(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single booking deleted successfully!',
    data: result,
  })
})

export const bookingController = {
  createBooking,
  getAllBookings,
  getAllBookingByUser,
  getSingleBookingById,
  deleteBookingById,
}
