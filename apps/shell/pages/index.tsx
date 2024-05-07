import { dehydrate } from 'react-query';
import { queryClient } from '../utils/query-client';
import styles from './index.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Names } from 'view-layer/names';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { fetchNames } from 'data-layer/fetch-names';

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
      <Names name="DevRev" />
      <button onClick={() => queryClient.invalidateQueries(['names'])}>
        Invalidate
      </button>
    </div>
  );
}

export default Index;
