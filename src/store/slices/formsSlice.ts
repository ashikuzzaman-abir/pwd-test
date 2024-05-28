import { FORMKEY } from '@/lib/constants';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	forms:
		typeof window !== 'undefined' && window.localStorage.getItem(FORMKEY)
			? JSON.parse(localStorage.getItem(FORMKEY) as string)
			: [],
};

const formsSlice = createSlice({
	name: 'forms',
	initialState,
	reducers: {
		addForm: (state, action) => {
			state.forms.push(action.payload);
		},
		removeForm: (state, action) => {
			state.forms = state.forms.filter(
				(form: any) => form.id !== action.payload
			);
		},
	},
});

export const { addForm, removeForm } = formsSlice.actions;
export default formsSlice.reducer;
