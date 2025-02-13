import { TSupportMethodIconsNames } from "@b2fPortal/projectB2f/constants/support";
import TopNavbar from "@common/topNavbar";
import { createFileRoute } from "@tanstack/react-router";
import { FaDiscord, FaInstagram, FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import { IoMdHelp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Route = createFileRoute("/_public/support/")({
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

type TTetIconForMethod = {
    iconName: TSupportMethodIconsNames;
};

function getIconForMethod({ iconName }: TTetIconForMethod) {
    switch (iconName) {
        case "whatsapp":
            return <FaWhatsapp className="w-8 h-8 text-green-700 animate-bounce" />;
        case "email":
            return <MdEmail className="w-8 h-8 text-red-700 animate-bounce" />;
        case "telegram":
            return <FaTelegramPlane className="w-8 h-8 text-blue-700 animate-bounce" />;
        case "discord":
            return <FaDiscord className="w-8 h-8 text-blue-700 animate-bounce" />;
        case "instagram":
            return <FaInstagram className="w-8 h-8 text-rose-500 animate-bounce" />;
        case "phone":
            return <FaPhone className="w-8 h-8 text-blue-700 animate-bounce" />;

        default:
            return <IoMdHelp className="w-8 h-8 text-blue-800-700 animate-bounce" />;
    }
}
