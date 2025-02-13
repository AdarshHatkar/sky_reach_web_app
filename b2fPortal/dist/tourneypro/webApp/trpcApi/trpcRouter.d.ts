declare const router: import("express-serve-static-core").Router;
export { router as tourneyproWebAppTrpcRestRouter };
export declare const tourneyproWebAppTrpcRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: typeof import("superjson").default;
}>, {
    auth: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        register: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                tourneypro: Required<{
                    appSlug?: string;
                    appId?: number;
                }>;
            };
            _input_in: {
                firstName?: string;
                lastName?: string;
                username?: string;
                countryCode?: string;
                mobileNumber?: string;
                email?: string;
                password?: string;
                referralCode?: string;
                otp?: number;
            };
            _input_out: {
                firstName?: string;
                lastName?: string;
                username?: string;
                countryCode?: string;
                mobileNumber?: string;
                email?: string;
                password?: string;
                referralCode?: string;
                otp?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                otpLogId: number;
            };
        } | {
            status: "success" | "error";
            message: string;
            result?: {
                accessToken: string;
                refreshToken: string;
                userData: {
                    userId: number;
                    username: string;
                    firstName: string;
                    lastName: string;
                };
            };
        }>;
        forgotPassword: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                tourneypro: Required<{
                    appSlug?: string;
                    appId?: number;
                }>;
            };
            _input_in: {
                mobileNumber?: string;
                otp?: number;
                newPassword?: string;
            };
            _input_out: {
                mobileNumber?: string;
                otp?: number;
                newPassword?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                otpLogId: number;
                userId: number;
            };
        } | {
            status: "success" | "error";
            message: string;
            result?: {
                accessToken: string;
                refreshToken: string;
                userData: {
                    userId: number;
                    username: string;
                    firstName: string;
                    lastName: string;
                };
            };
        }>;
        login: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                tourneypro: Required<{
                    appSlug?: string;
                    appId?: number;
                }>;
            };
            _input_in: {
                password?: string;
                emailOrMobileNumberOrUsername?: string;
            };
            _input_out: {
                password?: string;
                emailOrMobileNumberOrUsername?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                accessToken: string;
                refreshToken: string;
                userData: {
                    userId: number;
                    username: string;
                    firstName: string;
                    lastName: string;
                };
            };
        }>;
        refreshToken: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                refreshToken?: string;
            };
            _input_out: {
                refreshToken?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                accessToken: string;
            };
        }>;
    }>;
    app: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        verifyAppSlug: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: object;
            _input_in: {
                appSlug?: string;
            };
            _input_out: {
                appSlug?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                appId: number;
                appName: string;
                appLogo: string;
            };
        }>;
    }>;
    games: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        challenges: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: typeof import("superjson").default;
        }>, {
            chats: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>, {
                getChatMessages: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        challengeId?: number;
                    };
                    _input_out: {
                        challengeId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        message: string;
                        challengeId: number;
                        challengeChatId: number;
                        senderId: number;
                        createdAt: number;
                    }[];
                }>;
                sendChatMessage: import("@trpc/server").BuildProcedure<"mutation", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        message?: string;
                        challengeId?: number;
                    };
                    _input_out: {
                        message?: string;
                        challengeId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        message: string;
                        challengeId: number;
                        challengeChatId: number;
                        senderId: number;
                        createdAt: number;
                    };
                }>;
            }>;
            getActiveChallenges: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    gameId?: number;
                };
                _input_out: {
                    gameId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    accepterPassword: string;
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                }[];
            }>;
            getMyChallenges: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    gameId?: number;
                };
                _input_out: {
                    gameId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                }[];
            }>;
            getResultedChallenges: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    gameId?: number;
                };
                _input_out: {
                    gameId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                }[];
            }>;
            getDetails: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                };
                _input_out: {
                    challengeId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    challengeData: {
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                        challengeId: number;
                        gameId: number;
                        entryPerPlayer: number;
                        creatorInGameName: string;
                        accepterPassword: string;
                        accepterInGameName: string;
                        roomId: string;
                        roomPassword: string;
                        createdAt: number;
                        prizeAmount: number;
                        creatorId: number;
                        creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                        creatorResultFileStoreId: number;
                        accepterId: number;
                        accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                        accepterResultFileStoreId: number;
                    };
                    ruleCollection: {
                        ga_rules: {
                            createdAt: number;
                            rulesCollectionId: number;
                            ruleId: number;
                            ruleText: string;
                        }[];
                        name: string;
                        gameId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                    };
                };
            }>;
            createChallenge: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    gameId?: number;
                    entryPerPlayer?: number;
                    creatorInGameName?: string;
                    accepterPassword?: string;
                };
                _input_out: {
                    gameId?: number;
                    entryPerPlayer?: number;
                    creatorInGameName?: string;
                    accepterPassword?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterPassword: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                };
            }>;
            acceptChallenge: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                    accepterPassword?: string;
                    accepterInGameName?: string;
                };
                _input_out: {
                    challengeId?: number;
                    accepterPassword?: string;
                    accepterInGameName?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterPassword: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                };
            }>;
            cancelChallenge: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                };
                _input_out: {
                    challengeId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterPassword: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                };
            }>;
            updateRoomDetails: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                    roomId?: string;
                    roomPassword?: string;
                };
                _input_out: {
                    challengeId?: number;
                    roomId?: string;
                    roomPassword?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_status;
                    challengeId: number;
                    gameId: number;
                    entryPerPlayer: number;
                    creatorInGameName: string;
                    accepterPassword: string;
                    accepterInGameName: string;
                    roomId: string;
                    roomPassword: string;
                    createdAt: number;
                    prizeAmount: number;
                    creatorId: number;
                    creatorResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_creatorResult;
                    creatorResultFileStoreId: number;
                    accepterId: number;
                    accepterResult: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_challenges_accepterResult;
                    accepterResultFileStoreId: number;
                };
            }>;
            updateWinResult: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                    proofFileStoreId?: number;
                };
                _input_out: {
                    challengeId?: number;
                    proofFileStoreId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: undefined;
            }>;
            updateLossResult: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    challengeId?: number;
                };
                _input_out: {
                    challengeId?: number;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: undefined;
            }>;
        }>;
        contests: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: typeof import("superjson").default;
        }>, {
            upcoming: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>, {
                getUpcomingContests: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        _count: {
                            ga_contest_joinings: number;
                        };
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        ga_contest_joinings: {
                            contestId: number;
                            teamNumber: number;
                            memberPosition: number;
                            teamName: string;
                            inGameName: string;
                            inGameId: string;
                            contestJoiningId: number;
                            joinedBy: number;
                            kills: number;
                            rank: number;
                            rankPrize: number;
                            totalWinning: number;
                            isWalletUpdated: boolean;
                        }[];
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    }[];
                }>;
                getUpcomingContestDetails: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        ga_rule_collections: {
                            ga_rules: {
                                createdAt: number;
                                rulesCollectionId: number;
                                ruleId: number;
                                ruleText: string;
                            }[];
                            name: string;
                            gameId: number;
                            createdAt: number;
                            rulesCollectionId: number;
                        };
                        _count: {
                            ga_contest_joinings: number;
                        };
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        ga_contest_joinings: {
                            contestId: number;
                            teamNumber: number;
                            memberPosition: number;
                            teamName: string;
                            inGameName: string;
                            inGameId: string;
                            contestJoiningId: number;
                            joinedBy: number;
                            kills: number;
                            rank: number;
                            rankPrize: number;
                            totalWinning: number;
                            isWalletUpdated: boolean;
                        }[];
                        ga_contest_id_and_pass: {
                            roomId: string;
                            roomPassword: string;
                            contestId: number;
                            updatedAt: number;
                        };
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    };
                }>;
                getAllJoinings: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        contestId: number;
                        teamNumber: number;
                        memberPosition: number;
                        teamName: string;
                        inGameName: string;
                        inGameId: string;
                        contestJoiningId: number;
                        joinedBy: number;
                        kills: number;
                        rank: number;
                        rankPrize: number;
                        totalWinning: number;
                        isWalletUpdated: boolean;
                    }[];
                }>;
                getUserJoinings: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        contestId: number;
                        teamNumber: number;
                        memberPosition: number;
                        teamName: string;
                        inGameName: string;
                        inGameId: string;
                        contestJoiningId: number;
                        joinedBy: number;
                        kills: number;
                        rank: number;
                        rankPrize: number;
                        totalWinning: number;
                        isWalletUpdated: boolean;
                    }[];
                }>;
                addJoinings: import("@trpc/server").BuildProcedure<"mutation", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                        joinersData?: {
                            teamNumber?: number;
                            memberPosition?: number;
                            teamName?: string;
                            inGameName?: string;
                            inGameId?: string;
                        }[];
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                        joinersData?: {
                            teamNumber?: number;
                            memberPosition?: number;
                            teamName?: string;
                            inGameName?: string;
                            inGameId?: string;
                        }[];
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: undefined;
                }>;
            }>;
            ongoing: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>, {
                getOngoingContests: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    }[];
                }>;
                getOngoingContestDetails: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        ga_rule_collections: {
                            ga_rules: {
                                createdAt: number;
                                rulesCollectionId: number;
                                ruleId: number;
                                ruleText: string;
                            }[];
                            name: string;
                            gameId: number;
                            createdAt: number;
                            rulesCollectionId: number;
                        };
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    };
                }>;
            }>;
            resulted: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>, {
                getResultedContests: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        _count: {
                            ga_contest_joinings: number;
                        };
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    }[];
                }>;
                getResultedContestDetails: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        ga_contest_joinings: {
                            contestId: number;
                            teamNumber: number;
                            memberPosition: number;
                            teamName: string;
                            inGameName: string;
                            inGameId: string;
                            contestJoiningId: number;
                            joinedBy: number;
                            kills: number;
                            rank: number;
                            rankPrize: number;
                            totalWinning: number;
                            isWalletUpdated: boolean;
                        }[];
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    };
                }>;
                getCancelledContestDetails: import("@trpc/server").BuildProcedure<"query", {
                    _config: import("@trpc/server").RootConfig<{
                        ctx: object;
                        meta: object;
                        errorShape: never;
                        transformer: typeof import("superjson").default;
                    }>;
                    _meta: object;
                    _ctx_out: {
                        payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                    };
                    _input_in: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _input_out: {
                        gameId?: number;
                        contestId?: number;
                    };
                    _output_in: typeof import("@trpc/server").unsetMarker;
                    _output_out: typeof import("@trpc/server").unsetMarker;
                }, {
                    status: "success" | "error";
                    message: string;
                    result?: {
                        ga_file_store: {
                            updatedAt: number;
                            fileStoreId: number;
                            fileName: string;
                            fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                            sizeInBytes: number;
                            fileUrl: string;
                        };
                        status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_contests_status;
                        map: string;
                        gameId: number;
                        entryPerPlayer: number;
                        contestId: number;
                        createdAt: number;
                        rulesCollectionId: number;
                        thumbnailFileStoreId: number;
                        updatedAt: number;
                        title: string;
                        prizePool: number;
                        perKill: number;
                        playersInTeam: number;
                        mode: string;
                        maxJoining: number;
                        prizeDescription: string;
                        resultNote: string;
                        scheduleInUnix: number;
                        youtubeLink: string;
                    };
                }>;
            }>;
        }>;
        getGames: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                contestGames: {
                    _count: {
                        ga_contests: number;
                    };
                    ga_file_store: {
                        updatedAt: number;
                        fileStoreId: number;
                        fileName: string;
                        fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                        sizeInBytes: number;
                        fileUrl: string;
                    };
                    gameId: number;
                    createdAt: number;
                    gameName: string;
                    thumbnailFileStoreId: number;
                    gameType: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_games_gameType;
                    updatedAt: number;
                }[];
                challengeGames: {
                    _count: {
                        ga_challenges: number;
                    };
                    ga_file_store: {
                        updatedAt: number;
                        fileStoreId: number;
                        fileName: string;
                        fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                        sizeInBytes: number;
                        fileUrl: string;
                    };
                    gameId: number;
                    createdAt: number;
                    gameName: string;
                    thumbnailFileStoreId: number;
                    gameType: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_games_gameType;
                    updatedAt: number;
                }[];
            };
        }>;
    }>;
    notify: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getAnnouncements: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
            };
            _input_in: {
                take?: number;
            };
            _input_out: {
                take?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                message: string;
                createdAt: number;
                updatedAt: number;
                onClickLink: string;
                announcementId: number;
            }[];
        }>;
        getCarousels: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                ga_file_store: {
                    updatedAt: number;
                    fileStoreId: number;
                    fileName: string;
                    fileCategory: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_file_store_fileCategory;
                    sizeInBytes: number;
                    fileUrl: string;
                };
                createdAt: number;
                onClickLink: string;
                fileStoreId: number;
                carouselId: number;
            }[];
        }>;
    }>;
    support: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getSupportMethods: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                tourneypro: Required<{
                    appSlug?: string;
                    appId?: number;
                }>;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                methodName: string;
                methodId: string;
                createdAt: number;
                onClickLink: string;
                supportMethodId: number;
                iconName: string;
            }[];
        }>;
    }>;
    user: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        profile: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: typeof import("superjson").default;
        }>, {
            getProfile: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    username: string;
                    email: string;
                    mobileNumber: string;
                    firstName: string;
                    lastName: string;
                };
            }>;
            updateProfile: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    firstName?: string;
                    lastName?: string;
                    mobileNumber?: string;
                    email?: string;
                };
                _input_out: {
                    firstName?: string;
                    lastName?: string;
                    mobileNumber?: string;
                    email?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: undefined;
            }>;
        }>;
        wallet: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: never;
            transformer: typeof import("superjson").default;
        }>, {
            getWalletDetails: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    activePgName: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_payment_gateways_activePgName;
                    depositWallet: number;
                    winWallet: number;
                    bonusWallet: number;
                    totalBalance: number;
                    walletConfigs: {
                        walletConfigId: number;
                        minimumDeposit: number;
                        maximumDeposit: number;
                        minimumWithdrawal: number;
                        maximumWithdrawal: number;
                    };
                    withdrawalMethods: {
                        methodName: string;
                        createdAt: number;
                        withdrawalMethodId: number;
                        methodType: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_withdrawal_methods_methodType;
                    }[];
                };
            }>;
            getWalletHistory: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    amount: number;
                    createdAt: number;
                    userId: number;
                    userWalletTransactionId: number;
                    walletType: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_user_wallet_transactions_walletType;
                    transactionType: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_user_wallet_transactions_transactionType;
                    newBalance: number;
                    description: string;
                }[];
            }>;
            getPgData: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    activePgName: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_payment_gateways_activePgName;
                    manualUpiPg: {
                        upiId: string;
                    };
                    paglamcFunPg: {
                        apiKey: string;
                    };
                };
            }>;
            submitDepositRequest: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    amount?: number;
                    pgName?: "manual_upi" | "paglamc_fun";
                    paymentProofFileStoreId?: number;
                    redirectUrl?: string;
                };
                _input_out: {
                    amount?: number;
                    pgName?: "manual_upi" | "paglamc_fun";
                    paymentProofFileStoreId?: number;
                    redirectUrl?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    [x: string]: any;
                };
            } | {
                status: "success" | "error";
                message: string;
                result?: {
                    depositRequestId: number;
                    pgName: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_deposit_requests_pgName;
                    paymentUrl: any;
                };
            }>;
            submitWithdrawalRequest: import("@trpc/server").BuildProcedure<"mutation", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: {
                    amount?: number;
                    methodName?: string;
                    methodId?: string;
                };
                _input_out: {
                    amount?: number;
                    methodName?: string;
                    methodId?: string;
                };
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_withdrawal_requests_status;
                    amount: number;
                    methodName: string;
                    methodId: string;
                    createdAt: number;
                    userId: number;
                    updatedAt: number;
                    withdrawalRequestId: number;
                    comment: string;
                };
            }>;
            getDepositHistory: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_deposit_requests_status;
                    proofFileStoreId: number;
                    amount: number;
                    pgName: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_deposit_requests_pgName;
                    createdAt: number;
                    userId: number;
                    updatedAt: number;
                    statusDescription: string;
                    depositRequestId: number;
                }[];
            }>;
            getWithdrawalHistory: import("@trpc/server").BuildProcedure<"query", {
                _config: import("@trpc/server").RootConfig<{
                    ctx: object;
                    meta: object;
                    errorShape: never;
                    transformer: typeof import("superjson").default;
                }>;
                _meta: object;
                _ctx_out: {
                    payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
                };
                _input_in: void;
                _input_out: void;
                _output_in: typeof import("@trpc/server").unsetMarker;
                _output_out: typeof import("@trpc/server").unsetMarker;
            }, {
                status: "success" | "error";
                message: string;
                result?: {
                    status: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_withdrawal_requests_status;
                    amount: number;
                    methodName: string;
                    methodId: string;
                    createdAt: number;
                    userId: number;
                    updatedAt: number;
                    withdrawalRequestId: number;
                    comment: string;
                }[];
            }>;
        }>;
    }>;
    referAndEarn: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getConfigs: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                payload: import("../helpers/jwtHelper.js").WebAppUserAccessTokenPayloadType;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                referRewardWallet: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_user_refer_configs_referRewardWallet;
                referRewardAmount: number;
                registerBonusWallet: import("../../../../prisma/tourneypro/generatedClient/index.js").$Enums.ga_user_refer_configs_registerBonusWallet;
                registerBonusAmount: number;
                minimumMatchFees: number;
                shareDescription: string;
            };
        }>;
    }>;
}>;
export type webAppTrpcRouterTypes = typeof tourneyproWebAppTrpcRouter;
