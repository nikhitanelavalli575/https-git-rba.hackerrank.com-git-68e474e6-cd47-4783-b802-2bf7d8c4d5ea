import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { Results } from "../SearchResults";
import { data } from "../../test-data/search.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing SearchResults component", () => {
  let wrapper;
  const mockfn1 = jest.fn();

  test("checking loading screen", () => {
    var params = {
      params: {
        search: "the lord of the rings",
        search_by: "title"
      }
    };
    const wrapper = shallow(
      <Results
        requestSearchData={mockfn1}
        data={data}
        isFetching={true}
        match={params}
      />
    );

    const loading = wrapper.find("h1").at(0);
    expect(loading.text()).toContain("Loading");
  });
  test("checking title", () => {
    var params = {
      params: {
        search: "the lord of the rings",
        search_by: "title"
      }
    };
    const wrapper = shallow(
      <Results
        requestSearchData={mockfn1}
        data={data}
        isFetching={false}
        match={params}
      />
    );

    const loading = wrapper.find("h2").at(1);
    expect(loading.text()).toContain("The Lord of the Rings");
  });
});