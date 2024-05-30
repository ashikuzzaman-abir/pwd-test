'use client';
import Card from '@/components/Card';
import SyncButton from '@/components/sync-button/SyncButton';
import useForms from '@/hooks/useForms';
import { Center, Flex, Grid, Icon } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

type pageProps = {};

const page: NextPage<pageProps> = ({}) => {
	const { local } = useForms();
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<>
			<Grid templateColumns='1fr 1fr 1fr' gap={6} minH='100vh'>
				{local?.length === 0 && (
					<Flex w='100vw' h='100vh'>
						<Center>
							<h1>No Forms</h1>
						</Center>
					</Flex>
				)}
				{local?.map((item: any, idx: number) => (
					<Card key={idx} item={item} />
				))}
			</Grid>
			<SyncButton />
		</>
	);
};

export default page;
