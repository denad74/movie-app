import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ErrorData } from './interfaces';
import img from '../../assets/images/not-found.svg';

const ErrorPage = ({ error }: { error: ErrorData | undefined }): JSX.Element => {
  if (error?.response.status === 404) {
    return (
      <div className="errorContainer">
        <img src={img} alt="not found" />
        <h3>Page Not found!</h3>
        <p>We can not seem to find the page you are looking for</p>
        <Link className="link" to="/">
          Back To Home
        </Link>
      </div>
    );
  }

  return (
    <div className="errorContainer">
      <h3>Something went wrong!</h3>
    </div>
  );
};

export default ErrorPage;
