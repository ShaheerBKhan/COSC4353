import axios from 'axios';

/* *** GET REQUESTS *** */
export const GetUser = async (username, password) => {
    console.log("GetUser Function: ", username, password);
    const isUserInDatabase = await axios.get(
        `http://localhost:5000/GetUserInDatabase`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
        
    return isUserInDatabase;
};

export const GetUserAccountInformation = async (userId) => {
    const accountInformation = await axios.get(
        `http://localhost:5000/GetUserAccountInformation`, 
        { 
            params: {
                userId
            }
        });
        
    return accountInformation;
};

export const GetUserFuelHistory = async (userId) => {
    const fuelQuoteHistory = await axios.get(
        `http://localhost:5000/GetUserFuelHistory`, 
        { 
            params: {
                userId
            }
        });
        
    return fuelQuoteHistory;
};

/* *** POST REQUESTS *** */
export const PostFuelQuoteForm = async (userId, gallons, deliveryAddress, deliveryDate, pricePerGallon, totalAmount) => {
    await axios.post(
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
};

export const PostUserRegistrationFirst = async (username, password) => {
    await axios.post(
        `http://localhost:5000/PostUserRegistrationFirst`, {},  
        { 
            params: {
                username: username,
                password: password
            }
        });
};

export const PostUserRegistrationSecond = async (userId, fullName, addressOne, addressTwo, city, state, zipcode) => {
    await axios.post(
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
};