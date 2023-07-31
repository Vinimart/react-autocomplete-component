import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import CardMovie from '../CardMovie';

describe("CardMovie", () => {
  it("should render the card movie", () => {
    const props = {
      id: "123456",
      title: "The Shawshank Redemption",
      type: "Drama",
      year: "1994",
      poster: "https://image.tmdb.org/t/p/w500/8n7m405a3n1x2Q7e8iA5v0y8Q99.jpg",
    };
    render(<CardMovie {...props} />);
    
    expect(screen.getByTestId("card-movie")).toBeInTheDocument();
    expect(screen.getByTestId("poster")).toBeInTheDocument();
    expect(screen.getByText("The Shawshank Redemption")).toBeInTheDocument();
    expect(screen.getByText("1994 -")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByText("Discover on IMDb")).toBeInTheDocument();
  });
});
