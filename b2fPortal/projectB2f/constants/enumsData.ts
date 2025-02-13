import type { $Enums } from "@play124Prisma/generatedClient/index.js";

type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

function stringUnionToArray<T>() {
    return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) => elements;
}
function arrayToObject<T extends string | number | symbol>(arr: T[]): { [K in T]: K } {
    return arr.reduce(
        (acc, curr) => {
            acc[curr] = curr;
            return acc;
        },
        {} as { [K in T]: K }
    );
}

/** Data for enums */

// $Enums.ga_file_store_fileCategory

const ga_file_store_fileCategoryArr = stringUnionToArray<$Enums.ga_file_store_fileCategory>()(
    "game_thumbnails",
    "contest_thumbnails",
    "carousel_thumbnails",
    "notification_thumbnails",
    "user_profile_image",
    "user_deposit_proof",
    "user_challenge_proof",
    "android_icon_bundle",
    "android_icon",
    "android_notification_bundle",
    "android_google_service_json",
    "android_apk_builds",
    "android_aab_builds",
    "admin_profile_image",
    "staff_profile_image"
);

export const ga_file_store_fileCategoryData = {
    array: ga_file_store_fileCategoryArr,
    object: arrayToObject(ga_file_store_fileCategoryArr),
};

const ga_users_statusArr = stringUnionToArray<$Enums.ga_users_status>()("active", "banned");

export const ga_users_statusData = {
    array: ga_users_statusArr,
    object: arrayToObject(ga_users_statusArr),
};

const ga_staffs_statusArr = stringUnionToArray<$Enums.ga_staffs_status>()("active", "banned");

export const ga_staffs_statusData = {
    array: ga_staffs_statusArr,
    object: arrayToObject(ga_staffs_statusArr),
};

const ga_games_gameTypeArr = stringUnionToArray<$Enums.ga_games_gameType>()("contest", "challenge");

export const ga_games_gameTypeData = {
    array: ga_games_gameTypeArr,
    object: arrayToObject(ga_games_gameTypeArr),
};

const ga_admins_statusArr = stringUnionToArray<$Enums.ga_admins_status>()("active", "banned");

export const ga_admins_statusData = {
    array: ga_admins_statusArr,
    object: arrayToObject(ga_admins_statusArr),
};

const ga_user_wallet_transactions_walletTypeArr =
    stringUnionToArray<$Enums.ga_user_wallet_transactions_walletType>()(
        "depositWallet",
        "winWallet",

        "bonusWallet"
    );

export const ga_user_wallet_transactions_walletTypeData = {
    array: ga_user_wallet_transactions_walletTypeArr,
    object: arrayToObject(ga_user_wallet_transactions_walletTypeArr),
};

const ga_user_wallet_transactions_transactionTypeArr =
    stringUnionToArray<$Enums.ga_user_wallet_transactions_transactionType>()("credit", "debit");

export const ga_user_wallet_transactions_transactionTypeData = {
    array: ga_user_wallet_transactions_transactionTypeArr,
    object: arrayToObject(ga_user_wallet_transactions_transactionTypeArr),
};

const ga_withdrawal_methods_methodTypeArr =
    stringUnionToArray<$Enums.ga_withdrawal_methods_methodType>()("mobileNumber", "email", "upiId");

export const ga_withdrawal_methods_methodTypeData = {
    array: ga_withdrawal_methods_methodTypeArr,
    object: arrayToObject(ga_withdrawal_methods_methodTypeArr),
};

// $Enums.ga_deposit_requests_status;

const ga_deposit_requests_statusArr = stringUnionToArray<$Enums.ga_deposit_requests_status>()(
    "pending",
    "approved",
    "rejected"
);
export const ga_deposit_requests_statusData = {
    array: ga_deposit_requests_statusArr,
    object: arrayToObject(ga_deposit_requests_statusArr),
};

// $Enums.ga_withdrawal_requests_status;

const ga_withdrawal_requests_statusArr = stringUnionToArray<$Enums.ga_withdrawal_requests_status>()(
    "pending",
    "approved",
    "rejected"
);
export const ga_withdrawal_requests_statusData = {
    array: ga_withdrawal_requests_statusArr,
    object: arrayToObject(ga_withdrawal_requests_statusArr),
};

// $Enums.ga_payment_gateway_names;

const ga_payment_gateway_namesArr = stringUnionToArray<$Enums.ga_payment_gateways_activePgName>()(
    "manual_upi",
    "paglamc_fun"
);
export const ga_payment_gateway_namesData = {
    array: ga_payment_gateway_namesArr,
    object: arrayToObject(ga_payment_gateway_namesArr),
};

// $Enums.ga_deposit_requests_pgName;

const ga_deposit_requests_pgNameArr = stringUnionToArray<$Enums.ga_deposit_requests_pgName>()(
    "manual_upi",
    "paglamc_fun"
);
export const ga_deposit_requests_pgNameData = {
    array: ga_deposit_requests_pgNameArr,
    object: arrayToObject(ga_deposit_requests_pgNameArr),
};

// $Enums.ga_contests_status

const ga_contests_statusArr = stringUnionToArray<$Enums.ga_contests_status>()(
    "upcoming",
    "ongoing",
    "cancelled",
    "cancelling",
    "resulted",
    "resulting"
);
export const ga_contests_statusData = {
    array: ga_contests_statusArr,
    object: arrayToObject(ga_contests_statusArr),
};
