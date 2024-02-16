import React from "react";
import App from "./App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { shallow, mount } from "enzyme";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it("App contains Header component", () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find(Header);
    expect(component.exists()).toBe(true);
  });

  it("App contains Login component", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    const component = wrapper.find(Login);
    expect(component.exists()).toBe(true);
  });

  it("App contains Footer component", () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find(Footer);
    expect(component.exists()).toBe(true);
  });

  window.alert = jest.fn();
  it("test when ctrl and h keys are pressed", () => {
    const mockfunc = jest.fn();
    const wrapper = mount(<App logOut={mockfunc} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(mockfunc).toHaveBeenCalled();
    wrapper.unmount();
  });
  it("alert is called with the string Logging you out", () => {
  const wrapper = mount(<App />);
  const spy = jest.spyOn(window, "alert");
  const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
  document.dispatchEvent(event);
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Logging you out");
  wrapper.unmount();
  });
});
