import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'guitto',
  apiKey: process.env.API_KEY,
});