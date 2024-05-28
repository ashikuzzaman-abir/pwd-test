import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
	return (
		<Flex gap={3} bgColor={'white'} position={'absolute'} top={0} right={20}>
			<Link href='/'>Home</Link>
			<Link href='/forms'>Forms</Link>
		</Flex>
	);
};

export default Navigation;
