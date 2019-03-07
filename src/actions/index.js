const axios = require('axios');

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

export const RES_VALIDATE_ADDRESS = 'RES_VALIDATE_ADDRESS';
export const resValidateAddress = data => ({
    type: RES_VALIDATE_ADDRESS,
    payload: data
});

export const validateAddress = address => (dispatch) => {
    const URL = 'https://dev-api.shipwell.com/v2/locations/addresses/validate/ ';
    axios({
        method: 'post',
        url: URL,
        data: {
            formatted_address: address
        }
    })
        .then(response => dispatch(resValidateAddress(response.data)))
        .catch(error => console.log('Error', error));
};
