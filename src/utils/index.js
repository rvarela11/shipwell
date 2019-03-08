/* eslint-disable camelcase */

// Disable button when input is blank, has an error, or is onFocus
// This will avoid polluting the database
export const isButtonDisabled = (
    formatted_address_From,
    formatted_address_To,
    isAddressValid_From,
    isAddressValid_To,
    isAddressCardButtonDisabled
) => ((formatted_address_From === '' || formatted_address_To === '') || (!isAddressValid_From || !isAddressValid_To) || isAddressCardButtonDisabled);
