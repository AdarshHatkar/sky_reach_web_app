import { createFileRoute, useNavigate } from "@tanstack/react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { BottomNavBar } from "@common/bottomNavBar";
import FadeInAnimation from "@common/framerMotion/fadeInAnimation";
import TopNavbar from "@common/topNavbar";

import { bottomNavbarItems } from "@common/bottomNavBarItems";

export const Route = createFileRoute("/home/")({
    component: HomePage,
});

function HomePage() {
    const navigate = useNavigate({ from: Route.fullPath });

    return (
        <>
            <div className="  w-[100%] sm:w-[500px] min-h-screen bg-[#E9F5FF] relative z-[100] overflow-hidden">
                <div className="fixed top-0 w-[100%] sm:w-[500px] z-20 ">
                    <TopNavbar
                        title={"Hi "}
                        isNotificationIconVisible
                        isSidebarAccessible
                        isEditIconVisible
                        isHomePage
                    />
                </div>
                <FadeInAnimation>
                    <div className="h-screen mt-16 overflow-scroll">
                        <div className="text-red-500 ">Home</div>
                        <button>Button</button>
                    </div>
                </FadeInAnimation>

                <div className="fixed bottom-0 w-[100%] sm:w-[500px] z-20">
                    <BottomNavBar bottomNavbarItems={bottomNavbarItems} />
                </div>
            </div>
        </>
    );
}
