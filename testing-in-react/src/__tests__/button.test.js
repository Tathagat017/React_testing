import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Components/Button";
import App from "./../App";
import Counter from "./../Components/Counter";
import renderer from "react-test-renderer";
// wrapped is describe
// test if button renders. --> it should render
//what is you want to check first --> button should be rendering --> it should be there in virtual DOM of testing -->nothing to do with localhost and react virtual DOM we are doing via run start

// hence render it first

describe("Testing Button component", () => {
  it("Button should render on DOM", () => {
    render(
      <Button color={"teal"} size={"large"}>
        Hello
      </Button>

      //   <App />
    );
    const button = screen.getByText("Hello");
    expect(button).toBeInTheDocument();
    screen.debug();
  });

  it(" custom Button should be present on DOM", () => {
    render(
      <Button color={"teal"} size={"large"}>
        Custom Button
      </Button>
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
    screen.debug();
  });

  it("Button should have text Hello", () => {
    render(<App />); // renders on the screen of testing(testing virtual dom)
    const button = screen.getAllByTestId("custom-button"); //returns array
    // let text = button[0].textContent();
    // expect(text).toEqual("Hello");
    //w expect(button[0]).toHaveTextContent("Hello");
    expect(button[1]).toHaveTextContent("Click");
  });
});

describe("Test the Counter", () => {
  it("test counter", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    const button = screen.getByTestId("custom-button");
    screen.debug();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should have initial value", () => {
    render(<Counter />);
    const text = screen.getByTestId("counter");
    expect(text).toHaveTextContent("Counter:0");
    const addButton = screen.getByTestId("custom-button");
    fireEvent.click(addButton);
    // screen.debug();
    expect(text).toHaveTextContent("Counter:1");
  });

  it("should invoke a function ", () => {
    const mock = jest.fn();
    render(<Button handleAdd={mock}></Button>);
    const button = screen.getByTestId("custom-button");
    for (let i = 0; i < 2; i++) {
      fireEvent.click(button);
    }
    //expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(2);
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Button size={"large"} color={"teal"}>
          Click Me
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
