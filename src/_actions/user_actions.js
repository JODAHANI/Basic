import axios from "axios";
import { LOGIN_USER } from "./type";

export function loginUser(data) {
    const result =  axios.post('/api/users/login',data).then(result => {
        return result.data
    });
    
    
    return {
        type : LOGIN_USER,
        payload : result
    }
}