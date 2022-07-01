import { configure, mount, shallow } from "enzyme";
import React from "react";
import App from "../../src/components/App";
import "../src/styles/styles.css";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
