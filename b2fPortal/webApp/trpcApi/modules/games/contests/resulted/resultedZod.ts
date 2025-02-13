import { z } from "zod";

export const resultedZodSchema = {
    getResultedContests: z.object({
        gameId: z.number(),
    }),
    getResultedContestDetails: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),

    getCancelledContestDetails: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),
};
