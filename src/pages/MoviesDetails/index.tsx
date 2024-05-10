import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails';

const MoviesDetails = () => {
  const location = useLocation();
  const { mode, id } = location.state;
  console.log(mode, id);
  return <ItemDetails mode={mode} id={id} />;
};

export default MoviesDetails;
