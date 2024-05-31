import { createContext, useContext } from 'react';

export const NameContext = createContext<string | null>(null);

export const useNameContext = () => useContext(NameContext);
