import {
  getAnalytics,
  logEvent as gaLogEvent,
  setUserId as gaSetUserId,
  setUserProperties,
} from 'firebase/analytics';

export function logEvent(eventName: string, eventParams?: {
  [key: string]: any;
}) {
  const analytics = getAnalytics();

  gaLogEvent(analytics, eventName, eventParams);
}

export function setUserProperty(properties: {
  [key: string]: any;
}) {
  const analytics = getAnalytics();

  setUserProperties(analytics, properties);
}

export function setUserId(id: string) {
  const analytics = getAnalytics();

  gaSetUserId(analytics, id);
}

export function tagPageView(page: string) {
  logEvent('screen_view', { firebase_screen: page, firebase_screen_class: '' });
}
