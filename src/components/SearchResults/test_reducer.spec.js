import data from "./reducer.js";

describe("sent reducers", () => {
  let initialState = {};

  initialState.data = [{}];

  it("REQUEST_SEARCH_DATA", () => {
    expect(
      data(initialState, {
        type: "REQUEST_SEARCH_DATA"
      })
    ).toEqual({ data: [{}], isFetching: true });
  });

  it("RECEIVE_SEARCH_DATA", () => {
    var payload = {
      title: "The Hobbit",
      id: "xyz"
    };

    expect(
      data(initialState, {
        type: "RECEIVE_SEARCH_DATA",
        payload: payload
      })
    ).toEqual({
      isFetching: false,
      search_data: { id: "xyz", title: "The Hobbit" }
    });
  });
});