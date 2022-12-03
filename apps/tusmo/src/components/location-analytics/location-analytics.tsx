import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tagPageView } from '../../utils/analytics/analytics-utils';
import React from 'react'

function LocationAnalytics({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    tagPageView(location.pathname);
  }, [location]);

  return <>{children}</>;
}

export default LocationAnalytics;
