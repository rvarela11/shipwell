// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../components/AddressInput/AddressInput';

// @actions
import { validateAddress, disableAddressCardButton } from '../actions';

const mapStateToProps = state => ({
    label: 'From',
    geocoded_address: state.geocoded_address_Origin,
    isAddressValid: state.isAddressValid_Origin
});

const mapDispatchToProps = dispatch => ({
    onBlur: (formattedAddress) => {
        dispatch(validateAddress(formattedAddress, 'Origin'));
    },
    onChange: (value) => {
        dispatch(disableAddressCardButton(value, 'Origin'));
    }
});

const AddressCardInputFrom = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressInput);

export default AddressCardInputFrom;
