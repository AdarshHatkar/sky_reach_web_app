import { ga_deposit_requests_pgNameData } from "@play124ProjectB2f/constants/enumsData.js";
import { z } from "zod";

export const walletZodSchema = {
    getWalletDetails: z.void(),
    getWalletHistory: z.void(),
    getDepositHistory: z.void(),

    getWithdrawalHistory: z.void(),
    getPgData: z.void(),
    submitDepositRequest: z.object({
        amount: z.number().min(1, "must be greater than 0"),

        pgName: z.enum(ga_deposit_requests_pgNameData.array),
        paymentProofFileStoreId: z.number().optional(),
        redirectUrl: z.string().trim().optional(),
    }),
    submitWithdrawalRequest: z.object({
        amount: z.number(),
        methodName: z.string().trim().min(1),
        methodId: z.string().trim().min(1),
    }),
};
