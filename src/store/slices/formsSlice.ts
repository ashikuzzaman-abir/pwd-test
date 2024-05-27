import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	forms: [],
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
