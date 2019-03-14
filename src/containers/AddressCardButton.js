// @vendors
import { connect } from 'react-redux';

// @components
import CardButton from '../components/CardButton/CardButton';

// @utils
import { isButtonDisabled } from '../utils';

const mapStateToProps = state => ({
    label: 'Search',
    isCardButtonDisabled: isButtonDisabled(state.input_address_Origin, state.input_address_Destination, state.isAddressValid_Origin, state.isAddressValid_Destination, state.isAddressCardButtonDisabled),
    path: '/shipwell/results'
});

const AddressCardButton = connect(mapStateToProps, null)(CardButton);

export default AddressCardButton;
