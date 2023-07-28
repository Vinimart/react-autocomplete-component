import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

import { Button } from '../../atoms';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({
  value = "",
  label,
  icon,
  onChange,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState<string>(value as string);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClearClick = () => {
    setInputValue("");
    if (onChange) {
      onChange({} as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <div style={{ position: "relative" }}>
        {icon && (
          <div
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {icon}
          </div>
        )}
        <input
          {...rest}
          value={inputValue}
          onChange={handleChange}
          style={{
            paddingLeft: icon ? "30px" : undefined,
            paddingRight: inputValue ? "30px" : undefined,
          }}
        />
        {inputValue && (
          <div
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Button type="button" onClick={handleClearClick}>
              X
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
