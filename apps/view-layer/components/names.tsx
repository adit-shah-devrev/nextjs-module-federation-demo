import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { useDlGetNames } from 'data-layer/use-dl-get-names';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Name } from 'data-layer/name';
import { useNameContext } from '@nextjs-module-federation-demo/name-context';

export const Names = ({ name }) => {
  const { data, isLoading } = useDlGetNames();
  const value = useNameContext();
  return (
    <div>
      <Name />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((name) => (
            <div key={name.id}>
              <div>{name.first_name}</div>
              <div>{name.last_name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
