import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";


describe('<Login />', () => {
    it('Login renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeDefined();
    });

    it('Login renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        const element = wrapper.find('label');
        expect(element).toHaveLength(2)
    });

    it('Login renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        const element = wrapper.find('input');
        expect(element).toHaveLength(2)
    });
});