import { Reviews, Service } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createReview = async (data: Reviews): Promise<Reviews> => {
  console.log('review', data)

  const result = await prisma.reviews.create({ data })
  return result
}

const getAllReviews = async (): Promise<Partial<Service>[] | null> => {
  const result = await prisma.reviews.findMany()

  return result
}

export const reviewService = {
  createReview,
  getAllReviews,
}
