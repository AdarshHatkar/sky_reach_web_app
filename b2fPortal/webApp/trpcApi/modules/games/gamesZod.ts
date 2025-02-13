import { z } from "zod";
import { contestsZodSchema } from "./contests/contestsZod.js";
import { challengesZodSchema } from "./challenges/challengesZod.js";

export const gamesZodSchema = {
    challenges: challengesZodSchema,
    contests: contestsZodSchema,
    getGames: z.void(),
    getSuperGames: z.void(),
    getContestGames: z.object({
        superGameId: z.number(),
    }),
    getChallengeGames: z.void(),
};
