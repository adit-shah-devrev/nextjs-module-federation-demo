import React from 'react';

import { useNameContext } from '@nextjs-module-federation-demo/name-context';

export const Names = () => {
  const value = useNameContext();
  return <div>{value}</div>;
};
