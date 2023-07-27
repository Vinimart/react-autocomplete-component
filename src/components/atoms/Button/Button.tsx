import { memo } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export default memo(Button);
