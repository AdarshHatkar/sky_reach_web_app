export interface $DbEnums {}


export namespace $DbEnums {
  type ga_user_refer_configs_referRewardWallet = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_payment_gateways_activePgName = "manual_upi" | "paglamc_fun"
  type ga_admin_permissions_name = "view_dashboard" | "manage_dashboard" | "view_admins" | "manage_admins" | "view_staffs" | "manage_staffs" | "view_settings" | "manage_settings"
  type ga_file_store_fileCategory = "game_thumbnails" | "contest_thumbnails" | "carousel_thumbnails" | "notification_thumbnails" | "user_profile_image" | "user_deposit_proof" | "user_challenge_proof" | "android_icon_bundle" | "android_icon" | "android_google_service_json" | "android_apk_builds" | "android_aab_builds" | "android_notification_bundle" | "admin_profile_image" | "staff_profile_image"
  type ga_staff_logs_actionType = "authentication" | "userCrud" | "fileCrud" | "gameCrud" | "contestCrud" | "notifyCrud" | "userRequestCrud"
  type ga_user_wallet_transactions_walletType = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_withdrawal_methods_methodType = "mobileNumber" | "email" | "upiId"
  type ga_admin_logs_actionType = "authentication" | "staffCrud" | "settingCrud" | "staffRoleCrud" | "adminCrud" | "adminRoleCrud"
  type ga_user_refer_configs_registerBonusWallet = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_user_wallet_transactions_transactionType = "credit" | "debit"
  type ga_contests_status = "upcoming" | "ongoing" | "cancelled" | "cancelling" | "resulted" | "resulting"
  type ga_deposit_requests_pgName = "manual_upi" | "paglamc_fun"
  type ga_games_gameType = "contest" | "challenge"
  type ga_admins_status = "active" | "banned"
  type ga_deposit_requests_status = "pending" | "approved" | "rejected"
  type ga_staffs_status = "active" | "banned"
  type ga_withdrawal_requests_status = "pending" | "approved" | "rejected"
  type ga_challenges_creatorResult = "win" | "loss" | "pending"
  type ga_challenges_accepterResult = "win" | "loss" | "pending"
  type ga_users_status = "active" | "banned"
  type ga_challenges_status = "created" | "accepted" | "in_progress" | "completed" | "cancelled" | "expired"
  type ga_staff_permissions_name = "view_users" | "manage_users" | "view_games" | "manage_games" | "view_contests" | "manage_contests" | "view_deposit_requests" | "manage_deposit_requests" | "view_withdrawal_requests" | "manage_withdrawal_requests" | "view_file_store" | "manage_file_store" | "view_announcements" | "manage_announcements" | "view_carousels" | "manage_carousels" | "view_push_notifications" | "manage_push_notifications" | "view_dashboard" | "manage_dashboard" | "view_challenges" | "manage_challenges"
  type otp_logs_purpose = "register" | "forgot_password"
}
