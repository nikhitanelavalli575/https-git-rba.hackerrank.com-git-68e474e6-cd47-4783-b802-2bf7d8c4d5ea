import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { PopularAuthors } from "../Home/PopularAuthors.js";
import { TrendingBooks } from "../Home/TrendingBooks.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing Home component", () => {
    const mockLoginfn1 = jest.fn();
    test("checking title", () => {
        const wrapper = shallow(<PopularAuthors />);

        const firstRow = wrapper.find("div").at(3);
        expect(firstRow.text()).toContain("Suzanne Collins");
    });

    test("checking title", () => {
        const wrapper = shallow(<TrendingBooks />);

        const firstRow = wrapper.find("div").at(3);
        expect(firstRow.text()).toContain("The Hunger Games");
    });
});