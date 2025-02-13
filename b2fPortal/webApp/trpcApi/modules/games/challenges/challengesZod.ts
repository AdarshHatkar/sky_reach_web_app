import { z } from "zod";
import { chatsZodSchema } from "./chats/chatsZod.js";

export const challengesZodSchema = {
    chats: chatsZodSchema,
    getActiveChallenges: z.object({
        gameId: z.number().positive(),
    }),
    getMyChallenges: z.object({
        gameId: z.number().positive(),
    }),
    getResultedChallenges: z.object({
        gameId: z.number().positive(),
    }),
    getDetails: z.object({
        challengeId: z.number().positive(),
    }),
    createChallenge: z.object({
        gameId: z.number().positive(),
        entryPerPlayer: z
            .number()
            .positive()
            .min(10)
            .refine((value) => value % 10 === 0, {
                message: "entryPerPlayer must be a multiple of 10",
            }),
        creatorInGameName: z
            .string()
            .min(1, "Min length should be 1")
            .max(50, "Max length should be 50"),
        accepterPassword: z
            .string()
            .min(1, "Min length should be 1")
            .max(50, "Max length should be 50")
            .optional(),
    }),
    acceptChallenge: z.object({
        challengeId: z.number().positive(),

        accepterInGameName: z
            .string()
            .min(1, "Min length should be 1")
            .max(50, "Max length should be 50"),
        accepterPassword: z
            .string()
            .min(1, "Min length should be 1")
            .max(50, "Max length should be 50")
            .optional(),
    }),
    cancelChallenge: z.object({
        challengeId: z.number().positive(),
    }),
    updateRoomDetails: z.object({
        challengeId: z.number().positive(),
        roomId: z
            .string()

            .max(50, "Max length should be 50"),
        roomPassword: z
            .string()

            .max(50, "Max length should be 50"),
    }),
    updateWinResult: z.object({
        challengeId: z.number().positive(),
        proofFileStoreId: z.number().positive(),
    }),
    updateLossResult: z.object({
        challengeId: z.number().positive(),
    }),
};
