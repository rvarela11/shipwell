// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../../components/AddressInput/AddressInput';

// @actions
import { fetchValidateAddress, disableAddressCardButton } from '../../actions';

export const mapStateToProps = state => ({
    label: 'From',
    geocoded_address: state.geocoded_address_Origin,
    isAddressValid: state.isAddressValid_Origin
});

export const mapDispatchToProps = dispatch => ({
    onBlur: (formattedAddress) => {
        dispatch(fetchValidateAddress(formattedAddress, 'Origin'));
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
