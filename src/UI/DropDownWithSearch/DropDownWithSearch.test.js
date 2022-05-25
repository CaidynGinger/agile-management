import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropDownWithSearch } from "./DropDownWithSearch";

describe("Dropdown input component with Search", () => {
  const component = (
    <DropDownWithSearch
      // onSelectHandler={onSelectHandler}
      dropdownList={[
        { id: 1, title: "Caidyn" },
        { id: 2, title: "Justin" },
      ]}
      type="text"
      id="usernames"
      required={true}
      label="User Names"
    />
  );
  test("Input label 'User Names' is rendered", () => {
    // Arrange
    render(component);
    // Act
    // ... nothing
    // Assert
    const outputElement = screen.getByText("User Names", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("DropDown is not rendered", () => {
    // Arrange
    render(component);
    // Act
    // ... nothing
    // Assert
  });
});
