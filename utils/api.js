import axios from axios;

// apis to get the google book info

export default {
    GetBookInfo(){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");
    }
};