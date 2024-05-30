import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { addForm as addFrom2Store, reset } from '@/store/slices/formsSlice';
import { addFrom as addForm2Loacl, getForms } from '@/lib/localstorageHandlers';
import {
	useGetFormsQuery,
	useCreateFormMutation,
	useSyncFormsMutation,
} from '@/store/services/forms.api';
import { FORMKEY } from '@/lib/constants';

const useForms = () => {
	const forms = useAppSelector((state) => state.forms.forms);
	const dispatch = useAppDispatch();
	const [forms_, setForms_] = React.useState<any>(null);

	const [syncTrigger, syncResult] = useSyncFormsMutation();
	const { data, error, isLoading, isError } = useGetFormsQuery(null);

	// useEffect(() => {
	// 	const forms = localStorage.getItem('formData');
	// 	if (forms) {
	// 		setForms_(JSON.parse(forms));
	// 	}
	// }, [forms]);

	useEffect(() => {
		// const formsFromLocalStorage = getForms() || '[]');
		// const mergedForms = [...formsFromLocalStorage, ...(data?.doc || [])];
		// const uniqueForms = Array.from(new Set(mergedForms.map(JSON.stringify))).map(JSON.parse);
		const localstorage = getForms() || [];
		const networkForms = data?.doc || [];
		const uniqueForms = Array.from(
			new Set(
				[...localstorage, ...networkForms].map((item: any) =>
					JSON.stringify(item)
				)
			)
		).map((item: any) => JSON.parse(item));
		setForms_(uniqueForms);
	}, [forms, data?.doc]);
	useEffect(() => {
		if (syncResult.isSuccess) {
			alert('Synced Successfully');
			dispatch(reset());
			window.localStorage.removeItem(FORMKEY);
		}
		if (syncResult.isError) {
			alert('Synced Failed');
		}
	}, [syncResult]);

	const addForm = (form: any) => {
		console.log('addForm Clicked');
		addForm2Loacl(form);
		dispatch(addFrom2Store(form));
	};
	const sync = () => {
		console.log('Sync Clicked');
		syncTrigger({ forms });
	};

	return { forms: forms_, addForm, sync };
};

export default useForms;
