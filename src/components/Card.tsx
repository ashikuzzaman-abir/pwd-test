import React, { FC } from 'react';
import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';

type CardProps = {
	item?: any;
};

const Card: FC<CardProps> = ({ item }) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Box
			maxW={'270px'}
			w={'full'}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'2xl'}
			rounded={'md'}
			overflow={'hidden'}
		>
			<Box p={6}>
				<Stack spacing={0} align={'center'} mb={5}>
					<Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
						{item?.name}
					</Heading>
					<Text color={'gray.500'}>{item?.email}</Text>
					<Text color={'gray.500'}>{item?.message}</Text>
				</Stack>

				{/* <Stack direction={'row'} justify={'center'} spacing={6}>
					<Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>23k</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Followers
						</Text>
					</Stack> */}
				{/* <Stack spacing={0} align={'center'}>
						<Text fontWeight={600}>23k</Text>
						<Text fontSize={'sm'} color={'gray.500'}>
							Followers
						</Text>
					</Stack> */}
				{/* </Stack> */}

				<Button
					w={'full'}
					mt={8}
					bg={useColorModeValue('#151f21', 'gray.900')}
					color={'white'}
					rounded={'md'}
					_hover={{
						transform: 'translateY(-2px)',
						boxShadow: 'lg',
					}}
				>
					Follow
				</Button>
			</Box>
		</Box>
	);
};

export default Card;
