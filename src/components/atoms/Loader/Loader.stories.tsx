import './loader.module.css';

import { Meta, StoryFn } from '@storybook/react';

import Loader from './Loader';

export default {
  title: "Atoms/Loader",
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => (
  <div
    style={{
      width: "100%",
      height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    }}
  >
    <Loader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};
