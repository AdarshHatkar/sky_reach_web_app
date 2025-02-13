import { z } from "zod";

export const upcomingZodSchema = {
    getUpcomingContests: z.object({
        gameId: z.number(),
    }),
    getUpcomingContestDetails: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),
    getAllJoinings: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),
    getUserJoinings: z.object({
        contestId: z.number(),
        gameId: z.number(),
    }),
    addJoinings: z.object({
        contestId: z.number(),
        gameId: z.number(),
        joinersData: z.array(
            z.object({
                teamNumber: z.number(),
                memberPosition: z.number(),
                teamName: z.string(),
                inGameName: z.string(),
                inGameId: z.string(),
            })
        ),
    }),
};
