import { FaArrowLeft } from "react-icons/fa";
import { TCleanedNavigateOptions } from "../../helpers/types/routes";
import { useNavigate, useRouter } from "@tanstack/react-router";

type TWalletTopNavbar = {
  title: string;
  goBackPath?: TCleanedNavigateOptions | undefined;
};

export const WalletTopNavbar = ({ title, goBackPath }: TWalletTopNavbar) => {
  const navigate = useNavigate({ from: "/" });
  const router = useRouter();

  const goBackFun = () => {
    if (goBackPath) {
      console.log("goBackPath", goBackPath);
      navigate({ to: goBackPath, params: {} });
    } else {
      router.history.back();
    }
  };

  return (
    <div className="bg-[#bbc3d0] p-4 flex sticky top-0 items-center shadow-md z-50">
      <button onClick={goBackFun} className="text-black text-lg">
        <FaArrowLeft />
      </button>
      <h1 className="text-black text-xl font-bold flex-1 text-center">{title}</h1>
    </div>
  );
};
