import { useCallback } from 'react';
import { ToastAndroid } from 'react-native';

const useToast = () => {
  const showToast = useCallback((message: string) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  }, []);

  return { showToast };
};

export default useToast;
