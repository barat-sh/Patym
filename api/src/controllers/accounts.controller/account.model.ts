import { z } from "zod";

export const accountModel = z.object({
    userId: z.number().int(),
    balance: z.number().refine((val) => val % 1 !== 0, {
        message: "Balance must be a float",
      }),
})