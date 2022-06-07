import {FC} from 'react'
import {Button, Container, Flex, Heading, HStack, Input, Text} from "@chakra-ui/react";

const ShareVideo: FC = () => {
    return (
        <Container maxW="768px" py={24}>
            <Flex flexDir="column" py={8} px={12} gap={4} border='1px' borderColor='teal' borderRadius="10px">
                <Heading as="h2" size="md">Share a Youtube movie</Heading>
                <HStack gap={2}>
                    <Text w="20%">Youtube URL:</Text>
                    <Input placeholder='https://www.youtube.com/embed/nK1r_9hPWuI'/>
                </HStack>
                <Button alignSelf="center" colorScheme='teal' w="40%">Share</Button>
            </Flex>
        </Container>
    );
};

export default ShareVideo;
