import { Avatar } from "@heroui/react";
import { useNavigate } from "@tanstack/react-router";
import { memo, useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { RiCloseFill, RiCustomerService2Fill } from "react-icons/ri";
import { useOnClickOutside } from "usehooks-ts";
import demoUser from "../../assets/images/demoUserProfile.png";
import { TCleanedNavigateOptions } from "../../helpers/types/routes";
import { appUiStore } from "../../stores/appUiStore";
import { authStore } from "../../stores/authStore";
import { gamingAppStore } from "../../stores/gamingAppStore";
import { userStore } from "../../stores/userStore";
import { GiCheckedShield } from "react-icons/gi";

const SideNavbarBase = () => {
    const isSidebarVisible = appUiStore.use.isSidebarVisible();
    const setPanelSidebarState = appUiStore.use.setPanelSidebarState();
    const clearTokens = authStore.use.clearTokens();
    const username = userStore.use.username();
    const firstName = userStore.use.firstName();
    const lastName = userStore.use.lastName();
    const appLogo = gamingAppStore.use.appLogo();
    const navigate = useNavigate({ from: "/" });

    const ref = useRef(null);

    const handleClickOutside = () => {
        setPanelSidebarState({ newState: false });
    };

    useOnClickOutside(ref, handleClickOutside);

    type TSidebarItems = {
        icon: JSX.Element;
        title: string;
        path: TCleanedNavigateOptions;
        isHidden?: boolean;
    }[];

    const sidebarItems: TSidebarItems = [
        {
            icon: <FaUserEdit color="#4159F9" size={25} />,
            title: "Edit Profile",
            path: "/editProfile",
            // isHidden: !isLocalEnvironnement
        },

        {
            icon: <GiCheckedShield color="#4159F9" size={25} />,
            title: "Terms & Conditions",
            path: "/terms&Conditions",
        },
        {
            icon: <RiCustomerService2Fill color="#4159F9" size={25} />,
            title: "Support",
            path: "/support",
        },
    ];

    return (
        <>
            <div
                ref={ref}
                className="relative w-[100%] max-w-[320px] h-screen pb-20 overflow-auto bg-white rounded-tr-2xl"
            >
                <div className="sticky top-0 px-2 bg-white">
                    <div className="relative">
                        <div
                            className="absolute right-0 z-50 top-4"
                            onClick={() => setPanelSidebarState({ newState: false })}
                        >
                            <RiCloseFill color="#4159F9" size={30} />
                        </div>

                        <div className="flex items-center gap-4 px-4 pt-8 pb-4">
                            <div className="w-14 h-14 ">
                                {/* <img src={demoUser} alt="demoUserImg" /> */}
                                <Avatar
                                    isBordered
                                    color="success"
                                    src={appLogo}
                                    size="lg"
                                    fallback={<Avatar src={demoUser} size="lg" showFallback />}
                                    showFallback
                                />
                            </div>
                            <div className="text-lg font-semibold text-[#4159F9]">
                                <h1>@{username}</h1>
                                <h1>
                                    {firstName} {lastName}
                                </h1>

                                {/* <p>{Math.random()}</p> */}
                            </div>
                        </div>
                        <hr className="h-[1px] bg-[#3D56FA]" />
                    </div>
                </div>

                <div className="flex flex-col gap-8 p-6">
                    {sidebarItems.map((data, index) => {
                        if (data.isHidden) return <> </>;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-4"
                                onClick={() => {
                                    navigate({ to: data.path, params: {} });
                                    setPanelSidebarState({ newState: false });
                                }}
                            >
                                {data.icon}
                                <h1 className="text-lg font-semibold text-black">{data.title}</h1>
                            </div>
                        );
                    })}
                </div>

                <div className="fixed bottom-0 w-full p-6 bg-white max-w-[320px] border-black/10 border-t-1">
                    <div
                        className="flex items-center gap-4"
                        onClick={() => {
                            setPanelSidebarState({ newState: false });
                            clearTokens();
                        }}
                    >
                        <GrLogout color="black" size={20} />
                        <h1 className="text-lg font-semibold text-black">Logout</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export const SideNavbar = memo(SideNavbarBase);
