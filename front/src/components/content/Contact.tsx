import { Box, Image, Text, Heading, Flex, HStack, Center } from '@chakra-ui/react'


export default function Contact () {
    
    return (
        <Flex height={"100vh"}>
            <Box>
                <Heading>Envie de se rencontrer?</Heading>
                <Text>Prenons le temps de discuter autour d'un café.</Text>
            </Box>
            <Center flexDirection={"column"}>
                <Text>Contactez-moi</Text>
                <HStack>
                    <Image color={"red"} src='/linkedin.svg' />
                    <Image  src='/mail.svg' />
                </HStack>
            </Center>
        </Flex>
    )
} 