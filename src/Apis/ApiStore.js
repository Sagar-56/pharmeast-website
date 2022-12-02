import axios from "axios";

export default axios.create({
    baseURL: "https://minodeapi.herokuapp.com"
})