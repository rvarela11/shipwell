/* eslint-disable camelcase */
const initialState = {
    companyData: [],
    geocoded_address_Origin: '',
    geocoded_address_Destination: '',
    input_address_Origin: '',
    input_address_Destination: '',
    isAddressCardButtonDisabled: true,
    isAddressValid_Origin: true,
    isAddressValid_Destination: true,
    latitude_address_Origin: null,
    longitude_address_Origin: null,
    latitude_address_Destination: null,
    longitude_address_Destination: null,
    userData: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RES_USER_DATA':
            const { company, user } = action.payload;
            console.log(action.payload);
            return {
                ...state,
                companyData: state.companyData.concat(company),
                userData: state.userData.concat(user)
            };
        case 'RES_VALIDATE_ADDRESS':
            // Setting 2 (Origin & Destination) geocoded_address and isAddressValid
            // This will show specific error message if both inputs are being used
            const { geocoded_address, warnings } = action.payload;
            const { formatted_address, latitude, longitude } = geocoded_address;
            const { label } = action;
            return {
                ...state,
                [`geocoded_address_${label}`]: formatted_address,
                [`isAddressValid_${label}`]: (!Array.isArray(warnings) || !warnings.length),
                isAddressCardButtonDisabled: false,
                [`latitude_address_${label}`]: latitude,
                [`longitude_address_${label}`]: longitude
            };
        case 'DISABLE_ADDRESS_CARD_BUTTON':
            const { value } = action;
            return {
                ...state,
                [`input_address_${action.label}`]: value,
                isAddressCardButtonDisabled: true
            };
        default:
            return state;
    }
};
