import axios from 'axios';

import { API_URL } from '@/config/constants';
import { notificationsStore } from '@/stores/notifications';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//reactの外でstoreを使うときはuse~ではなくstore.getStateでやる
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message;
    notificationsStore.getState().showNotification({
      type: 'error',
      title: 'Error',
      duration: 5000,
      message: message,
    });
    return Promise.reject(error);
  }
);
