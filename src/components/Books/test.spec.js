import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, render } from "enzyme";
import { Books } from "../Books";
import {data} from "../../test-data/books.js";
Enzyme.configure({ adapter: new Adapter() });

describe("testing Books component", () => {
  let wrapper;
  const mockfn1 = jest.fn();
  test("checking title", () => {
    var params = {
      params: {
        id: "OL25887889M"
      }
    };
    const wrapper = shallow(
      <Books
        requestBookData={mockfn1}
        data={data}
        isFetching={false}
        id="1"
        match={params}
      />
    );
    const title = wrapper.find("h1").at(0);
    expect(title.text()).toContain("The hunger games");
  });

    test("checking loading screen", () => {
    var params = {
      params: {
        id: "OL25887889M"
      }
    };
    const wrapper = shallow(
      <Books
        requestBookData={mockfn1}
        data={data}
        isFetching={true}
        id="1"
        match={params}
      />
    );

    const loading = wrapper.find("h1").at(0);
    expect(loading.text()).toContain("Loading");
  });


 
});