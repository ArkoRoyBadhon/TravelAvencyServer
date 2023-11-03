/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { ILoginAllUser, ILoginAllUserResponse } from '../../../interfaces/auth'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'
import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import bcrypt from 'bcrypt'

const insertIntoDB = async (data: User): Promise<Partial<User>> => {
  console.log('info', data)

  const result = await prisma.user.create({
    data,
    // select: {}
  })

  return result
}

const loginUser = async (
  payload: ILoginAllUser,
): Promise<ILoginAllUserResponse> => {
  const { email, password } = payload

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }
  // console.log('Password', password)
  // console.log('database Password', isUserExist?.password)
  // const dd = await bcrypt.compare(password, isUserExist?.password)
  // console.log('DD', dd)

  if (
    isUserExist.password &&
    !(await bcrypt.compare(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  // create access token & refresh token
  const { id: userId, role } = isUserExist

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  )

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}

const getAllUsers = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      contactNo: true,
      age: true,
      role: true,
      bloodGroup: true,
      city: true,
      address: true,
    },
  })

  return result
}
const getAllNormalUsers = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    where: {
      role: 'user',
    },
    select: {
      id: true,
      name: true,
      email: true,
      contactNo: true,
      age: true,
      role: true,
      bloodGroup: true,
      city: true,
      address: true,
    },
  })

  return result
}

const getSingleUserById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return result
}

const updateUserById = async (
  id: string,
  payload: Partial<User>,
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  })

  return result
}

const deleteUserById = async (id: string) => {
  const services = await prisma.service.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
    },
  })

  const deleteServiceReviews = services.map(service =>
    prisma.reviews.deleteMany({
      where: {
        serviceId: service.id,
      },
    }),
  )

  const deleteServices = prisma.service.deleteMany({
    where: {
      userId: id,
    },
  })

  const deleteUserBookings = prisma.serviceBooking.deleteMany({
    where: {
      bookedBy: id,
    },
  })

  const deleteUser = prisma.user.delete({
    where: {
      id,
    },
  })

  const result = await prisma.$transaction([
    ...deleteServiceReviews,
    deleteServices,
    deleteUserBookings,
    deleteUser,
  ])

  return result
}

export const userService = {
  insertIntoDB,
  loginUser,
  getAllUsers,
  getAllNormalUsers,
  getSingleUserById,
  updateUserById,
  deleteUserById,
  //   getProfile,
}
