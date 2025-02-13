import { $Enums } from "@b2fPortal/prisma/play124/generatedClient";
import { useNavigate } from "@tanstack/react-router";

type TParams = {
    appSlug: string;
};

type TGameCard = {
    bannerImage: string;
    gameName: string;
    upcomingCount: number;
    gameId: number;
    params: TParams;
    gameType: $Enums.ga_games_gameType;
};

function GameCard({ bannerImage, gameId, gameName, params, upcomingCount, gameType }: TGameCard) {
    const { appSlug } = params;

    const navigate = useNavigate({ from: "/" });

    return (
        <div
            className="w-full h-32 rounded-md p-px bg-gradient-to-b from-[#49FFFD] to-transparent"
            onClick={() =>
                navigate({
                    to: `/games/$gameId/$gameName/${gameType}s`,
                    params: { appSlug, gameId: gameId, gameName },
                })
            }
        >
            <img
                src={bannerImage}
                alt="pubg"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                }}
            />

            <div className="flex items-center justify-center w-full p-[4px] bg-white rounded-b-md">
                <h1 className="text-xs font-bold sm:text-sm">{gameName}</h1>
                {/* <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] bg-green-600 rounded-full animate-pulse"></div>
                    <h1 className="text-sm font-semibold text-green-600">{upcomingCount}</h1>
                </div> */}
            </div>
        </div>
    );
}

export default GameCard;
