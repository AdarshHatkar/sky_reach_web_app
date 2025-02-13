// const fileStoreCategoriesArr = [
//     "thumbnails",
//     "apk_assets",
//     "user_assets",
//     "android_builds",
// ] as const;

// export type TFileStoreCategory = (typeof fileStoreCategoriesArr)[number];

// type TFileStoreCategoryObj = {
//     [K in TFileStoreCategory]: K;
// };

// const fileStoreCategoryObj = Object.fromEntries(
//     fileStoreCategoriesArr.map((status) => [status, status])
// ) as TFileStoreCategoryObj;

// const thumbnailsSubCategoriesArr = ["contests", "games", "carousels", "notifications"] as const;

// type TThumbnailsSubCategory = (typeof thumbnailsSubCategoriesArr)[number];

// type TThumbnailsSubCategoryObject = {
//     [K in TThumbnailsSubCategory]: K;
// };

// const thumbnailsSubCategoryObj = Object.fromEntries(
//     thumbnailsSubCategoriesArr.map((status) => [status, status])
// ) as TThumbnailsSubCategoryObject;

// const thumbnailsSubCategories = {
//     arr: thumbnailsSubCategoriesArr,
//     obj: thumbnailsSubCategoryObj,
// };

// const androidBuildsSubCategoriesArr = ["apk", "aab"] as const;

// type TAndroidBuildsSubCategory = (typeof androidBuildsSubCategoriesArr)[number];

// type TAndroidBuildsSubCategoryObject = {
//     [K in TAndroidBuildsSubCategory]: K;
// };

// const androidBuildsSubCategoryObj = Object.fromEntries(
//     androidBuildsSubCategoriesArr.map((status) => [status, status])
// ) as TAndroidBuildsSubCategoryObject;

// const androidBuildsSubCategories = {
//     arr: androidBuildsSubCategoriesArr,
//     obj: androidBuildsSubCategoryObj,
// };

// const apkAssetsSubCategoriesArr = [
//     "apkIcon",
//     "apkIconBundle",
//     "notificationIconBundle",
//     "googleServicesJson",
// ] as const;

// type TApkAssetsSubCategory = (typeof apkAssetsSubCategoriesArr)[number];

// type TApkAssetsSubCategoryObject = {
//     [K in TApkAssetsSubCategory]: K;
// };

// const apkAssetsSubCategoryObj = Object.fromEntries(
//     apkAssetsSubCategoriesArr.map((status) => [status, status])
// ) as TApkAssetsSubCategoryObject;

// const apkAssetsSubCategories = {
//     arr: apkAssetsSubCategoriesArr,
//     obj: apkAssetsSubCategoryObj,
// };

// export const apkAssetsSubCategoriesArrOnlyUploadableFromFileStore = [
//     apkAssetsSubCategories.obj.apkIconBundle,
//     apkAssetsSubCategories.obj.googleServicesJson,
// ] as const;

// const userAssetsSubCategoriesArr = ["depositProof"] as const;

// type TUserAssetsSubCategory = (typeof userAssetsSubCategoriesArr)[number];

// type TUserAssetsSubCategoryObject = {
//     [K in TUserAssetsSubCategory]: K;
// };

// const userAssetsSubCategoryObj = Object.fromEntries(
//     userAssetsSubCategoriesArr.map((status) => [status, status])
// ) as TUserAssetsSubCategoryObject;

// const userAssetsSubCategories = {
//     arr: userAssetsSubCategoriesArr,
//     obj: userAssetsSubCategoryObj,
// };

// const allSubCategoriesArr = [
//     ...thumbnailsSubCategories.arr,
//     ...apkAssetsSubCategories.arr,
//     ...userAssetsSubCategories.arr,
// ] as const;

// type TAllSubCategory = (typeof allSubCategoriesArr)[number];

// type TAllSubCategoryObject = {
//     [K in TAllSubCategory]: K;
// };

// const allSubCategoryObj = Object.fromEntries(
//     allSubCategoriesArr.map((status) => [status, status])
// ) as TAllSubCategoryObject;

// const allSubCategories = {
//     arr: allSubCategoriesArr,
//     obj: allSubCategoryObj,
// };

// export const fileStoreCategories = {
//     arr: fileStoreCategoriesArr,
//     obj: fileStoreCategoryObj,
//     subCategories: {
//         all: allSubCategories,

//         thumbnails: thumbnailsSubCategories,
//         apkAssets: apkAssetsSubCategories,
//         userAssets: userAssetsSubCategories,
//         androidBuilds: androidBuildsSubCategories,
//     },
// } as const;

// // type of all subcategories

// type TFileStoreAllSubCategoriesMixed =
//     (typeof fileStoreCategories)["subCategories"][keyof (typeof fileStoreCategories)["subCategories"]]["arr"][number];

// // type of all subcategories dynamic on based of category
// export type TFileStoreSubCategoriesDynamic<T extends TFileStoreCategory> =
//     (typeof fileStoreCategories)["subCategories"][T]["arr"][number];
