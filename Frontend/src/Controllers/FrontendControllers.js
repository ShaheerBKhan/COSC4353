import axios from 'axios';

/* *** GET REQUESTS *** */
export const GetUserInDatabase = async (username, password) => {
    const result = await axios.get(
        `http://localhost:5000/GetUserInDatabase`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
        
    return result.data;
};

export const GetUserId = async (username, password) => {
    const result = await axios.get(
        `http://localhost:5000/GetUserId`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
        
    return result.data;
};

export const GetUserAccountInformation = async (userId) => {
    const result = await axios.get(
        `http://localhost:5000/GetUserAccountInformation`, 
        { 
            params: {
                userId
            }
        });
        
    return result.data;
};

export const GetUserFuelHistory = async (userId) => {
    const result = await axios.get(
        `http://localhost:5000/GetUserFuelHistory`, 
        { 
            params: {
                userId
            }
        });
        
    return result.data;
};

/* *** POST REQUESTS *** */
export const PostFuelQuoteForm = async (userId, gallons, deliveryAddress, deliveryDate, pricePerGallon, totalAmount) => {
    const result = await axios.post(
        `http://localhost:5000/PostFuelQuoteForm`, {}, 
        { 
            params: {
                userId: userId,
                gallons: gallons,
                deliveryAddress: deliveryAddress,
                deliveryDate: deliveryDate,
                pricePerGallon: pricePerGallon,
                totalAmount: totalAmount
            }
        });
    
    return result.data;
};

export const PostUserRegistrationFirst = async (username, password) => {
    const result = await axios.post(
        `http://localhost:5000/PostUserRegistrationFirst`, {},  
        { 
            params: {
                username: username,
                password: password
            }
        });
    
    return result.data;
};

export const PostUserRegistrationSecond = async (userId, fullName, addressOne, addressTwo, city, state, zipcode) => {
    const result = await axios.post(
        `http://localhost:5000/PostUserRegistrationSecond`, {},  
        { 
            params: {
                userId: userId,
                fullName: fullName,
                addressOne: addressOne,
                addressTwo: addressTwo,
                city: city,
                state: state,
                zipcode: zipcode
            }
        });

    return result.data;
};