import { useEffect } from 'react';
import { useTab } from '../../context/TabContext/useTab';
import ContentGrid from '../../components/ContentGrid';

const TvShows = () => {
  const { selectedTab, setSelectedTab } = useTab();
  useEffect(() => {
    setSelectedTab('tv');
  }, [setSelectedTab]);

  return (
    <>
      <ContentGrid mode={selectedTab} />
    </>
  );
};

export default TvShows;
