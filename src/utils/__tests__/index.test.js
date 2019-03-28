// @functions
import { addUSToAddress, isButtonDisabled } from '../';

describe('Test addUSToAddress function', () => {
    it("add ', US'", () => {
        expect(addUSToAddress('515 Congress Ave, Austin, TX 78701')).toBe('515 Congress Ave, Austin, TX 78701, US');
    });
    it("not add ', US'", () => {
        expect(addUSToAddress('515 Congress Ave, Austin, TX 78701, US')).toBe('515 Congress Ave, Austin, TX 78701, US');
    });
});

describe('Test isButtonDisabled function', () => {
    let input_address_Origin = '';
    let input_address_Destination = '';
    let isAddressValid_Origin = true;
    let isAddressValid_Destination = true;
    let isAddressCardButtonDisabled = true;
    it('Start', () => {
        expect(
            isButtonDisabled(
                input_address_Origin,
                input_address_Destination,
                isAddressValid_Origin,
                isAddressValid_Destination,
                isAddressCardButtonDisabled
            )
        ).toBe(true);
    });
    it('Origin input filled. Destination blank', () => {
        input_address_Origin = '1400 E 4th St, Austin, TX 78702';
        isAddressCardButtonDisabled= false;
        expect(
            isButtonDisabled(
                input_address_Origin,
                input_address_Destination,
                isAddressValid_Origin,
                isAddressValid_Destination,
                isAddressCardButtonDisabled
            )
        ).toBe(true);
    });
    it('Destination input filled. Origin blank', () => {
        input_address_Destination = '515 Congress Ave, Austin, TX 78701';
        input_address_Origin = '';
        expect(
            isButtonDisabled(
                input_address_Origin,
                input_address_Destination,
                isAddressValid_Origin,
                isAddressValid_Destination,
                isAddressCardButtonDisabled
            )
        ).toBe(true);
    });
    it('isButtonDisabled = false', () => {
        input_address_Origin = '1400 E 4th St, Austin, TX 78702';
        expect(
            isButtonDisabled(
                input_address_Origin,
                input_address_Destination,
                isAddressValid_Origin,
                isAddressValid_Destination,
                isAddressCardButtonDisabled
            )
        ).toBe(false);
    });
});
