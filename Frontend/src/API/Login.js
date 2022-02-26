import axios from 'axios';

export const GetUser = async (username, password) => {
    const isUserRegisted = await axios.get(
        `http://localhost:5000/Login`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
        
    return isUserRegisted;
};