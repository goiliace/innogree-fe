import { z } from 'zod'

const baseUserSchema = z.object({
  email: z.string(),
  password: z.string()
})

const userSchema = z.object({
  id: z.string().nullable(),
  email: z.string(),
  avatar: z.string().nullable(),
  full_name: z.string().nullable(),
  gender: z.boolean().nullable(),
  phone_number: z.string().nullable(),
  role: z.string().default('Phụ huynh')
})
const userRegisterSchema = userSchema.extend({
  password: z.string()
})
const messageSchema = z.object({
  type: z.enum(['success', 'error']).nullable(),
  content: z.string()
})

const authStateSchema = z.object({
  user: userSchema.nullable(),
  token: z.string().nullable(),
  isAuthenticating: z.boolean(),
  isAuthenticated: z.boolean().default(false),
  message: messageSchema
})

export type AuthState = z.infer<typeof authStateSchema>
export type UserRegister = z.infer<typeof userRegisterSchema>
export type User = z.infer<typeof userSchema>
export type Message = z.infer<typeof messageSchema>
export type BaseUser = z.infer<typeof baseUserSchema>
