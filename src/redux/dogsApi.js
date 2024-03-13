import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const dogsApi = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thedogapi.com/v1/images' }),
  endpoints: (builder) => ({
    getDogsData: builder.query({
      query: ({ limit = 10, page = 1,filter} = {}) => ({
        url: `search/?limit=${limit}&page=${page}`,
        params:{size:filter.size,breed:filter.breed},
        method: 'GET'
      })
    }),
  
  }),
});

export const {useGetDogsDataQuery,usePrefetch} = dogsApi;


// https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1
