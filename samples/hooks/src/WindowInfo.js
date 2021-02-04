import React from 'react';

import useWindowInfo from './WindowInfoHook';

const WindowInfo = () => {
  const windowInfo = useWindowInfo();

  return (
    <div className="windowInfo">{`Window is ${windowInfo.width}x${windowInfo.height}, a ${windowInfo.layout} layout.`}</div>
  );
};

export default WindowInfo;
