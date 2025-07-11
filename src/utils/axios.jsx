import axios from "axios";

let instance = axios.create({
    baseURL: "https://todo-backend-nc5v.onrender.com",
    
})



export default instance
