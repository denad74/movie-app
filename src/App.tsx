import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TabContextProvider } from './context/TabContext';
import { SearchProvider } from './context/SearchContext';
// components
import HomeLayout from './pages/HomeLayout';
import ErrorPage from './pages/Error';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import MoviesTvDetails from './pages/MoviesDetails';
//queryClient
const queryClient = new QueryClient();
//router
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
//Component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TabContextProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </TabContextProvider>
    </QueryClientProvider>
  );
};

export default App;
