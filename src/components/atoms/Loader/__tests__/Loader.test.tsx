import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import Loader from '../Loader';

describe("Loader", () => {
  it("should render the loader when isLoading is true", () => {
    render(<Loader isLoading={true} />);
    expect(screen.queryByTestId("loader")).toBeInTheDocument();
  });

  it("should not render the loader when isLoading is false", () => {
    render(<Loader isLoading={false} />);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
  });
});
