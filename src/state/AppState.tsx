import React, { useCallback, useContext, useState } from 'react';
import { Ad, Product } from '../models';
import { fetchAds, fetchProducts } from '../data/fetchers';

type AppState = {
  products: Product[];
  ads: Ad[];
};

type AppActions = {
  addAd: (ad: Ad) => void;
  updateAd: (ad: Ad) => void;
  deleteAd: (id: string) => void;
};

type AppStateContext = [AppState, AppActions];

const AppStateContext = React.createContext<AppStateContext>(
  {} as AppStateContext
);

export function AppStateProvider({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) {
  const products: Product[] = fetchProducts();
  const initialAds = fetchAds();
  const [ads, setAds] = useState<Ad[]>(initialAds);

  const addAd = (ad: Ad) => {
    setAds((prevState) => [...prevState, ad]);
  };

  const updateAd = useCallback((ad: Ad) => {
    setAds((prevState) => {
      debugger;
      const newState = prevState.map((adInState) => {
        if (adInState.id === ad.id) {
          return ad;
        }
        return adInState;
      });
      return newState;
    });
  }, []);

  const deleteAd = useCallback((id: string) => {
    setAds((prevState) => {
      const newState = prevState.filter((ad) => {
        return ad.id !== id;
      });
      return newState;
    });
  }, []);

  const appState = { products, ads };
  const appActions = { addAd, updateAd, deleteAd };

  return (
    <AppStateContext.Provider value={[appState, appActions]}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
