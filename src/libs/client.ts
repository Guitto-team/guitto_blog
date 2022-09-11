import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'guitto-blog',
  apiKey: process.env.API_KEY,
});