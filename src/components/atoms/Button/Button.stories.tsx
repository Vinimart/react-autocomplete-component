import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf("Button", module)
  .add("Default", () => <Button onClick={action("clicked")}>Click Me</Button>)
  .add("With className", () => (
    <Button className="my-custom-class">Click Me</Button>
  ));
