import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { unixTimeStampInSeconds } from "../helpers/utilityHelper";
import { createZustandSelectors } from "../helpers/zustand/createZustandSelectors";
import { storeBaseName } from "./common";

type TUserData = {
    userId: number,
    username: string
    firstName: string
    lastName: string

}
type TUpdateUsername = Pick<TUserData, "username">
type TUserStore =
    TUserData & {



        updatedAt: number


        clearTokens: () => void
        setUserData: ({ username }: TUserData) => void
        updateUsername: ({ username }: TUpdateUsername) => void
    }



const userStoreBase = create<TUserStore>()(
    devtools(
        persist(
            (set) => ({
                userId: 0,
                username: "",
                firstName: "",
                lastName: "",

                updatedAt: 0,
                setUserData: ({ userId, username, firstName, lastName }) => set({ userId, username, firstName, lastName, updatedAt: unixTimeStampInSeconds() }),
                updateUsername: ({ username }) => set({ username, updatedAt: unixTimeStampInSeconds() }),

                clearTokens: () => set(
                    {
                        userId: 0,
                        username: "",
                        firstName: "",
                        lastName: "",
                        updatedAt: unixTimeStampInSeconds()
                    }),


            }),
            {
                name: `${storeBaseName}-userStore`,
            }
        )
    )
);

export const userStore = createZustandSelectors(userStoreBase);
