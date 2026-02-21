export const trackEvent = (eventName: string, params?: object) => {
  console.log(`[Analytics] Event: ${eventName}`, params);
  // Integration with Google Analytics or similar would go here
};
