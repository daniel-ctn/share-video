import {toast, TypeOptions} from "react-toastify";

export const notify = (message: string, type: TypeOptions = "error") => toast(message, {
    position: "bottom-right",
    type,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});