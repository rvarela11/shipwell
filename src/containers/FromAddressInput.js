// @vendors
import { connect } from 'react-redux';

// @components
import AddressInput from '../components/AddressInput/AddressInput';

// @actions
import { validateAddress, disableAddressCardButton } from '../actions';

const mapStateToProps = state => ({
    label: 'From',
    geocoded_address: state.geocoded_address_From,
    isAddressValid: state.isAddressValid_From
});

const mapDispatchToProps = dispatch => ({
    onBlur: (formattedAddress) => {
        dispatch(validateAddress(formattedAddress, 'From'));
    },
    onFocus: () => {
        dispatch(disableAddressCardButton());
    }
});

const FromAddressInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressInput);

export default FromAddressInput;
