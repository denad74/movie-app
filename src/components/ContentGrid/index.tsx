import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import Card from '../sherad/Card';
import './styles.css';
import { useAll } from '../../hooks/useAll';
import { useSearch } from '../../context/SearchContext/useSearch';
import ErrorPage from '../../pages/Error';
import Spinner from '../sherad/Spinner';
import { Mode } from './interface';

const ContentGrid = ({ mode }: Mode): JSX.Element => {
  const { searchQuery } = useSearch();
  const { items, isLoading, isError, error } = useAll({
    queryKey: ['movies', { type: mode, searchQuery: searchQuery }],
  });

  if (isError) {
    return (
      <div className="container">
        <ErrorPage error={error as { message: string; response: { status: number } } | undefined} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }
  const topTenItems = items?.slice(0, 10);

  return (
    <div className="grid-container">
      {topTenItems && topTenItems.length > 0 ? (
        topTenItems?.map((item) => {
          return <Card item={item} key={item?.id} mode={mode} />;
        })
      ) : (
        <h2>No data found!</h2>
      )}
    </div>
  );
};

export default ContentGrid;
