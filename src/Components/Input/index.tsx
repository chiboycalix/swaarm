/** @format */

import React from 'react';
import './styles.scss';

interface Props {
  inputType: string,
  placeholder: string,
  name: string,
  onChange(value: React.ChangeEvent<HTMLInputElement>): void,
  value: string,
  id: string,
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="input__wrapper">
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
