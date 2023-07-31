import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import Highlight from '../Highlight';

describe("Highlight", () => {
  it("should render the highlighted text", () => {
    render(
      <Highlight
        inputValue="highlight"
        text={"This is some text to highlight."}
      />
    );
    
    expect(
      screen.getByText("highlight")
    ).toBeInTheDocument();
  });
});
