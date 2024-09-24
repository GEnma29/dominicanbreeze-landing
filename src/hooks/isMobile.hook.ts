'use client'
import { useWindowSize } from "@uidotdev/usehooks";

export const useIsMobile = () => {
  const { width } = useWindowSize();
  return width ? width < 768 : false;
};