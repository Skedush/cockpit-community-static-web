import { useEffect, useRef } from 'react';

// 记录旧值的公用hooks
export default function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
