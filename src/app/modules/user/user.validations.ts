import { z } from 'zod'

const createUser = z.object({
  body: z.object({
    name: z.string({
      required_error: 'user name is required',
    }),
    email: z.string({
      required_error: 'email name is required',
    }),
    password: z.string({
      required_error: 'password name is required',
    }),
    contactNo: z.string({
      required_error: 'contactNo name is required',
    }),
    age: z.number().optional(),
    role: z.string().optional(),
    bloodGroup: z.string().optional(),
    city: z.string().optional(),
    address: z.string().optional(),
  }),
})

const updateUser = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    contactNo: z.string().optional(),
    age: z.number().optional(),
    role: z.string().optional(),
    bloodGroup: z.string().optional(),
    city: z.string().optional(),
    address: z.string().optional(),
  }),
})

export const UserValidation = {
  createUser,
  updateUser,
}
