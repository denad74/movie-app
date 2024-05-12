import React from 'react';
import './styles.css';
import { CardProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import { API_IMAGE_URL } from '../../../constants/routes';
import noImage from '../../../assets/images/no-image.svg';
const Card = ({ item, mode }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => navigate('/item-details', { state: { mode: mode, id: item.id } });

  return (
    <div className="card" onClick={() => handleCardClick()}>
      <img
        src={item.backdrop_path ? `${API_IMAGE_URL}${item.backdrop_path}` : noImage}
        alt={item.title || item.name}
      />
      <h2>{item.title || item.name}</h2>
    </div>
  );
};

export default Card;
