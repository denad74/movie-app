import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import Card from '../sherad/Card';
import './styles.css';
import { useAll } from '../../hooks/useAll';
interface Mode {
  mode: string;
}

const ContentGrid = ({ mode }: Mode): JSX.Element => {
  const { items } = useAll({ queryKey: ['movies', { type: mode }] });
  console.log(items);
  // const { searchTerm } = useSearch();
  // const [searchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query');
  // console.log(searchQuery, 'lll');
  // const { data } = useQuery<Movies[] | TvShows[], unknown>({
  //   queryKey: ['movies', { type: mode }],
  //   queryFn: () => fetchDataList({ queryKey: ['movies', { type: mode, searchQuery: searchTerm }] }),
  // });
  // if (status === 'pending') {
  //   return <Loading />;
  // }
  // if (status === 'error') {
  //   return <Error error={error} backdrop='failed to fetch data' />;
  // }
  const topTenItems = items?.slice(0, 10);
  return (
    <div className="main">
      {topTenItems ? (
        topTenItems?.map((item) => {
          return <Card item={item} key={item?.id} mode={mode} />;
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default ContentGrid;
