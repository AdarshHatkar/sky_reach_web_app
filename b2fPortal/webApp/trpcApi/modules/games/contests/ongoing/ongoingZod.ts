import { z } from "zod";

export const ongoingZodSchema = {
    getOngoingContests: z.object({
        gameId: z.number(),
    }),
    getOngoingContestDetails: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),
};
