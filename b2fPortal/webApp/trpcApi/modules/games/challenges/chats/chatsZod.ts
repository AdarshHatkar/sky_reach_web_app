import { z } from "zod";

export const chatsZodSchema = {
    getChatMessages: z.object({
        challengeId: z.number().positive(),
    }),
    sendChatMessage: z.object({
        challengeId: z.number().positive(),
        message: z.string().min(1, "Min length should be 1").max(500, "Max length should be 500"),
    }),
};
