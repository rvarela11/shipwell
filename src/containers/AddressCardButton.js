// @vendors
import { connect } from 'react-redux';

// @components
import CardButton from '../components/CardButton/CardButton';

// @utils
import { isButtonDisabled } from '../utils';

const mapStateToProps = state => ({
    label: 'Search',
    isCardButtonDisabled: isButtonDisabled(state.input_address_From, state.input_address_To, state.isAddressValid_From, state.isAddressValid_To, state.isAddressCardButtonDisabled)
});

const AddressCardButton = connect(
    mapStateToProps,
    null
)(CardButton);

export default AddressCardButton;
