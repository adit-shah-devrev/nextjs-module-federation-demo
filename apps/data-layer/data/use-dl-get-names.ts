import { useQuery } from 'react-query';
import { fetchNames } from './fetch-names';

export const useDlGetNames = () => {
  return useQuery('names', fetchNames);
};
