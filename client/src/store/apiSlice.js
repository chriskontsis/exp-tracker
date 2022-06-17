import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder => ({
        getCategories : builder.query({
            query: () => '/api/categories',
            providesTags:['categories']
        }),
        //get labels
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags:['transaction']
        }),
        // add new transaction
        addTransaction: builder.mutation({
            // post request on transaction
            query: (initalTransaction) => ({
                url:'/api/transaction',
                method: "POST",
                body: initalTransaction
            }),
            invalidatesTags:['transaction']
        }),
        // delete record
        deleteTransaction: builder.mutation ({
            // delete request on transaction
            query : recordId => ({
                url:'/api/transaction',
                method: "DELETE",
                body: recordId
            }),
            invalidatesTags:['transaction']
        })
    })
})

export default apiSlice;