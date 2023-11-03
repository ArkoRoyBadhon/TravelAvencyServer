/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from '@prisma/client'
import prisma from '../../../shared/prisma'
// import { Request } from 'express'
// import { FileUploadHelper } from '../../../helpers/FileUploadhelper'
// import { IUploadFile } from '../../../interfaces/file'
// import ApiError from '../../../errors/ApiError'
// import httpStatus from 'http-status'

const insertIntoDB = async (data: any): Promise<Service> => {
  // const file = req.file as IUploadFile
  // const uploadedImage = await FileUploadHelper.uploadToCloudinary(file)

  // if (uploadedImage) {
  //   req.body.img = uploadedImage.secure_url
  // const data = req.body
  console.log('Data', data)

  const result = await prisma.service.create({ data })
  return result
  // } else {
  // throw new ApiError(httpStatus.NO_CONTENT, 'Something went wrong')
  // }
}

const getAllServices = async (): Promise<Partial<Service>[] | null> => {
  // const result = await prisma.service.findMany()

  // return result

  try {
    const result = await prisma.service.findMany()
    return result
  } catch (error) {
    // Handle errors
    console.error('Error occurred:', error)
    return null
  }
}

const getReviewsByService = async (
  id: string,
): Promise<Partial<Service> | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
    include: {
      Reviews: true,
    },
  })

  return result
}

const updateService = async (
  id: string,
  payload: any,
): Promise<Partial<Service> | null> => {
  const result = await prisma.service.update({
    where: {
      id,
    },
    data: payload,
  })

  return result
}

const deleteService = async (id: string): Promise<Partial<Service> | null> => {
  await prisma.reviews.deleteMany({ where: { serviceId: id } })
  const result = await prisma.service.delete({
    where: {
      id,
    },
  })

  return result
}

export const serviceService = {
  insertIntoDB,
  getAllServices,
  getReviewsByService,
  updateService, // pricing, descriptions and availability
  deleteService,
}
