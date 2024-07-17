import { z } from "zod";

export const loginModel = z.object({
    email: z.string(),
    password: z.string()
})