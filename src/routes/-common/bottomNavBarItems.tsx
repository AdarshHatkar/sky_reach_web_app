import { CgProfile } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiFocus2Line } from "react-icons/ri";
import { TCleanedNavigateOptions } from "@helpers/types/routes";

export type TBottomNavbarItems = {
    key: string;
    text: string;
    icon: JSX.Element;
    path: TCleanedNavigateOptions;

    onClick?: () => void;
}[];

export const bottomNavbarItems: TBottomNavbarItems = [
    {
        key: "contest",
        text: "Games",
        icon: <IoGameControllerOutline size={35} />,
        path: "/home",
    },
    {
        key: "challenge",
        text: "Challenges",
        icon: <RiFocus2Line size={35} />,
        path: "/home",
    },

    {
        key: "editProfile",
        text: "Profile",
        icon: <CgProfile size={35} />,
        path: "/profile",
    },
];
