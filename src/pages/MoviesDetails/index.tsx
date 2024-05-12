import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails';

const MoviesTvDetails = () => {
  const location = useLocation();
  const { mode, id } = location.state;
  return <ItemDetails mode={mode} id={id} />;
};

export default MoviesTvDetails;
