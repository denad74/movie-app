import React from 'react';
import { InputProps } from './interfaces';
import './styles.css';
import { useSearch } from '../../../context/SearchContext/useSearch';

const Input = ({ placeholder, type }: InputProps): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { searchTerm, setSearchTerm } = useSearch();
  // const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      {/* <form> */}
      <input
        className="searchForm"
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* </form> */}
    </>
  );
};

export default Input;
