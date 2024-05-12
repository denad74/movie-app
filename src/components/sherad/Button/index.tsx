import React from 'react';
import { ButtonProps } from './interfaces';
import './styles.css';
const Button = ({ children, onClick, icons }: ButtonProps): JSX.Element => {
  return (
    <button className="button" onClick={onClick}>
      {icons}
      {children}
    </button>
  );
};

export default Button;
