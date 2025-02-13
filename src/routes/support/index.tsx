import TopNavbar from "@common/topNavbar";
import { createFileRoute } from "@tanstack/react-router";
import { FcOnlineSupport } from "react-icons/fc";

export const Route = createFileRoute("/support/")({
    component: SupportPage,
});

function SupportPage() {
    return (
        <>
            <div className=" relative h-screen   bg-[#091B33]">
                <div className="sticky top-0">
                    <TopNavbar title={"Support"} />
                </div>
                <div className="flex flex-col items-center justify-center px-2">
                    <div className="mt-8 ">
                        <FcOnlineSupport className="w-32 h-32" />
                    </div>
                    <h1 className="mt-6 text-3xl font-bold text-center text-gray-100">
                        Feel free to reach out to us for any inquiries or assistance.
                    </h1>

                    <div className="w-[90%] mt-8">
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
