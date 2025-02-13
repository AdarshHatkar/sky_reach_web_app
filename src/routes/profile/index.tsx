import { BottomNavBar } from "@common/bottomNavBar";
import { bottomNavbarItems } from "@common/bottomNavBarItems";
import { FaChevronRight, FaUserEdit } from "react-icons/fa";
import TopNavbar from "@common/topNavbar";
import { gamingAppStore } from "@stores/gamingAppStore";
import { userStore } from "@stores/userStore";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TCleanedNavigateOptions } from "@helpers/types/routes";
import userProfile from "@assets/images/demoUserProfile.png";
import coin from "@assets/images/coin3.png";
import { FiLogOut } from "react-icons/fi";
import { GiCheckedShield } from "react-icons/gi";
import { authStore } from "@stores/authStore";

export const Route = createFileRoute("/profile/")({
    component: ProfilePage,
});

type TProfileItems = {
    icon: JSX.Element;
    title: string;
    path: TCleanedNavigateOptions;
    isHidden?: boolean;
}[];

function ProfilePage() {
    const navigate = useNavigate({ from: Route.fullPath });
    const appLogo = gamingAppStore.use.appLogo();
    const username = userStore.use.username();
    const clearTokens = authStore.use.clearTokens();

    const handleLogout = () => {
        clearTokens();
        navigate({ to: "/auth/login" });
    };

    return (
        <div className="flex flex-col h-screen bg-[#EBF3FE]">
            <TopNavbar title={"Hi "} isNotificationIconVisible isSidebarAccessible isEditIconVisible isHomePage />
            <div className="relative w-full mx-auto">
                <div className="bg-[#BBC3D0] h-24 w-full"></div>
                <div className="absolute text-center -translate-x-1/2 top-12 left-1/2">
                    <div className="w-24 h-24 overflow-hidden rounded-full">
                        <img src={userProfile} alt="Profile" className="object-cover w-full h-full" />
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-black">@{username}</h2>
                    <span className="text-sm font-semibold text-green-500">Verified</span>
                </div>
            </div>
            <div className="p-2 mt-28">
                <div className="flex items-center justify-around p-4 font-bold bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className="flex-1 text-center">
                        <p className="text-lg">0</p>
                        <div className="text-lg text-gray-700 sm:text-xl">
                            <div>Matches</div>
                            <div>Played</div>
                        </div>
                    </div>
                    <div className="h-20 border-l border-black"></div>

                    <div className="flex-1 text-center">
                        <p className="text-lg">0</p>
                        <div className="text-lg text-gray-700 sm:text-xl">
                            <div>Total</div>
                            <div>Killed</div>
                        </div>
                    </div>
                    <div className="h-20 border-l border-black"></div>
                    <div className="flex-1 text-center">
                        <div className="flex items-center justify-center gap-1">
                            <img src={coin} alt="" className="h-6" />
                            <p className="text-lg">{10}</p>
                        </div>
                        <div className="text-lg text-gray-700 sm:text-xl">
                            <div>Amount</div>
                            <div>Won</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-2 mt-2 space-y-2 overflow-y-auto mb-14">
                {profileItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
                        onClick={() => navigate({ to: item.path })}
                    >
                        <div className="flex gap-2">
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                        <span>
                            <FaChevronRight />
                        </span>
                    </div>
                ))}
                <div
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                >
                    <div className="flex gap-2">
                        <span>
                            <FiLogOut size={25} />
                        </span>
                        <span>Logout</span>
                    </div>
                    <span>
                        <FaChevronRight />
                    </span>
                </div>
            </div>
            <div className="fixed bottom-0 w-[100%] sm:w-[500px] z-20">
                <BottomNavBar bottomNavbarItems={bottomNavbarItems} />
            </div>
        </div>
    );
}

const profileItems: TProfileItems = [
    {
        icon: <FaUserEdit size={25} />,
        title: "Edit Profile",
        path: "/editProfile",
    },

    {
        icon: <GiCheckedShield size={25} />,
        title: "Terms & Conditions",
        path: "/terms&Conditions",
    },
];
