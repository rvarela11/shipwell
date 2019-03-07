const initialState = {
    companyData: [],
    geocoded_address_formatted_address: '',
    isToAddressValid: true,
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
            // geocoded_address
            // provided_formatted_address
            // warnings
            // eslint-disable-next-line camelcase
            const { geocoded_address, warnings } = action.payload;
            console.log(action.payload);
            console.log(geocoded_address.formatted_address);
            return {
                ...state,
                geocoded_address_formatted_address: geocoded_address.formatted_address,
                isToAddressValid: (!Array.isArray(warnings) || !warnings.length)
            };
        default:
            return state;
    }
};
