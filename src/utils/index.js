/* eslint-disable camelcase */

// Disable button when input is blank, has an error, or is onChange
// This will avoid polluting the database
export const isButtonDisabled = (
    input_address_Origin,
    input_address_Destination,
    isAddressValid_Origin,
    isAddressValid_Destination,
    isAddressCardButtonDisabled
) => ((input_address_Origin === '' || input_address_Destination === '') || (!isAddressValid_Origin || !isAddressValid_Destination) || isAddressCardButtonDisabled);


// Add ', US' to the Shipwell API validation
export const addUSToAddress = (value) => {
    const addressEnding = value.slice(-4);
    return (addressEnding === ', US') ? value : `${value}, US`;
};
