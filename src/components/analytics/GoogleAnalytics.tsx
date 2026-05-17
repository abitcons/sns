import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeGoogleAnalytics, trackPageView } from '../../lib/googleAnalytics';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.hash, location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
