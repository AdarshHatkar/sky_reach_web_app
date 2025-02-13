export interface $DbEnums {}


export namespace $DbEnums {
  type ga_user_refer_configs_referRewardWallet = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_payment_gateways_activePgName = "manual_upi" | "paglamc_fun"
  type ga_admin_permissions_name = "view_dashboard" | "manage_dashboard" | "view_admins" | "manage_admins" | "view_staffs" | "manage_staffs" | "view_settings" | "manage_settings"
  type ga_file_store_fileCategory = "game_thumbnails" | "contest_thumbnails" | "carousel_thumbnails" | "notification_thumbnails" | "user_profile_image" | "user_deposit_proof" | "user_challenge_proof" | "android_icon_bundle" | "android_icon" | "android_google_service_json" | "android_apk_builds" | "android_aab_builds" | "android_notification_bundle" | "admin_profile_image" | "staff_profile_image"
  type ga_user_wallet_transactions_walletType = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_withdrawal_methods_methodType = "mobileNumber" | "email" | "upiId"
  type otp_logs_purpose = "register" | "forgot_password"
  type ga_admin_logs_actionType = "authentication" | "staffCrud" | "settingCrud" | "staffRoleCrud" | "adminCrud" | "adminRoleCrud"
  type ga_user_refer_configs_registerBonusWallet = "depositWallet" | "winWallet" | "bonusWallet"
  type ga_user_wallet_transactions_transactionType = "credit" | "debit"
  type ga_contests_status = "upcoming" | "ongoing" | "cancelled" | "cancelling" | "resulted" | "resulting"
  type ga_deposit_requests_pgName = "manual_upi" | "paglamc_fun"
  type ga_admins_status = "active" | "banned"
  type ga_deposit_requests_status = "pending" | "approved" | "rejected"
  type ga_staffs_status = "active" | "banned"
  type ga_games_gameType = "contest" | "challenge"
  type ga_withdrawal_requests_status = "pending" | "approved" | "rejected"
  type ga_challenges_creatorResult = "win" | "loss" | "pending"
  type ga_challenges_accepterResult = "win" | "loss" | "pending"
  type ga_users_status = "active" | "banned"
  type ga_challenges_status = "created" | "accepted" | "in_progress" | "completed" | "cancelled" | "expired"
  type ga_staff_permissions_name = "view_users" | "create_users" | "update_users" | "delete_users" | "view_games" | "create_games" | "update_games" | "delete_games" | "view_super_games" | "create_super_games" | "update_super_games" | "delete_super_games" | "view_contests" | "create_contests" | "update_contests" | "delete_contests" | "publish_contest_result" | "update_contest_result" | "publish_challenge_result" | "update_challenge_result" | "view_deposit_requests" | "create_deposit_requests" | "update_deposit_requests" | "delete_deposit_requests" | "view_withdrawal_requests" | "create_withdrawal_requests" | "update_withdrawal_requests" | "delete_withdrawal_requests" | "view_file_store" | "create_file_store" | "update_file_store" | "delete_file_store" | "view_announcements" | "create_announcements" | "update_announcements" | "delete_announcements" | "view_carousels" | "create_carousels" | "update_carousels" | "delete_carousels" | "view_push_notifications" | "create_push_notifications" | "update_push_notifications" | "delete_push_notifications" | "view_dashboard" | "create_dashboard" | "update_dashboard" | "delete_dashboard" | "view_challenges" | "create_challenges" | "update_challenges" | "delete_challenges"
  type ga_staff_logs_actionType = "authentication" | "userCrud" | "fileCrud" | "gameCrud" | "contestCrud" | "notifyCrud" | "userRequestCrud" | "challengeCrud"
}
