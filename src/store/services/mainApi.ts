import { URL } from '@/lib/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = ['forms'];
export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.root}`,
		prepareHeaders: (headers, { getState }) => {},
	}),
	tagTypes: tags,
	endpoints: (builder) => ({}),
});

export const {} = mainApi;

export default mainApi;
