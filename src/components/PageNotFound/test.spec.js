import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "../PageNotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Header component", () => {
	test("checking input box", () => {
		const wrapper = shallow(<PageNotFound />);
		const content = wrapper.find("p").at(0);
		expect(content.text()).toContain("Not Found");
	});
});