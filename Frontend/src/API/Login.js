import axios from 'axios';

const GetUser = async (username, password) => {
    const isUserRegisted = await axios.get('/Login', { 
        params: {
            username: username,
            password: password
        }
    });

    return isUserRegisted;
};