import { Avatar, Button, Input, Radio, RadioGroup } from "@heroui/react";
import { createFileRoute } from "@tanstack/react-router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useForm } from "react-hook-form";

import { CameraIcon } from "@common/svgComponents/cameraIcon";
import TopNavbar from "@common/topNavbar";

export const Route = createFileRoute("/editProfile/")({
    component: EditProfilePage,
});

function EditProfilePage() {
    return (
        <div className="min-h-screen ">
            <TopNavbar title={"Profile"} goBackIconColor="black" />
            <nav className="relative ">
                <div className=" px-4 h-[100px] bg-gray-400 rounded-b-3xl -mt-3"></div>
                <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 flex h-[130px] w-[130px] items-center justify-center rounded-full border-[4px] border-white bg-red-300">
                    <Avatar
                        src="https://i2.pravatar.cc/150?u=a04258114e29026302d"
                        className="w-full h-full rounded-full"
                        showFallback
                        fallback={<CameraIcon className="size-16 animate-pulse text-default-500" fill="currentColor" />}
                    />
                </div>
            </nav>
            <div className="flex flex-col items-center w-full h-full scroll-auto">
                <ProfileUpdateSection
                    oldProfileData={{
                        firstName: "firstName",
                        lastName: "lastName",
                        username: "username",
                        email: "email",

                        mobileNumber: "mobileNumber",
                    }}
                />
            </div>
        </div>
    );
}

function ProfileUpdateSection({ oldProfileData }) {
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = async (formDataRaw) => {
        console.log(formDataRaw);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="relative w-full px-3 mt-20">
                <div className="grid grid-cols-[1fr_1fr] gap-3">
                    <Input
                        size="sm"
                        type="text"
                        label="First Name"
                        variant="underlined"
                        defaultValue={oldProfileData.firstName}
                        {...register("firstName")}
                    />
                    <Input
                        size="sm"
                        type="text"
                        label="Last Name"
                        variant="underlined"
                        defaultValue={oldProfileData.lastName}
                        {...register("lastName")}
                    />
                </div>
                <Input
                    size="sm"
                    type="text"
                    label="Username"
                    variant="underlined"
                    isRequired
                    isReadOnly
                    defaultValue={oldProfileData.username}
                    // {...register("username")}
                    className="mt-3"
                />

                <Input
                    size="sm"
                    type="email"
                    label="Email"
                    variant="underlined"
                    defaultValue={oldProfileData.email}
                    {...register("email")}
                    className="mt-3"
                />

                <div>
                    <label htmlFor="mobileNumber" className="block mt-3 ml-1 text-xs text-gray-700">
                        Mobile Number
                    </label>

                    <PhoneInput
                        country="in"
                        placeholder="Enter mobile number"
                        value={"+91".concat(oldProfileData.mobileNumber) || "+91"}
                        onChange={(value) => setValue("mobileNumber", value)}
                        inputProps={{
                            name: "mobileNumber",
                            id: "mobileNumber",
                            ref: register("mobileNumber").ref,
                        }}
                        countryCodeEditable={false}
                        containerStyle={{ width: "100%", marginTop: "0px" }}
                        inputStyle={{
                            width: "100%",
                            height: "30px",
                            fontSize: "0.875rem",
                            border: "none",
                            borderBottom: "2px solid #D4D4D8",
                        }}
                        buttonStyle={{
                            position: "absolute",
                            zIndex: "100",
                            left: "0px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "transparent",
                            border: "none",
                        }}
                    />
                </div>

                <Input
                    size="sm"
                    type="date"
                    label="Date of Birth"
                    defaultValue={oldProfileData.dob}
                    // {...register("")}
                    variant="underlined"
                    className="mt-3"
                />

                <div className="mt-3 mb-4">
                    <label className="block text-sm font-medium">Gender:</label>
                    <RadioGroup
                        defaultValue={oldProfileData.gender}
                        // {...register("")}
                        orientation="horizontal"
                    >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </RadioGroup>
                </div>

                <div className="w-full mt-4 text-center">
                    <Button
                        color="default"
                        type="submit"
                        className="w-full font-bold text-white uppercase bg-[#5DCEB2]"
                    >
                        Update Profile
                    </Button>
                </div>
            </form>
        </>
    );
}
