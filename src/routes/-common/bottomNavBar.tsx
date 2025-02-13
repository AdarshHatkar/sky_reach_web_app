import { useNavigate, useRouterState } from "@tanstack/react-router";
import { TBottomNavbarItems } from "./bottomNavBarItems";
import { appUiStore, TActiveTab } from "@stores/appUiStore";

export function BottomNavBar({ bottomNavbarItems }: { bottomNavbarItems: TBottomNavbarItems }) {
    const navigate = useNavigate({ from: "/" });
    // const setPanelSidebarState = appUiStore.use.setPanelSidebarState();

    const activeTab = appUiStore.use.activeTab();
    const setActiveTab = appUiStore.use.setActiveTab();

    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;

    /**
     * * Dynamically replaces $appSlug in navbar paths with the actual app slug from the URL and finds the active tab index
     */
    const appSlug = currentPath.split("/")[1];
    const updatedNavbarItems = bottomNavbarItems.map((item) => ({
        ...item,
        path: item.path?.replace("$appSlug", appSlug),
    }));

    return (
        <div className="sticky bottom-0 px-2 pb-1 bg-white rounded-3xl">
            <div className="flex items-center h-full">
                {updatedNavbarItems.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center w-1/${bottomNavbarItems.length} mx-auto py-2
                                border-transparent`}
                            onClick={() => {
                                if (data.path) navigate({ to: data.path });
                                if (["contest", "challenge", "leaderboard", "editProfile"].includes(data.key)) {
                                    setActiveTab(data.key as TActiveTab);
                                }
                            }}
                        >
                            {data.icon}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
