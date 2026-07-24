import * as z from 'zod'

export const signupSchema = z.object({
    name: z.string(),

    email: 
    z.string().email("Please enter a valid email address"),

    password: z
        .string()
        .min(6, "at least 6 character")
        .regex(/[A-Z]/, "at least one UpperCase letter")
        .regex(/[0-9]/, "must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}<>]/, "must contain al least one special character")

}) 

export const loginSchema = z.object({

    email: 
    z.string().email("Please enter a valid email address"),

    password: z
        .string()
        .min(6, "at least 6 character")
        .regex(/[A-Z]/, "at least one UpperCase letter")
        .regex(/[0-9]/, "must contain at least one number")
        .regex(/[!@#$%^&*(),.?":{}<>]/, "must contain al least one special character")

}) 