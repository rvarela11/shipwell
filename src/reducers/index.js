const initialState = {
    companyData: [],
    isToDestinationValid: false,
    isFromDestinationValid: false,
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
        default:
            return state;
    }
};
