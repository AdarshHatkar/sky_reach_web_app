import { z } from "zod";


export const appZodSchema = {
    verifyAppSlug: z.object({
        appSlug: z.string().min(1),
    }),
}; 