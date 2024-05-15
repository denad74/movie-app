import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TabContextProvider } from './context/TabContext';
import { SearchProvider } from './context/SearchContext';

import HomeLayout from './pages/HomeLayout';
import ErrorPage from './pages/Error';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import MoviesTvDetails from './pages/MoviesDetails';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage error={undefined} />,
    children: [
      {
        index: true,
        element: <TvShows />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ],
  },
  {
    path: '/item-details',
    element: <MoviesTvDetails />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <TabContextProvider>
          <RouterProvider router={router} />
        </TabContextProvider>
      </SearchProvider>
    </QueryClientProvider>
  );
};

export default App;
