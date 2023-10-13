import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { serviceService } from './service.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.insertIntoDB(req)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully!',
    data: result,
  })
})

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.getAllServices()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully!',
    data: result,
  })
})

export const serviceController = {
  insertIntoDB,
  getAllServices,
}
