import { useRef } from 'react';

export const thousandSeparator = (number) => {
  return number.toLocaleString('en-GB').replace(/,/g, ' ');
};

export const useCountRenders = () => {
  const renders = useRef(0);
  console.log('renders: ', renders.current++);
};