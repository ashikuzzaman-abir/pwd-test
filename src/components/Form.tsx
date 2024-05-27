import React, { FC, useState } from 'react';
import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from '@chakra-ui/react';
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

type FormProps = {

}

const Form: FC<FormProps> = ({}) => {
// HOOKS

// STATE

// VARIABLES

// STYLES
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

// console.log('data', name, email, message);


// FUNCTIONS
const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();

	// Get the existing data
	let existingData = localStorage.getItem('formData');

	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existingData = existingData ? JSON.parse(existingData) : [];

	// Add new data to localStorage Array
	(existingData as unknown as Array<any>).push({ name, email, message });

	// Save back to localStorage
	localStorage.setItem('formData', JSON.stringify(existingData));

	console.log(existingData);
};


// EFFECTS

// COMPONENTS

  return (
		<Container bg='#9DC4FB' maxW='full' mt={0} centerContent overflow='hidden'>
			<Flex>
				<Box
					bg='#02054B'
					color='white'
					borderRadius='lg'
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}
				>
					<Box p={4}>
						<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
							<WrapItem>
								<Box bg='white' borderRadius='lg'>
									<Box m={8} color='#0B0E3F'>
										<VStack spacing={5}>
											<FormControl id='name' onSubmit={handleSubmit}>
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={<BsPerson color='gray.800' />}
													/>
													<Input
														type='text'
														size='md'
														value={name}
														onChange={e => setName(e.target.value)}
													/>
												</InputGroup>
											</FormControl>
											<FormControl id='name'>
												<FormLabel>Mail</FormLabel>
												<InputGroup borderColor='#E0E1E7'>
													<InputLeftElement
														pointerEvents='none'
														children={<MdOutlineEmail color='gray.800' />}
													/>
													<Input
														type='text'
														size='md'
														value={email}
														onChange={e => setEmail(e.target.value)}
													/>
												</InputGroup>
											</FormControl>
											<FormControl id='name'>
												<FormLabel>Message</FormLabel>
												<Textarea
													borderColor='gray.300'
													_hover={{
														borderRadius: 'gray.300',
													}}
													placeholder='message'
													value={message}
													onChange={e => setMessage(e.target.value)}
												/>
											</FormControl>
											<FormControl id='name' float='right'>
												<Button
													variant='solid'
													bg='#0D74FF'
													color='white'
													_hover={{}}
													type='submit'
												>
													Send Message
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Box>
			</Flex>
		</Container>
	);
};

export default Form;