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
 export const logout= ()=>api.post('/api/logout');


 // interceptors
 
api.interceptors.response.use((config)=>{
    return config
},async (error)=>{
    const originalRequest = error.config;
    if (error.response.status==401 && originalRequest && !originalRequest._isRetry){
        originalRequest._isRetry=true;
        try{
           await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`,
           {
            withCredentials: true,
           }
           )
           return api.request(originalRequest);
        }catch(error){
           console.log(error.message);
        }
    }
    throw error;
});


  

 

export default api;



