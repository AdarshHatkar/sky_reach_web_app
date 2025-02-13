import { z } from "zod";
import { ongoingZodSchema } from "./ongoing/ongoingZod.js";
import { resultedZodSchema } from "./resulted/resultedZod.js";
import { upcomingZodSchema } from "./upcoming/upcomingZod.js";

export const contestsZodSchema = {
    upcoming: upcomingZodSchema,
    ongoing: ongoingZodSchema,
    resulted: resultedZodSchema,
    getRules: z.object({
        rulesCollectionId: z.number().positive(),
    }),
};
