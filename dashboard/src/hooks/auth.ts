import api from "@/api";
import { useMutation } from "react-query";

async function login(
  email: string,
  password: string,
  path: "biker" | "sender"
) {
  try {
    const res = await api.post(path + "login", { email, password });
    console.log(res);
    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.status_message ||
        "Network Error, please try again later."
    );
  }
}

export const useLogin = () =>
  useMutation({
    // mutationFn:(email:string,password:string,path:"biker"|"sender")=>login(email,password,path),
  });
