/* eslint-disable @typescript-eslint/no-explicit-any */

import './input.module.css';

import { Meta, StoryFn } from '@storybook/react';

import Input, { InputProps } from './Input';

export default {
  title: "Molecules/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args: any) => (
  <div
    style={{
      backgroundColor: "black",
    }}
  >
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Enter text...",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  value: "",
  placeholder: "Enter text...",
  icon: (
    <i
      className="fa-solid fa-search"
      style={{
        color: "white",
      }}
    />
  ),
};
