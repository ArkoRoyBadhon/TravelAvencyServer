import { serviceBooking } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createBooking = async (data: serviceBooking): Promise<serviceBooking> => {
  console.log('Data', data)

  //   return data
  const result = await prisma.serviceBooking.create({ data })
  return result
}

const getAllBookings = async (): Promise<Partial<serviceBooking>[]> => {
  //   const result = await prisma.serviceBooking.findMany({})
  const result = await prisma.user.findMany({
    include: {
      serviceBooking: true,
    },
  })

  return result
}

const getAllBookingByUser = async (
  id: string,
): Promise<Partial<serviceBooking>[]> => {
  //   const result = await prisma.user.findMany({
  //     where: {
  //       id,
  //     },
  //     include: {
  //       serviceBooking: true,
  //     },
  //   })

  const result = await prisma.serviceBooking.findMany({
    where: {
      bookedBy: id,
    },
  })

  const serviceIdsArray = result.map(e => e.serviceId)

  const matchedServices = await prisma.service.findMany({
    where: {
      id: {
        in: serviceIdsArray,
      },
    },
  })

  //   console.log("SS", result);
  //   console.log('SS', matchedServices)

  return matchedServices
}

const getSingleBookingById = async (
  id: string,
): Promise<serviceBooking | null> => {
  const result = await prisma.serviceBooking.findUnique({
    where: {
      id,
    },
  })

  return result
}

// const getAllBookingByUser = async (id: string): Promise<User | null> => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//   })

//   return result
// }

// const updateBookingById = async (
//   id: string,
//   payload: Partial<User>,
// ): Promise<User> => {
//   const result = await prisma.user.update({
//     where: {
//       id,
//     },
//     data: payload,
//   })

//   return result
// }

const deleteBookingById = async (id: string) => {
  const result = await prisma.serviceBooking.delete({
    where: {
      id,
    },
  })

  return result
}

export const bookingService = {
  createBooking,
  getAllBookings,
  getSingleBookingById,
  getAllBookingByUser,
  //   updateBookingById,
  deleteBookingById,
}
