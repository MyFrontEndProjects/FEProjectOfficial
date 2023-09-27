import api from "./api";
import ResponseWrapper from "./responseWrapper";

type LoginInfo  = {
    id: number;
    name: string;
    email: string;
    accessToken: string;
};
const login = (email: string, password: string) => {
    const data = { email, password };
    return api.post<ResponseWrapper <LoginInfo> >(api.url.login, data).then((response) =>response.data);
};
const userService = {
    login,
}
 
export default userService;