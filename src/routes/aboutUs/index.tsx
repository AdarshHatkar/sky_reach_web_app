import TopNavbar from "@common/topNavbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aboutUs/")({
    component: AboutUsPage,
});

function AboutUsPage() {
    return (
        <>
            <div className="min-h-screen bg-[#091B33] relative">
                <div className="sticky top-0">
                    <TopNavbar title={"About Us"} />
                </div>
                <div className="flex flex-col items-start justify-center gap-5 px-5 text-white text-lg py-4">
                    <p>
                        PLAY124 is an ultimate Esports platform App. PLAY124 is an Esports Tournament platform that
                        offers its users to participate in tournaments daily for their favourite games and earn money
                        for their gaming skills, a platform that offers you to join battle royale game where you earn to
                        survive or kill, Cool Isn't it ? You can participate in games with your friends and maybe
                        teaming up could get you paid more. and many more New Games will be added soon.
                    </p>

                    <p>
                        <span className="font-bold">PLAY124</span> is an Online Portal which Offers Rewards and
                        Unlimited Entertainment for Participating and Playing Games Online.You Can Also Purchase Online
                        Games Coins.Users can play online multiple games like free fire, ludo and Earn Cash Rewards and
                        Prizes based on their in-game performance..
                    </p>

                    <p>Founded and Launched on 15th December 2024</p>

                    <p>
                        You might be addicted to Online Games but just think what if you can start making money or
                        living by Playing Mobile Games? Well, this is what PLAY124 Offer Users can participate in the
                        upcoming eSports games and Win Amazing Prizes and Rewards.
                    </p>

                    <p>
                        Participate in the Tournaments of Games like Free Fire, ludo. and Earn Huge Rewards Daily. Users
                        can join Custom Rooms, and Get Rewards for Winning and also for each Kill they Score. Sounds
                        cool, huh?? Give it a try!
                    </p>
                </div>
            </div>
        </>
    );
}
