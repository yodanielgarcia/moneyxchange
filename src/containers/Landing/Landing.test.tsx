import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { modifyToCurrencyFormat } from "../../utils/functions/numbers";
import Landing from "./Landing";

configure({ adapter: new Adapter() });

describe("<Landing />", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = mount(<Landing />);
  });

  afterAll(() => {
    wrapper = null;
  });

  it("Can render Landing without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Expect Landing to render Header component", () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it("Expect Landing to render ExchangeForm component", () => {
    expect(wrapper.find(ExchangeForm).length).toEqual(1);
  });

  it("Expect Landing to render Footer component", () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });

  it("Expect rate calculation method to output the correct result- (1.1234 x 2) should return 2.2468", () => {
    expect(modifyToCurrencyFormat(+(1.1234 * 2).toFixed(4))).toEqual("2.2468");
  });
});
