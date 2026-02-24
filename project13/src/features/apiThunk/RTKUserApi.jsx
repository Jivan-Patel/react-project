import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',  // Unique key for store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users'
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`
    }),
    getPost: builder.query({
      query: () => '/posts'
    }),
  })
});

export const { useGetUsersQuery, useGetPostQuery, useGetUserByIdQuery } = usersApi;