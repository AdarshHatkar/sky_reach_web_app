import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createZustandSelectors } from "../helpers/zustand/createZustandSelectors";
import { storeBaseName } from "./common";

type TUtilsStore = {
    walletPageUrl: string;

    updateWalletPageUrl: (walletPageUrl: string) => void;
};

const utilsStoreBase = create<TUtilsStore>()(
    devtools(
        persist(
            (set) => ({
                walletPageUrl: "",

                updateWalletPageUrl: (walletPageUrl: string) => set({ walletPageUrl }),
            }),
            {
                name: `${storeBaseName}-utilsStore`,
            }
        )
    )
);

export const utilsStore = createZustandSelectors(utilsStoreBase);
