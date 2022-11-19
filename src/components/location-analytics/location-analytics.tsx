import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { tagPageView } from '@utils/analytics/analytics-utils';

function LocationAnalytics({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    tagPageView(location.pathname);
    console.log(location);
  }, [location]);

  return <>{children}</>;
}

export default LocationAnalytics;
