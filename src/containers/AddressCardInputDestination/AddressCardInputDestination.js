// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../../components/AddressInput/AddressInput';

// @actions
import { fetchValidateAddress, disableAddressCardButton } from '../../actions';

export const mapStateToProps = state => ({
    label: 'To',
    geocoded_address: state.geocoded_address_Destination,
    isAddressValid: state.isAddressValid_Destination
});

export const mapDispatchToProps = dispatch => ({
    onBlur: (formattedAddress) => {
        dispatch(fetchValidateAddress(formattedAddress, 'Destination'));
    },
    onChange: (value) => {
        dispatch(disableAddressCardButton(value, 'Destination'));
    }
});

const AddressCardInputTo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressInput);

export default AddressCardInputTo;
