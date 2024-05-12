import React, { useEffect } from 'react';
import ContentGrid from '../../components/ContentGrid';
import { useTab } from '../../context/TabContext/useTab';

const Movies = () => {
  const { selectedTab, setSelectedTab } = useTab();
  useEffect(() => {
    setSelectedTab('movie');
  }, []);
  return (
    <>
      <ContentGrid mode={selectedTab} />
    </>
  );
};

export default Movies;
