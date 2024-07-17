import { z } from "zod";

export const signupModel = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    phoneNumber : z.string(),
})