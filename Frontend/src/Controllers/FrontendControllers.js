import axios from 'axios';

export const GetUser = async (username, password) => {
    const isUserInDatabase = await axios.get(
        `http://localhost:5000/GetUser`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
        
    return isUserInDatabase;
};

export const PostFuelQuoteForm = async (username, password) => {
    await axios.post(
        `http://localhost:5000/PostFuelQuoteForm`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
};

export const PostUserRegistrationFirst = async (username, password) => {
    await axios.post(
        `http://localhost:5000/PostUserRegistrationFirst`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
};

export const PostUserRegistrationSecond = async (username, password) => {
    await axios.post(
        `http://localhost:5000/PostUserRegistrationSecond`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
};