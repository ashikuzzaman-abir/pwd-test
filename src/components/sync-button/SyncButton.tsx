import useForms from '@/hooks/useForms';
import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoMdSync } from 'react-icons/io';

const SyncButton = () => {
	const { sync } = useForms();
	return (
		<Flex
			p={4}
			borderRadius={'full'}
			w={'35px'}
			h={'35px'}
			pos='absolute'
			top={2}
			right={2}
			justify={'center'}
			align={'center'}
			bgColor={'green.500'}
			cursor={'pointer'}
			onClick={() => sync()}
		>
			<Icon as={IoMdSync} w='25px' h='25px' color='white' />
		</Flex>
	);
};

export default SyncButton;
