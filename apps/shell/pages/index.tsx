import React from 'react';
import { dehydrate } from 'react-query';
import { queryClient } from '../utils/query-client';
import styles from './index.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Names } from 'view-layer/names';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { fetchNames } from 'data-layer/fetch-names';
import { NameContext } from '@nextjs-module-federation-demo/name-context';

export async function getServerSideProps() {
  await queryClient.prefetchQuery('names', fetchNames);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <NameContext.Provider value="DevRev">
        <Names />
        <button onClick={() => queryClient.invalidateQueries(['names'])}>
          Invalidate
        </button>
      </NameContext.Provider>
    </div>
  );
}

export default Index;
