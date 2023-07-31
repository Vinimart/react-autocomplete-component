import './card-movie.module.css';

import { Meta, StoryFn } from '@storybook/react';

import CardMovie, { CardMovieProps } from './CardMovie';

export default {
  title: "Molecules/CardMovie",
  component: CardMovie,
} as Meta;

const Template: StoryFn<CardMovieProps> = (args) => (
  <div style={{
    backgroundColor: "black",
  }}>
    <CardMovie {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "Example Movie",
  type: "Movie",
  year: "2022",
  poster: "https://example.com/poster.jpg",
};
