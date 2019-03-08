// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../components/AddressInput/AddressInput';

// @actions
import { validateAddress, disableAddressCardButton } from '../actions';

const mapStateToProps = state => ({
    label: 'To',
    geocoded_address: state.geocoded_address_To,
    isAddressValid: state.isAddressValid_To
});

const mapDispatchToProps = dispatch => ({
    onBlur: (formattedAddress) => {
        dispatch(validateAddress(formattedAddress, 'To'));
    },
    onChange: (value) => {
        dispatch(disableAddressCardButton(value, 'To'));
    }
});

const AddressCardInputTo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressInput);

export default AddressCardInputTo;
