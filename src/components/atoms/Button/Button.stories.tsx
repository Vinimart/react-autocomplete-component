import './button.module.css';

import { Meta, StoryFn } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  children: "Button",
  className: "custom-button",
};
