import { z } from "zod";

export const notifyZodSchema = {

    getAnnouncements: z.object({

        take: z.number()

    }),
    getCarousels: z.void(),


};