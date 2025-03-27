import ky from 'ky';

const BASE_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io';

export const api = ky.create({
  prefixUrl: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  retry: {
    limit: 2,
    methods: ['get', 'post', 'put', 'delete', 'patch'],
    statusCodes: [408, 429, 500, 502, 503, 504],
  },
  hooks: {
    beforeError: [
      error => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error(`API Error: ${error.message}`);
        }

        return error;
      },
    ],
  },
});
