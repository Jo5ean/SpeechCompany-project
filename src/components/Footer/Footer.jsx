import { ButtonGroup, Container, IconButton, Stack, Text, Image, Flex, Box, Center, Spacer } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo1 from '../../assets/logo1.jpg'
export default function Footer() {
   return (
       <Box bg={'#00cbc3'} px={10} height="90px">
                    <Flex>
                        <Center marginLeft={'0%'}>
                    <Image src={logo1} />
                    </Center>
                    <Spacer />
                    <Center marginRight={'0%'}>
                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="1.25rem" />}
                        />
                        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Twitter"
                            icon={<FaTwitter fontSize="1.25rem" />}
                        />
                    </ButtonGroup>
                    </Center>
                    </Flex>
     
                
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} SpeechCompany, Inc. All rights reserved.
                </Text>
          
       
        </Box>
    );
}