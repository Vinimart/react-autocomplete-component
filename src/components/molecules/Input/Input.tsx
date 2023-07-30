import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

import { Button } from '../../atoms';
import style from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({ value = "", icon, onChange, ...rest }) => {
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
    <div className={style["input-wrapper"]}>
      {icon && <div className={style["icon"]}>{icon}</div>}

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
          className={style["clear"]}
        >
          <Button type="button" onClick={handleClearClick}>
            <i className="fa-solid fa-xmark" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Input;
