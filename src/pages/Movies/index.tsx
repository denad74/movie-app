import { useEffect } from 'react';
import { useTab } from '../../context/TabContext/useTab';
import ContentGrid from '../../components/ContentGrid';

const Movies = () => {
  const { selectedTab, setSelectedTab } = useTab();
  useEffect(() => {
    setSelectedTab('movie');
  }, [setSelectedTab]);

  return <ContentGrid mode={selectedTab} />;
};

export default Movies;
