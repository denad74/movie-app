import React, { useEffect } from 'react';
import ContentGrid from '../../components/ContentGrid';
import { useTab } from '../../context/TabContext/useTab';

const TvShows = () => {
  const { selectedTab, setSelectedTab } = useTab();
  useEffect(() => {
    setSelectedTab('tv');
  }, []);
  return (
    <div>
      <ContentGrid mode={selectedTab} />
    </div>
  );
};

export default TvShows;
