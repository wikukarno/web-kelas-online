import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.message) {
      if (error.response.status === 500)
        message = "Something went terribly wrong";
      else message = error.response.data.message;

      if (typeof message === "string") toast.error(message);
      return Promise.reject(error);
    }
  }
}
