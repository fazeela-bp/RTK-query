import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url:'products',
        method:'GET'
      }),
    }),
    getsingleProduct: builder.query({
        query: (product) => ({
          url:`/products/search?q=${product}`,
          method:'GET'
        }),
      }),
      getlimitedProduct: builder.query({
        query: (num) => ({
          url:`/posts?limit=${num}`,
          method:'GET'
        }),
      }),
       getdeletedProduct: builder.mutation({
        query: (id) => {
            console.log("deleted id ", id)
          return {
          url:`/products/${id}`,
          method:'DELETE'
        }},
      }),
      createProduct: builder.mutation({
        query: (newpost) => {
            console.log("created post ", newpost)
          return {
          url:`products/add`,
          method:'POST',
          body: newpost,
          headers:{
            'Content-Type': 'application/json' ,
          }
        }},
      }),
      updateProduct: builder.mutation({
        query: (updatepost) => {
            console.log("updtaed post ", updatepost)
            const {id,...data}= updatepost;
          return {
          url:`products/${id}`,
          method:'PUT',
          body: data,
          headers:{
            'Content-Type': 'application/json' ,
          }
        }},
      }),


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery,useGetsingleProductQuery,useGetdeletedProductMutation, useCreateProductMutation, useUpdateProductMutation} = productApi;