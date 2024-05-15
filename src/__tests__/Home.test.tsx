import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from 'context/SearchContext';
import HomeLayout from 'pages/HomeLayout';
import { TabContextProvider } from 'context/TabContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import TvShows from 'pages/TvShows';
import Movies from 'pages/Movies';

const queryClient = new QueryClient();

describe('HomeLayout component', () => {
  describe('renders links and search input', () => {
    test('renders Tv shows and Movies links', () => {
      render(
        <MemoryRouter>
          <SearchProvider>
            <HomeLayout />
          </SearchProvider>
        </MemoryRouter>,
      );

      const tvShowsLink = screen.getByText('Tv shows');
      const moviesLink = screen.getByText('Movies');

      expect(tvShowsLink).toBeInTheDocument();
      expect(moviesLink).toBeInTheDocument();
    });

    test('Tv shows link has active class', () => {
      render(
        <MemoryRouter>
          <TabContextProvider>
            <SearchProvider>
              <HomeLayout />
            </SearchProvider>
          </TabContextProvider>
        </MemoryRouter>,
      );

      const tvShowsLink = screen.getByText('Tv shows');
      expect(tvShowsLink).toHaveClass('active');

      const moviesLink = screen.getByText('Movies');
      fireEvent.click(moviesLink);
      expect(moviesLink).toHaveClass('active');
    });

    test('search input placeholder is correct', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <QueryClientProvider client={queryClient}>
            <TabContextProvider>
              <SearchProvider>
                <HomeLayout />
                <TvShows />
              </SearchProvider>
            </TabContextProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      const searchInput = screen.getByPlaceholderText('Search Tv Shows');
      expect(searchInput).toBeInTheDocument();
    });
    test('renders the spinner when state isLoading', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <QueryClientProvider client={queryClient}>
            <TabContextProvider>
              <SearchProvider>
                <HomeLayout />
                <TvShows />
              </SearchProvider>
            </TabContextProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      const spinner = screen.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    });
    test('search input placeholder is correct for /movies', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <QueryClientProvider client={queryClient}>
            <TabContextProvider>
              <SearchProvider>
                <HomeLayout />
                <Movies />
              </SearchProvider>
            </TabContextProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      const tvShowsLink = screen.getByText('Tv shows');
      expect(tvShowsLink).toHaveClass('link');

      const moviesLink = screen.getByText('Movies');
      fireEvent.click(moviesLink);
      await waitFor(() => {
        expect(moviesLink).toHaveClass('active');
      });
      const spinner = screen.queryByTestId('spinner');
      expect(spinner).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.queryByTestId('spinner')).toBeNull();
      });
      const searchInput = await screen.findByPlaceholderText('Search movie');
      expect(searchInput).toBeInTheDocument();
    });

    test('renders tv shows component in Outlet when navigating to /', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <QueryClientProvider client={queryClient}>
            <SearchProvider>
              <TabContextProvider>
                <HomeLayout />
                <TvShows />
              </TabContextProvider>
            </SearchProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      await waitFor(() => {
        expect(screen.queryByTestId('spinner')).toBeNull();
      });

      const tvShowsElement = screen.getByTestId('tv-shows');
      expect(tvShowsElement).toBeInTheDocument();

      const cardElements = screen.queryAllByTestId('card');
      expect(cardElements).toHaveLength(10);
      cardElements.forEach((cardElement) => {
        expect(cardElement).toHaveClass('card');
      });
    });

    test('renders Movies component in Outlet when navigating to /movies', async () => {
      render(
        <MemoryRouter initialEntries={['/movies']}>
          <QueryClientProvider client={queryClient}>
            <SearchProvider>
              <TabContextProvider>
                <HomeLayout />
                <TvShows />
              </TabContextProvider>
            </SearchProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      await waitFor(() => {
        expect(screen.queryByText('Loading...')).toBeNull();
      });

      const noDataMessage = screen.queryByText('No data found!');
      expect(noDataMessage).toBeNull();

      // Ensure that each card element is rendered and has the correct class
      const cardElements = screen.queryAllByTestId('card');
      if (cardElements.length === 0) {
        // If no card elements are rendered, fail the test
        throw new Error('No card elements found');
      }
      cardElements.forEach((cardElement) => {
        expect(cardElement).toHaveClass('card');
      });

      const cardImgElements = screen.queryAllByTestId('img');
      expect(cardImgElements).toHaveLength(cardElements.length);
    });

    test('search input placeholder is search', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <QueryClientProvider client={queryClient}>
            <TabContextProvider>
              <SearchProvider>
                <HomeLayout />
                <TvShows />
              </SearchProvider>
            </TabContextProvider>
          </QueryClientProvider>
        </MemoryRouter>,
      );

      const searchInput = screen.getByPlaceholderText('Search Tv Shows');
      expect(searchInput).toBeInTheDocument();
    });
  });
});
