import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

// test("Contact form renders correctly", () => {
//   //Arrange
//     const getByText = render(<App/>);

//   //Act
//     const title = getByText(/First Name/)

//   //Assert
//     expect(title).toBeInTheDocument();
// })
test('name is on the form', () => {
  const {queryByLabelText} = render(<App />);
  const name = queryByLabelText(/message/i);
  expect(name).not.toBeInTheDocument();
}); 