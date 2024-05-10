import React from 'react';
import './styles.css';
import { CardProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
// import { API_BASE_URL } from '../../constants/routes';
const Card = ({ item, mode }: CardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => navigate('/movie-details', { state: { mode: mode, id: item.id } });

  return (
    <div className="card" onClick={() => handleCardClick()}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.title || item.name}
      />
      <h3>{item.title || item.name}</h3>
    </div>
  );
};

export default Card;
