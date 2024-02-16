import React from "react";
import withLogging from "./WithLogging";
import { shallow, mount } from "enzyme";
import Login from "../Login/Login";


describe('WithLogging HOC', () => {
    const WrappedComponent = withLogging(() => <p>test</p>)
    it('calls console.log on mount and unmount', () => {
        const spy = jest.spyOn(console, "log").mockImplementation();
        const NewComponent = withLogging(WrappedComponent);
        const wrapper = mount(<NewComponent />);
        expect(spy).toBeCalled();
        wrapper.unmount();
        expect(spy).toBeCalled();
        spy.mockRestore();
    });

    it('calls console.log when wrapped element is Login', () => {
        const spy = jest.spyOn(console, "log").mockImplementation();
        const NewComponent = withLogging(Login);
        const wrapper = mount(<NewComponent />);
        expect(spy).toBeCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(spy).toBeCalledWith('Component Login is going to unmount');
        spy.mockRestore();
    });
});