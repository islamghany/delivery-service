import { QueryClient } from "react-query";

const client = new QueryClient();
export { useLogin } from "./auth";

export default client;
