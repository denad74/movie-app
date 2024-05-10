import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import MoviesDetails from './pages/MoviesDetails';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import TvShowsDetails from './pages/TvShowsDetails';
import { TabContextProvider } from './context/TabContext';
// import { SearchProvider } from './context/SearchContext';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <TvShows />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/movie-details',
        element: <MoviesDetails />,
      },
      {
        path: '/tvshows-details',
        element: <TvShowsDetails />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TabContextProvider>
        {/* <SearchProvider> */}
        <RouterProvider router={router} />
        {/* </SearchProvider> */}
      </TabContextProvider>
    </QueryClientProvider>
  );
};

export default App;
