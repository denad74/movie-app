import React from 'react';
import { useLocation } from 'react-router-dom';

const TvShowsDetails = () => {
  const location = useLocation();
  const { mode, id } = location.state;
  console.log(mode, id);
  return <div>TvShowsDetails</div>;
};

export default TvShowsDetails;
