import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Button from '../shared/Button';
import Spinner from '../shared/Spinner';
import ErrorPage from '../../pages/Error';
import { useDetails } from '../../hooks/useDetails';
import { DetailsProps } from './interface';
import './styles.css';

import { API_IMAGE_URL } from '../../constants/routes';
import noImage from '../../assets/images/no-image.svg';

const ItemDetails = ({ mode, id }: DetailsProps): JSX.Element => {
  const navigate = useNavigate();
  const {
    data: items,
    officialTrailers,
    isLoading,
    isError,
    error,
    isLoadingVideo,
    isErrorVideo,
  } = useDetails({
    queryKey: ['movies', { type: mode, id: id }],
  });
  
  const itemMode = mode === 'movie' ? 'Movie' : 'TV Show';

  if (isError) {
    return (
      <div className='container'>
        <ErrorPage error={error as { message: string; response: { status: number } } | undefined} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='container'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='home-header'>
        <Button onClick={() => navigate(-1)} icons={<IoIosArrowBack />}>
          Back
        </Button>
      </div>
      <div>
        {officialTrailers?.length > 0 || isErrorVideo ? (
          <div className='video-container'>
            {isLoadingVideo ? (
              <div className='container'>
                <Spinner />
              </div>
            ) : (
              <iframe
                title='Trailer'
                className='video-player'
                src={`https://www.youtube.com/embed/${officialTrailers[0].key}`}
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <img
            className='details-img'
            src={items?.backdrop_path ? `${API_IMAGE_URL}${items?.backdrop_path}` : noImage}
            alt={items?.title || items?.name}
          />
        )}
        <h3 className='details-heading'>{items?.title || items?.name}</h3>
        <h4 className='details-heading'>{itemMode} overview</h4>
        <p className='details-heading'>{items?.overview}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
