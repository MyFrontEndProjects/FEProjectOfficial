import api from "./api";
import ResponseWrapper from "./responseWrapper";

type LoginInfo  = {
    id: number;
    username: string;
    email: string;
};
const login = (username: string, password: string) => {
    const data = { username, password };
    return api.post<ResponseWrapper <LoginInfo> >(api.url.login, data).then((response) =>response.data);
};
const userService = {
    login,
}
 
export default userService;