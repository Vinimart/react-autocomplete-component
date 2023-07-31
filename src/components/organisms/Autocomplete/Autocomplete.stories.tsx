import './autocomplete.module.css';

import { Meta, StoryFn } from '@storybook/react';

import { AutocompleteProvider } from '../../../contexts/AutocompleteContext';
import Autocomplete from './Autocomplete';

export default {
  title: "Organisms/Autocomplete",
  component: Autocomplete,
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <AutocompleteProvider {...args}>
      <Autocomplete />
    </AutocompleteProvider>
  </div>
);

export const Default = Template.bind({});

export const WithSuggestions = Template.bind({});
WithSuggestions.args = {
  defInputValue: "Shawshank",
  defSuggestions: [
    {
      imdbID: "123456",
      Title: "The Shawshank Redemption",
      Type: "Drama",
      Year: "1994",
      Poster: "",
    },
  ],
};
