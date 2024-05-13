import { useSearch } from '../../../context/SearchContext/useSearch';
import { InputProps } from './interfaces';
import './styles.css';

const Input = ({ placeholder, type }: InputProps): JSX.Element => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <input
        className='searchForm'
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
