// import Sidebar from "./Sidebar";

import { twMerge } from "tailwind-merge";

import { Avatar } from "@nextui-org/react";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsChatLeftDots } from "react-icons/bs";
import { TCleanedNavigateOptions } from "../../helpers/types/routes";
import { FaPlus } from "react-icons/fa6";
import { appUiStore } from "../../stores/appUiStore";
import { gamingAppStore } from "../../stores/gamingAppStore";
import { LuWallet } from "react-icons/lu";

type TTopNavbar = {
    title: string;
    isBgTransparent?: boolean;
    titleClassName?: string;
    isSidebarAccessible?: boolean;
    goBackPath?: TCleanedNavigateOptions | undefined;
    isNotificationIconVisible?: boolean;
    isEditIconVisible?: boolean;
    isHomePage?: boolean;
    goBackIconColor?: string;
    isShareIconAccessible?: boolean;
    isChatIconAccessible?: boolean;
};

const TopNavbar = ({
    title,
    isBgTransparent = false,
    titleClassName = "",
    isSidebarAccessible = false,
    goBackPath = undefined,
    isNotificationIconVisible = false,
    isEditIconVisible = false,
    isHomePage = false,
    goBackIconColor = "white",
    isChatIconAccessible = false,
}: TTopNavbar) => {
    const navigate = useNavigate({ from: "/" });

    const router = useRouter();
    const appName = gamingAppStore.use.appName();
    const appSlug = gamingAppStore.use.appSlug();
    const appLogo = gamingAppStore.use.appLogo();

    const namePart = appName.split(/\d+/)[0]; // "PLAY"
    const numberPart = appName.split(/\D+/).filter(Boolean).join(""); // "124"

    const goBackFun = () => {
        if (goBackPath) {
            console.log("goBackPath", goBackPath);
            navigate({ to: goBackPath, params: {} });
        } else {
            router.history.back();
        }
    };

    // getWalletDetailsQuery.data.walletData.totalBalance >= 1000 ? getWalletDetailsQuery.data.walletData.totalBalance/1000 : getWalletDetailsQuery.data.walletData.totalBalance

    const setPanelSidebarState = appUiStore.use.setPanelSidebarState();

    return (
        <div
            style={{ zIndex: 100 }}
            className={`text-black px-4 py-3  ${isBgTransparent ? "bg-[#EBF3FE]" : "bg-[#E9F4FD]"}  flex sticky top-0 items-center  justify-between rounded-b-[16px]`}
        >
            {isSidebarAccessible && (
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center overflow-hidden bg-cover rounded-full w-9 h-9">
                        <Avatar src={appLogo} fallback={<Avatar src={appLogo} showFallback />} showFallback />
                    </div>
                    {isHomePage && (
                        <h1 className="text-xl font-bold uppercase whitespace-nowrap">
                            {"Sky"}
                            <span className="text-blue-600">{"Reach"}</span>
                        </h1>
                    )}
                </div>
            )}
            {!isSidebarAccessible && (
                <div className="w-10 cursor-pointer " onClick={goBackFun}>
                    <MdOutlineArrowBackIosNew className="h-full " color={goBackIconColor} size={25} />
                </div>
            )}

            <div>{!isHomePage && <p className={twMerge("text-xl font-bold ", titleClassName)}>{title}</p>}</div>
            <div className="flex items-center justify-center gap-4">
                {isChatIconAccessible && <BsChatLeftDots size={27} className="text-gray-400" />}

                {!isNotificationIconVisible && <div className="w-10 cursor-pointer "></div>}

                {isEditIconVisible && <WalletBalanceIcon appSlug={appSlug} />}
            </div>
        </div>
    );
};

export default TopNavbar;

type TWalletBalanceIcon = {
    appSlug: string;
};

function WalletBalanceIcon({ appSlug }: TWalletBalanceIcon) {
    return (
        <Link to="/" className="flex items-center gap-2 px-2 py-2 bg-white rounded-lg cursor-pointer">
            <div className="relative flex items-center gap-2 text-base font-medium">
                <LuWallet size={25} />
                {"XXX"}
            </div>
            <div className="font-bold text-black">|</div>
            <FaPlus className="text-black" />
        </Link>
    );
}
