import {FC} from 'react'
import { Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";

const Video: FC = () => {
    return (
        <Flex maxW="1024px" py={10} gap={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nK1r_9hPWuI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <VStack align="start" w="50%" spacing="12px">
                <Heading as="h3" size="lg" color='tomato'>Movie Title</Heading>
                <Heading as="h5" fontSize='sm' fontWeight={500}>Shared by someone@gmail.com</Heading>
                <HStack gap={2}>
                    <Flex alignItems="center" gap={1}>
                        <Text>89</Text>
                        <FaThumbsUp size="0.9rem" cursor="pointer"/>
                    </Flex>
                    <Flex alignItems="center" gap={1}>
                        <Text>12</Text>
                        <FaThumbsDown size="0.9rem" cursor="pointer"/>
                    </Flex>
                </HStack>
                <Text fontSize='sm'>
                    Description: <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam amet
                    aperiam aspernatur at aut cum deleniti, deserunt dicta ducimus enim facilis inventore iste iure
                    maxime neque nesciunt nihil officia quaerat quod ratione recusandae reiciendis repellat sapiente,
                    tempora voluptatem voluptatum.
                </Text>
            </VStack>
        </Flex>
    );
};

export default Video;
