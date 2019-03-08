/* eslint-disable camelcase */

// Disable button when input is blank, has an error, or is onChange
// This will avoid polluting the database
export const isButtonDisabled = (
    input_address_From,
    input_address_To,
    isAddressValid_From,
    isAddressValid_To,
    isAddressCardButtonDisabled
) => ((input_address_From === '' || input_address_To === '') || (!isAddressValid_From || !isAddressValid_To) || isAddressCardButtonDisabled);
