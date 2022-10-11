import axios from "axios";

const BASE_URL= "http://localhost:5000";
export const api=axios.create({
    baseURL:BASE_URL,
    withCredentials: true ,
    headers:{
        'Content-Type': 'application/json',
         Accept: 'application/json',

    }
})


// list of all the end points
 
 export const sendOtp=async (data)=>await api.post("/api/send-otp",data);
 export const verifyOtp=async (data)=>await api.post("/api/verify-otp",data);
 export const activate = async (data)=>await api.post("/api/activate",data);

  

 

export default api;



