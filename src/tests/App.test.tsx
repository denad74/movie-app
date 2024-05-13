import { screen } from '@testing-library/react';
import App from '../App';
import { renderApp } from './testUtils';
// Mock child components
jest.mock('../pages/HomeLayout', () => () => <div data-testid='home-layout'>Home Layout</div>);
jest.mock('../pages/Error', () => () => <div>Error Page</div>);
jest.mock('../pages/TvShows', () => () => <div>TV Shows</div>);
jest.mock('../pages/Movies', () => () => <div>Movies</div>);
jest.mock('../pages/MoviesDetails', () => () => <div>Movies Details</div>);

describe('App Component', () => {
  it('renders without crashing', () => {
    renderApp({ children: <App /> });

    expect(screen.getByTestId('home-layout')).toBeInTheDocument();
  });
});
