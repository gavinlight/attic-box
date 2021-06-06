import React from 'react';

import { useSelector, useDispatch } from 'hooks';
import { getDevlogs } from 'ducks/devlogs';

const Devlog: React.FC = () => {
  const dispatch = useDispatch();
  const devlogArchive = useSelector((state) => state.devlogs.data);

  React.useEffect(() => {
    dispatch(getDevlogs());
  }, []);

  return (
    null
  );
};

export default Devlog;
