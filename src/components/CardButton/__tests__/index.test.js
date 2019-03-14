// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import CardButton from '../CardButton';

describe('CardButton', () => {
    it('renders CardButton without crashing', () => {
        shallow(
            <CardButton
                classes={{}}
                label=""
                isCardButtonDisabled
                path=""
            />
        );
    });
});
