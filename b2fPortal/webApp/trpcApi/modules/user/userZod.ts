import { profileZodSchema } from "./profile/profileZod.js";
import { walletZodSchema } from "./wallet/walletZod.js";

export const userZodSchema = {
    profile: profileZodSchema,
    wallet: walletZodSchema,
};
