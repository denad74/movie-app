import React from 'react';
import { ButtonProps } from './interfaces';
import './styles.css';
const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
