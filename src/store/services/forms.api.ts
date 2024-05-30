import mainApi from './mainApi';

const formApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getForms: builder.query({
			query: () => '/forms',
			providesTags: ['forms'],
		}),
		createForm: builder.mutation({
			query: (body) => ({
				url: '/forms',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['forms'],
		}),
		syncForms: builder.mutation({
			query: (body) => ({
				url: '/forms/sync',
				method: 'POST',
				body
			}),
			invalidatesTags: ['forms'],
		}),
		updateForm: builder.mutation({
			query: ({ id, body }) => ({
				url: `forms/${id}`,
				method: 'PUT',
				body,
			}),
		}),
		deleteForm: builder.mutation({
			query: (id) => ({
				url: `forms/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetFormsQuery,
	useCreateFormMutation,
	useSyncFormsMutation,
	useUpdateFormMutation,
	useDeleteFormMutation,
} = formApi;
