import { act } from 'react-dom/test-utils';
import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import Input from '../Input';

describe("Input", () => {
  it("should render the input", () => {
    render(<Input />);
    expect(screen.getByTestId("input-wrapper")).toBeInTheDocument();
  });

  it("should render the icon", () => {
    render(<Input icon={<i className="fa-solid fa-search" />} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render the input value", () => {
    render(<Input value="My Value" />);
    expect(screen.getByTestId("input")).toHaveValue("My Value");
  });

  it("should render the clear button", () => {
    render(<Input value="My Value" />);
    expect(screen.getByTestId("clear")).toBeInTheDocument();
  });

  it("should clear the input value when the clear button is clicked", () => {
    const handleClear = vi.fn();

    render(<Input value="My Value" onChange={handleClear} />);

    act(() => {
      screen.getByTestId("clear").click();
    });

    expect(handleClear).toBeCalled();
  });
});
