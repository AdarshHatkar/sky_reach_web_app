import { appZodSchema } from "./modules/app/appZod.js";
import { authZodSchema } from "./modules/auth/authZod.js";
import { gamesZodSchema } from "./modules/games/gamesZod.js";
import { notifyZodSchema } from "./modules/notify/notifyZod.js";
import { referAndEarnZodSchema } from "./modules/referAndEarn/referAndEarnZod.js";
import { supportZodSchema } from "./modules/support/supportZod.js";
import { userZodSchema } from "./modules/user/userZod.js";

export const webAppZodSchemas = {
    auth: authZodSchema,
    app: appZodSchema,
    games: gamesZodSchema,

    notify: notifyZodSchema,
    support: supportZodSchema,

    user: userZodSchema,
    referAndEarn: referAndEarnZodSchema,
};
