import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { addForm as addFrom2Store } from '@/store/slices/formsSlice';
import { addFrom as addForm2Loacl } from '@/lib/localstorageHandlers';
const useForms = () => {
	const forms = useAppSelector((state) => state.forms.forms);
	const dispatch = useAppDispatch();

	// useEffect(() => {

	// }, [])
	const addForm = (form: any) => {
		addForm2Loacl(form);
		dispatch(addFrom2Store(form));
	};


	return { forms, addForm };
};

export default useForms;
