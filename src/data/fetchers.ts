import { Ad, Product } from '../models';
import data from '../data/data.json';

export const fetchProducts = (): Product[] => {
  return data.products as Product[];
};

export const fetchAds = (): Ad[] => {
  return data.ads as Ad[];
};
