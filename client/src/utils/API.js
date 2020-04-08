import axios from axios;

// apis to get the google book info

// export default {
//     GetBookInfo(){
//         return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");
//     }
// };

export const saveBook = bookData => {
    return axios.post('/api/books', bookData)
};

export const getSavedBook = () =>  {
    return axios.get('/api/books');
};

export const removeBook = () = bookId => {
    return axios.delete('/api/books/${bookId');
};

export const searchGoogleBooks = query => {
    return axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            q: query
        }
    });
};

export default {
    saveBook,
    getSavedBook,
    removeBook,
    searchGoogleBooks
};

}