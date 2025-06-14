import axios from 'axios'

const api=axios.create({
    baseURL:import.meta.env.VITE_API_URL 
})

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem('access_token')
    if(token){
        config.headers.Authorization=`Bearer ${token}`
        
    }
    return config
})

api.interceptors.response.use(res=>res,
    async error=>{
        const originalRequest=error.config
        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry=true
        
        try{
            const refreshToken=localStorage.getItem('refresh_token')
            const response=await axios.post(`api/token/refresh`,{
                refresh:refreshToken
            })
            const newToken=response.data.access
            localStorage.setItem('access_token',newToken)
            api.defaults.headers.Authorization=`Bearer ${newToken}`
            //retry the original request
            originalRequest.headers.Authorization=`Bearer ${newToken}`
            return api(originalRequest)
        }catch(refreshError){
            localStorage.clear()
            console.log('logged out')
        }
    }
        return Promise.reject(error)
    }
)

export default api