// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../components/AddressInput/AddressInput';

// @actions
import { validateAddress } from '../actions';

const mapStateToProps = state => ({
    label: 'To',
    geocoded_address_formatted_address: state.geocoded_address_formatted_address,
    isAddressValid: state.isAddressValid
});

const mapDispatchToProps = dispatch => ({
    onBlur: (value) => {
        const addressEnding = value.slice(-4);
        const formattedAddress = (addressEnding === ', US') ? value : `${value}, US`;
        dispatch(validateAddress(formattedAddress));
    }
});

const ToAddressInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressInput);

export default ToAddressInput;
