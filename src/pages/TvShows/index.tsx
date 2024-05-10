import React from 'react';
import ContentGrid from '../../components/ContentGrid';

const TvShows = () => {
  const mode = 'tv';
  return (
    <div>
      <ContentGrid mode={mode} />
    </div>
  );
};

export default TvShows;
