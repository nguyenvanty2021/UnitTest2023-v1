import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
// viết test cách 1 là .test
// nếu dùng .test thì dùng .test
// tương tự test là describe.only or describe.skip
describe("Greet", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Renders correctly", () => {
    render(<App />);
    //const textElement = screen.getByText("Learn React");
    const textElement = screen.getByText(/Learn React/i);
    expect(textElement).toBeInTheDocument();
  });
  // nếu dùng test.only('', () =>{}) là bỏ qua test này or test.skip
  test("Renders with a name", () => {
    render(<App name="Vishwas" />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Application", () => {
  test("renders", () => {
    render(<App />);

    /** getByRole */

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
    expect(submitElement).toBeDisabled();

    /** getByLabelText */

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    /** getByText */

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    /** getByAltText */

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /** getByTitle */

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /** getByTestId */

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
