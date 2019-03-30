const axios = require('axios');

// GET request for user data

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const fetchUserBegin = () => ({
    type: FETCH_USER_BEGIN
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = data => ({
    type: FETCH_USER_SUCCESS,
    payload: data
});

export const fetchUser = () => (dispatch) => {
    dispatch(fetchUserBegin());
    const URL = 'https://dev-api.shipwell.com/v2/auth/me/ ';
    const token = '4c4547fe6ad68c57cbac0a8cfbfec35b';
    axios.get(URL, {
        headers: {
            Authorization: `Token ${token}`
        }
    })
        .then(response => dispatch(fetchUserSuccess(response.data)))
        .catch(error => console.log('Error', error));
};

// GET request to validate address

export const FETCH_VALIDATE_ADDRESS_SUCCESS = 'FETCH_VALIDATE_ADDRESS_SUCCESS';
export const fetchValidateAddressSuccess = (data, label) => ({
    type: FETCH_VALIDATE_ADDRESS_SUCCESS,
    payload: data,
    label
});

export const fetchValidateAddress = (address, label) => (dispatch) => {
    const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/ ';
    axios({
        method: 'post',
        url: URL,
        data: {
            formatted_address: address
        }
    })
        .then(response => dispatch(fetchValidateAddressSuccess(response.data, label)))
        .catch(error => console.log('Error', error));
};

// Action to disable button when input triggers onChange

export const DISABLE_ADDRESS_CARD_BUTTON = 'DISABLE_ADDRESS_CARD_BUTTON';
export const disableAddressCardButton = (value, label) => ({
    type: DISABLE_ADDRESS_CARD_BUTTON,
    value,
    label
});
