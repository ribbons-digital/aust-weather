import "jsdom-global/register";
import { configure, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
configure({ adapter: new Adapter() });

const selectedCity = jest.fn();
const setSelectedCity = jest.fn();

import cities from "../../src/data/openWeather/cities.json";
import Dropdown from "../../src/components/Dropdown";

const dropdownProps = {
  cities,
  selectedCity,
  setSelectedCity,
};

describe("dropdown", () => {
  it("accepts cities props", () => {
    console.log(dropdownProps);
    const wrapper = mount(<Dropdown data={dropdownProps} />);
    expect(wrapper.props().data).toEqual(dropdownProps);
  });
});
