import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe('<BodySectionWithMarginBottom/>', () => {
    it('renders correctly BodySction and props passed correctly', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test" />);
        expect(wrapper.find(BodySection)).toHaveLength(1);
        expect(wrapper.find(BodySection).html()).toEqual('<div class="bodySection"><h2>test</h2></div>');
    });
});