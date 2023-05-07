import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexView, ReadView, NavigationView } from './pages';
import { AppStateProvider } from './state/AppState';
import { ErrorBoundary } from './utils';

export const routes = {
  root: '/',
  products: '/products',
  product: `/product/:productId`,
};

export const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <AppStateProvider>
        <NavigationView />
        <Routes>
          <Route path={routes.root} element={<IndexView />} />
          <Route path={routes.products} element={<IndexView />} />
          <Route path={routes.product} element={<ReadView />} />
          {/* handle route not found */}
        </Routes>
      </AppStateProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
