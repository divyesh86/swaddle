import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 60000,
});

export default {


    insertAccounts: async function(token) {
        console.log("token >>>>>"+token);
        return await axiosInstance.post('/insertAccounts', {token});
    },

    getAccounts: async function() {
        return await axiosInstance.get('/getAccounts');
    },



    postNote: async function(note) {
        return await axiosInstance.post("/postComment", {note});
    },

    login: async function(email, password) {
        return await axiosInstance.post("/login", {email, password});
    },

    signup: async function(email, password, name, phone) {
        let result = await axiosInstance.post("/signup", {email, password, name, phone});
        console.log(result);
        return result;
    },


    //Get transactions
    getTransactions: async function() {
        return await axiosInstance.get("/getTransactions");
    }

};
