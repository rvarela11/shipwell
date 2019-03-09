const axios = require('axios');

// Initial GET request to get the user data

export const RES_USER_DATA = 'RES_USER_DATA';
export const resUserData = data => ({
    type: RES_USER_DATA,
    payload: data
});

export const getUserData = () => (dispatch) => {
    const URL = 'https://dev-api.shipwell.com/v2/auth/me/ ';
    const token = '4c4547fe6ad68c57cbac0a8cfbfec35b';
    axios.get(URL, {
        headers: {
            Authorization: `Token ${token}`
        }
    })
        .then(response => dispatch(resUserData(response.data)))
        .catch(error => console.log('Error', error));
};

// GET request to validate address

export const RES_VALIDATE_ADDRESS = 'RES_VALIDATE_ADDRESS';
export const resValidateAddress = (data, label) => ({
    type: RES_VALIDATE_ADDRESS,
    payload: data,
    label
});

export const validateAddress = (address, label) => (dispatch) => {
    const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/ ';
    axios({
        method: 'post',
        url: URL,
        data: {
            formatted_address: address
        }
    })
        .then(response => dispatch(resValidateAddress(response.data, label)))
        .catch(error => console.log('Error', error));
};

// Action to disable button when input triggers onChange

export const DISABLE_ADDRESS_CARD_BUTTON = 'DISABLE_ADDRESS_CARD_BUTTON';
export const disableAddressCardButton = (value, label) => ({
    type: DISABLE_ADDRESS_CARD_BUTTON,
    value,
    label
});
