'use client';
import Card from '@/components/Card';
import useForms from '@/hooks/useForms';
import { Grid } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type pageProps = {};

const page: NextPage<pageProps> = ({}) => {
	const { forms } = useForms();
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Grid templateColumns='1fr 1fr 1fr' gap={6}>
			{forms?.length === 0 && <h1>No Forms</h1>}
			{forms?.map((item: any, idx: number) => (
				<Card key={idx} item={item} />
			))}
		</Grid>
	);
};

export default page;
