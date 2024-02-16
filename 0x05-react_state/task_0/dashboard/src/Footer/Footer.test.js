import React from 'react';
import Footer from './Footer';
import { shallow } from "enzyme";


describe('<Footer />', () => {
    it('Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeDefined();
    });

    it('Footer renders the text Copyright', () => {
        const wrapper = shallow(<Footer />);
        const footerText = wrapper.text();
        expect(footerText).toContain('Copyright');
    });
});