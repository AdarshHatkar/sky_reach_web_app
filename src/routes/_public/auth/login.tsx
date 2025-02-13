import { Button, Image } from "@nextui-org/react";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { useForm } from "react-hook-form";

import FadeInAnimation from "@common/framerMotion/fadeInAnimation";
import { trpcErrorHandler } from "@helpers/trpc/handlers";

import { myToast } from "@helpers/utilityHelper";
import { authStore } from "@stores/authStore";

import { userStore } from "@stores/userStore";
import logo from "@assets/images/Play_124_logo.jpeg";
import googleIcon from "@assets/images/google-icon.png";

import { useState } from "react";

export const Route = createFileRoute("/_public/auth/login")({
    component: LoginPage,
});

function LoginPage() {
    const navigate = useNavigate({ from: Route.fullPath });
    const loginForm = useForm();
    const setAuthData = authStore.use.setAuthData();
    const setUserData = userStore.use.setUserData();
    const refreshToken = authStore.use.refreshToken();
    // const appName = gamingAppStore.use.appName();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (formDataRaw) => {
        try {
            // console.log(res);

            // eslint-disable-next-line no-constant-condition
            if (true) {
                myToast.fire({
                    icon: "success",
                    title: "Login Successful",
                    position: "top",
                });
                confetti();

                navigate({ to: "/home", replace: true });
            }
        } catch (error) {
            trpcErrorHandler(error);
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen text-black bg-white">
                <div className="flex items-center justify-center h-[6vh] bg-[#6100ff] rounded-b-3xl rounded-t-none">
                    <h1 className="text-lg font-semibold text-justify text-white uppercase">Login</h1>
                </div>
                <FadeInAnimation>
                    <div className="h-[90vh] flex flex-col justify-start">
                        <div className="flex flex-col items-center justify-center my-8">
                            <Image width={80} height={80} src={logo} alt="Play 124 logo" />
                        </div>

                        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="px-5">
                            <div className="w-full my-2">
                                <input
                                    type="text"
                                    placeholder="Email / Mobile Number / Username"
                                    className="w-full px-4 py-4 text-sm font-medium text-black transition-colors duration-500 bg-transparent border border-gray-300 shadow-lg border-t-gray-100 focus:outline-slate-600 placeholder:text-gray-500"
                                    {...loginForm.register("emailOrMobileNumberOrUsername")}
                                />
                            </div>

                            <div className="relative my-2 text-sm font-medium text-black transition-colors duration-500 bg-transparent border border-gray-300 shadow-lg border-t-gray-100 focus-within:border-none focus-within:ring-2 focus-within:ring-slate-600">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full px-4 py-4 border-none outline-none placeholder:text-gray-500"
                                    {...loginForm.register("password")}
                                />
                                <div
                                    className="absolute text-black transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </div>
                            </div>

                            <div className="flex items-center justify-end my-4 text-sm">
                                <span className="text-gray-500">
                                    <Link to="/" className="hover:text-blue-500">
                                        Forgot Password?
                                    </Link>
                                </span>
                            </div>

                            <div className="font-[600] my-4">
                                <Button
                                    type="submit"
                                    className="flex justify-center w-full py-6 text-white text-[20px] bg-[#6100ff] rounded-full uppercase font-semibold"
                                >
                                    Login
                                </Button>
                            </div>
                        </form>

                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-black text-md">or Login with</h2>
                            <div className="flex items-center justify-center w-full my-2 rounded-full">
                                <Image
                                    width={60}
                                    height={60}
                                    src={googleIcon}
                                    alt="Register with Google"
                                    className="p-2 border rounded-full"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full gap-2 text-black text-md">
                            <h2> Don't have an account?</h2>
                        </div>
                    </div>
                    {/* <div className="text-center">
                        <p>Ga Version : {deployJson.version}</p>
                        <p>Last Updated : {moment(deployJson.last_deploy).format('MMMM Do YYYY, h:mm:ss a')} </p>
                    </div> */}
                </FadeInAnimation>
            </div>
        </>
    );
}
