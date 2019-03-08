const initialState = {
    companyData: [],
    geocoded_address_From: '',
    geocoded_address_To: '',
    input_address_From: '',
    input_address_To: '',
    isAddressCardButtonDisabled: true,
    isAddressValid_From: true,
    isAddressValid_To: true,
    userData: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RES_USER_DATA':
            const { company, user } = action.payload;
            return {
                ...state,
                companyData: state.companyData.concat(company),
                userData: state.userData.concat(user)
            };
        case 'RES_VALIDATE_ADDRESS':
            // Setting 2 (From & To) geocoded_address and isAddressValid
            // This will show specific error message if both inputs are being used
            // eslint-disable-next-line camelcase
            const { geocoded_address, warnings } = action.payload;
            const { label } = action;
            console.log(action.payload);
            return {
                ...state,
                [`geocoded_address_${label}`]: geocoded_address.formatted_address,
                [`isAddressValid_${label}`]: (!Array.isArray(warnings) || !warnings.length),
                isAddressCardButtonDisabled: false
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
