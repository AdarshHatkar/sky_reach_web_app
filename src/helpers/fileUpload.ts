import { $Enums } from "@b2fPortal/prisma/play124/generatedClient";
import { axiosErrorHandler, axiosResponseHandler, callTheGamingAppServerPost } from "./axiosHelper";
import { myToast } from "./utilityHelper";

type TUploadFile = {
    appId: number;
    fileList: FileList;
    fileCategory: $Enums.ga_file_store_fileCategory;
};

export async function uploadFile({ appId, fileList, fileCategory }: TUploadFile) {
    // console.log({appId,fileList, fileCategory,fileSubCategory});

    if (Array.isArray(fileList) && fileList.length === 0) {
        myToast.fire({
            icon: "error",
            title: "No File Selected",
        });
        return null;
    }

    if (fileList[0].size > 5000000) {
        myToast.fire({
            icon: "error",
            title: "Maximum File Size is 5 MB ",
        });

        return false;
    }
    const extension = fileList[0].name.split(".").pop();
    const fileNameWithoutExt = fileList[0].name.replace(`.${extension}`, "");

    try {
        const formData = new FormData();
        formData.append("file", fileList[0]);
        formData.append("fileCustomNameWithoutExtension", fileNameWithoutExt);
        formData.append("fileCategory", fileCategory);

        formData.append("appIdString", appId.toString());

        const response = await callTheGamingAppServerPost(`/fileManager/uploadFile`, {
            data: formData,
            Headers: {
                "Content-Type": "multipart/form-data",
                appIdString: appId.toString(),
                fileCategory: fileCategory,
            },
        });

        console.log("uploadResponse", response);
        axiosResponseHandler(response);
        if (response.data.status === "success") {
            myToast.fire({
                icon: "success",
                title: "file Uploaded",
            });
        }
        return response.data;
    } catch (error) {
        console.log(error);
        axiosErrorHandler({ error, navigate: null, dispatch: null });
        return error;
    }
}
