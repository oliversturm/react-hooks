import { useCallback, useEffect, useState } from 'react';

// Kudos to Dan Abramov for (I think) the first version of
// a similar hook in his proposal paper.

const useWindowInfo = () => {
  const [info, setInfo] = useState({});

  const handler = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const layout =
      width > height * 1.1
        ? 'landscape'
        : height > width * 1.1
        ? 'portrait'
        : 'square';
    setInfo({ width, height, layout });
  }, [setInfo]);

  useEffect(() => {
    window.addEventListener('resize', handler);
    handler();
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [handler]);

  return info;
};

export default useWindowInfo;
