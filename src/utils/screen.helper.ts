export const MOBILE_WIDTH = 768;

export const isMobileScreen = () => {
  const { width } = window?.screen;

  return width < MOBILE_WIDTH;
};
