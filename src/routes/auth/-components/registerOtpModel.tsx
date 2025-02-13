import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { convertToInt } from "modern-number-utils";
import { useEffect, useRef, useState } from "react";

type TRegisterOtpModel = {
    setOtp: React.Dispatch<React.SetStateAction<number>>;
    onSubmit: () => void;
};
export default function RegisterOtpModel({ onSubmit, setOtp }: TRegisterOtpModel) {
    const { onOpenChange, isOpen } = useDisclosure();

    const [otpInput, setOtpInput] = useState(new Array(4).fill(""));
    const [mockOtp, setMockOtp] = useState<number>();
    const inputRefs = useRef([]);

    function handleChange(index, e) {
        const value = e.target.value;

        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otpInput];
            newOtp[index] = value;
            setOtpInput(newOtp);

            const combinedOtp = newOtp.join("");
            if (combinedOtp.length === 4) {
                const otpValue = convertToInt(combinedOtp);
                setOtp(otpValue);
                setMockOtp(otpValue);
            }

            if (value && index < newOtp.length - 1) {
                inputRefs.current[index + 1]?.focus();
                newOtp[index + 1] = "";
            }
        }
    }

    useEffect(() => {
        if (mockOtp) {
            // console.log("OTP ready, calling onSubmit...");
            onSubmit();
        }
    }, [mockOtp]);
    // I used this mockOtp so I can call onSubmit function only when otp is sent through setOtp

    function handleClick(index) {
        inputRefs.current[index]?.focus();

        setOtpInput((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = "";
            return newOtp;
        });
    }

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, [isOpen]);

    return (
        <>
            <Modal isOpen={true} onOpenChange={onOpenChange}>
                <ModalContent>
                    <form>
                        <ModalHeader>Verify OTP</ModalHeader>
                        <ModalBody>
                            <p className="font-lg">Enter the OTP sent to your phone number: </p>
                            <div className="flex">
                                {otpInput.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={otpInput[index]}
                                        ref={(input) => (inputRefs.current[index] = input)}
                                        className="w-10 h-10 m-2 text-center text-sm border-2 text-black"
                                        onChange={(e) => handleChange(index, e)}
                                        onClick={() => handleClick(index)}
                                    />
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => onOpenChange()}>
                                Cancel
                            </Button>
                            <Button color="success" type="button" onClick={onSubmit}>
                                Verify OTP
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}
