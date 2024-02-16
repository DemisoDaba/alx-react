import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";



describe('<BodySection/>', () => {
    it('renders correctly the children and one h2 element', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.exists("h2")).toBe(true);
        expect(wrapper.find("h2").html()).toEqual("<h2>test title</h2>");
        expect(wrapper.exists("p")).toBe(true);
        expect(wrapper.find("p").text()).toEqual("test children node");
    });
});