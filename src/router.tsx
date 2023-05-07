import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexView from './pages/IndexView';
import ReadView from './pages/ReadView';
import NavigationView from './pages/NavigationView';
import { AppStateProvider } from './state/AppState';

export const routes = {
  root: '/',
  products: '/products',
  product: `/product/:productId`,
};

export const AppRouter = () => (
  <BrowserRouter>
    <AppStateProvider>
      <NavigationView />
      <Routes>
        <Route path={routes.root} element={<IndexView />} />
        <Route path={routes.products} element={<IndexView />} />
        <Route path={routes.product} element={<ReadView />} />
      </Routes>
    </AppStateProvider>
  </BrowserRouter>
);
