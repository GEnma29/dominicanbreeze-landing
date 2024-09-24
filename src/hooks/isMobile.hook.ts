import { useState, useCallback } from 'react';

function useExecuteOnSecondCall(callback: () => void) {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);

  const execute = useCallback(() => {
    if (hasBeenCalled) {
      callback();
    } else {
      setHasBeenCalled(true);
    }
  }, [callback, hasBeenCalled]);

  return execute;
}

export default useExecuteOnSecondCall;