import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { addForm as addFrom2Store } from '@/store/slices/formsSlice';
import { addFrom as addForm2Loacl } from '@/lib/localstorageHandlers';
const useForms = () => {
	const forms = useAppSelector((state) => state.forms.forms);
	const dispatch = useAppDispatch();
	const [forms_, setForms_] = React.useState<any>(null);

	// useEffect(() => {
	// 	const forms = localStorage.getItem('formData');
	// 	if (forms) {
	// 		setForms_(JSON.parse(forms));
	// 	}
	// }, [forms]);

	const addForm = (form: any) => {
		console.log('addForm Clicked');
		addForm2Loacl(form);
		dispatch(addFrom2Store(form));
	};

	return { forms, addForm };
};

export default useForms;
