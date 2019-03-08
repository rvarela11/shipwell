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
