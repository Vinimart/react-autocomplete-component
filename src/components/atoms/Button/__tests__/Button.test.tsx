import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import Button from '../Button';

describe("Button", () => {
  it("should render a button", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render a button with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should render a button with a custom className", () => {
    render(<Button className="my-custom-class">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("my-custom-class");
  });
});
