const axios = require('axios');

export const GET_USER_DATA = 'GET_USER_DATA';
export const resUserData = data => ({
    type: GET_USER_DATA,
    payload: data
});

export const getUserData = () => (dispatch) => {
    const URL = 'https://dev-api.shipwell.com/v2/auth/me/ ';
    const token = '4c4547fe6ad68c57cbac0a8cfbfec35b';
    axios.get(URL, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Authorization: `Token ${token}`
        }
    })
        .then(response => dispatch(resUserData(response.data)))
        .catch(error => console.log('Error', error));
};
