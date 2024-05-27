import { FORMKEY } from './constants';

export const addFrom = (form: any) => {
	const exitstingForms = window.localStorage.getItem(FORMKEY);
	if (!exitstingForms) {
		window.localStorage.setItem(FORMKEY, JSON.stringify([form]));
	} else {
		const forms = JSON.parse(exitstingForms);
		forms.push(form);
		window.localStorage.setItem(FORMKEY, JSON.stringify(forms));
	}
};

export const getForms = () => {
	const exitstingForms = window.localStorage.getItem(FORMKEY);
	if (!exitstingForms) {
		return [];
	}
	return JSON.parse(exitstingForms);
};
