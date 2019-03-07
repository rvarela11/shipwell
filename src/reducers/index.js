const initialState = {
    companyData: [],
    userData: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_DATA':
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
