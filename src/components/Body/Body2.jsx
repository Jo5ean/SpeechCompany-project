import { Box, Flex, Stack, Heading, Text, AspectRatio, useBreakpointValue, HStack, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'


export default function Body() {
    return (
        <Box>
            <HStack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg='#fa46b6'>
                <Flex p={10} flex={1} justify={'normal'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                     
                            <Box>
                            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                                <Text
                                    as={'span'}
                                    position={'relative'}
                                    _after={{
                                        content: "''",
                                        position: 'absolute',
                                        bottom: 1,
                                        left: 0,
                                        zIndex: -1,
                                    }}>
                                    Whatch a few!
                                </Text>
                                <br />{' '}
                            </Heading>
                     </Box>
                     <Box>
                            <AspectRatio maxW='full' ratio={1} >
                                <iframe
                                    title='naruto'
                                    src='https://player.vimeo.com/video/616310252?h=7d78085b46&autoplay=1&loop=1&color=42f942&byline=0'
                                    frameBorder='0'
                                    allowFullScreen
                                />
                            </AspectRatio></Box>
                      
                    </Stack>

                </Flex>

            </HStack>
        </Box>

    )




}