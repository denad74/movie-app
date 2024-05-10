import React from 'react';
import { DetailsProps, MovieDetails, TvShowDetails } from './interface';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchDataDetails } from '../../api';

const ItemDetails = ({ mode, id }: DetailsProps): JSX.Element => {
  const { data } = useQuery<MovieDetails | TvShowDetails, unknown>({
    queryKey: ['details', { type: mode, id: id }],
    queryFn: () => fetchDataDetails({ queryKey: ['details', { type: mode, id: id }] }),
  });
  const itemMode = mode === 'movie' ? 'Movie' : 'TV Show';
  return (
    <div className="container">
      <div className="home-header">
        <Link to="/">Back</Link>
      </div>
      <div className="main">
        <img
          src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
          alt={data?.title || data?.name}
        />
        <h3>{data?.title || data?.name}</h3>
        <h4>{itemMode} overview</h4>
        <p>{data?.overview}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
