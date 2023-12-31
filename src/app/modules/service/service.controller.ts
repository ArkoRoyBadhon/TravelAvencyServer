import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { serviceService } from './service.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceService.insertIntoDB(req.body)

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

const getReviewsByService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await serviceService.getReviewsByService(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review retrieved successfully!',
    data: result,
  })
})

const updateService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const payload = req.body
  console.log('id', id, 'data', payload)

  const result = await serviceService.updateService(id, payload)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Updated successfully!',
    data: result,
  })
})

const deleteService = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  console.log('del', id)

  const result = await serviceService.deleteService(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Deleted successfully!',
    data: result,
  })
})

export const serviceController = {
  insertIntoDB,
  getAllServices,
  getReviewsByService,
  updateService,
  deleteService,
}
