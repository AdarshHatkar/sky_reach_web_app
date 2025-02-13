import { z } from "zod";

export const profileZodSchema = {
    getProfile: z.void(),
    updateProfile: z.object({
        firstName: z.string().min(1).max(50),
        lastName: z.string().min(1).max(50),
        username: z.string().min(1).max(20),
        email: z.string().email().max(100),
        countryCode: z.string().min(1).max(5),
        mobileNumber: z.string().min(10).max(10),
        profileFileStoreId: z.number().optional().nullable(),
    }),
};
