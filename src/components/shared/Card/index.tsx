import { useNavigate } from 'react-router-dom';
import { API_IMAGE_URL } from '../../../constants/routes';
import { CardProps } from './interfaces';
import './styles.css';

import noImage from '../../../assets/images/no-image.svg';

const Card = ({ item, mode }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => navigate('/item-details', { state: { mode: mode, id: item.id } });

  return (
    <div className='card' onClick={() => handleCardClick()} data-testid='card'>
      <img
        data-testid='img'
        src={item.backdrop_path ? `${API_IMAGE_URL}${item.backdrop_path}` : noImage}
        alt={item.title || item.name}
      />
      <h2 data-testid='heading'>{item.title || item.name}</h2>
    </div>
  );
};

export default Card;
