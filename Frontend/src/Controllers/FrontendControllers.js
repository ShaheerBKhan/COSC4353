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

export const PostFuelQuoteForm = async (gallons, deliveryAddress, deliveryDate, pricePerGallon, totalAmount) => {
    await axios.post(
        `http://localhost:5000/PostFuelQuoteForm`, 
        { 
            params: {
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
        `http://localhost:5000/PostUserRegistrationFirst`, 
        { 
            params: {
                username: username,
                password: password
            }
        });
};

export const PostUserRegistrationSecond = async (fullName, addressOne, addressTwo, city, state, zipcode) => {
    await axios.post(
        `http://localhost:5000/PostUserRegistrationSecond`, 
        { 
            params: {
                fullName: fullName,
                addressOne: addressOne,
                addressTwo: addressTwo,
                city: city,
                state: state,
                zipcode: zipcode
            }
        });
};