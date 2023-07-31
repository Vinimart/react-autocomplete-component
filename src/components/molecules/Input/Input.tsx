import React, { ChangeEvent, FC, InputHTMLAttributes, memo, useCallback, useState } from 'react';

import { Button } from '../../atoms';
import style from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input: FC<InputProps> = ({ value = "", icon, onChange, ...rest }) => {
  const [inputValue, setInputValue] = useState<string>(value as string);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event?.target?.value);
      if (onChange) onChange(event);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    setInputValue("");

    if (onChange) {
      onChange({ target: { value: "" } } as ChangeEvent<HTMLInputElement>);
    }
  }, [onChange]);

  return (
    <div className={style["input-wrapper"]} data-testid="input-wrapper">
      {icon && (
        <div className={style["icon"]} data-testid="icon">
          {icon}
        </div>
      )}

      <input
        {...rest}
        value={inputValue}
        onChange={handleChange}
        data-testid="input"
        style={{
          paddingLeft: icon ? "30px" : undefined,
          paddingRight: inputValue ? "30px" : undefined,
        }}
      />

      {inputValue && (
        <div className={style["clear"]}>
          <Button type="button" onClick={handleClear} data-testid="clear">
            <i className="fa-solid fa-xmark" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(Input);
