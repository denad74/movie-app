import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter } from 'react-router-dom';
import { TabContextProvider } from '../context/TabContext';
import { SearchProvider } from '../context/SearchContext';

const renderApp = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([{ path: '/', element: <div>dummy</div> }]);
  return render(
    <QueryClientProvider client={queryClient}>
      <TabContextProvider>
        <SearchProvider>{children}</SearchProvider>
      </TabContextProvider>
    </QueryClientProvider>,
  );
};

export { renderApp };
