import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { Header } from "../Header";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Header component", () => {
  const mockfn1 = jest.fn();
  const mockfn2 = jest.fn();
  const history = [];
  var location = {
    pathname: "OL25887889M"
  };
  const spy = jest.spyOn(Header.prototype, "handleKeyPress");
  test("checking input box state change", () => {
    const wrapper = shallow(<Header history={history} location={location} />);
    const handleKeyPress = jest.fn();
    wrapper.find("input").simulate("change", { target: { value: "hobbit" } });
    expect(wrapper.state().search_word).toEqual("hobbit");
    wrapper
      .find("input")
      .simulate("change", { target: { value: "lord of the rings" } });
    wrapper.find("input").simulate("keypress", { key: "Enter" });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("checking dropdown state change", () => {
    var params = {
      params: {
        id: "OL25887889M"
      }
    };
    const wrapper = shallow(<Header history={history} location={location} />);
    wrapper.find("select").simulate("change", { target: { value: "author" } });
    expect(wrapper.state().search_by).toEqual("author");
  });
});