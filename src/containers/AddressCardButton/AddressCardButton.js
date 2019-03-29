// @vendors
import { connect } from 'react-redux';

// @components
import CardButton from '../../components/CardButton/CardButton';

// @utils
import { isButtonDisabled } from '../../utils';

export const mapStateToProps = (state) => {
    const {
        input_address_Origin,
        input_address_Destination,
        isAddressValid_Origin,
        isAddressValid_Destination,
        isAddressCardButtonDisabled
    } = state;
    return ({
        label: 'Search',
        isCardButtonDisabled: isButtonDisabled(input_address_Origin, input_address_Destination, isAddressValid_Origin, isAddressValid_Destination, isAddressCardButtonDisabled),
        path: '/shipwell/results'
    })
};

const AddressCardButton = connect(mapStateToProps, null)(CardButton);

export default AddressCardButton;
