import React, { useContext, useEffect } from 'react';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../../ProjectList/Queries/projectQueries';
import { labelListStyle } from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';
import { LabelContext } from '../../../contexts/LabelContext';

const LabelList = () => {
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });

  const { data } = state;
  return (
    <div className={labelListStyle}>
      {data
        ? data.labels.map(label => {
            return <StatusLabel label={label} key={label.id} />;
          })
        : ''}
    </div>
  );
};

export default LabelList;
