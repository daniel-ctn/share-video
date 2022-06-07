import {FC} from 'react'
import { Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import {FVideo} from "../types/video";

const Video: FC<{video: FVideo}> = ({video}) => {
    const {url, title, sharedBy, upVote, downVote, description} = video

    return (
        <Flex maxW="1024px" py={10} gap={6}>
            <iframe width="560" height="315" src={url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <VStack align="start" w="50%" spacing="12px">
                <Heading as="h3" size="lg" color='tomato'>{title}</Heading>
                <Heading as="h5" fontSize='sm' fontWeight={500}>Shared by {sharedBy}</Heading>
                <HStack gap={2}>
                    <Flex alignItems="center" gap={1}>
                        <Text>{upVote}</Text>
                        <FaThumbsUp size="0.9rem" cursor="pointer"/>
                    </Flex>
                    <Flex alignItems="center" gap={1}>
                        <Text>{downVote}</Text>
                        <FaThumbsDown size="0.9rem" cursor="pointer"/>
                    </Flex>
                </HStack>
                <Text fontSize='sm'>
                    Description: <br/>
                    {description}
                </Text>
            </VStack>
        </Flex>
    );
};

export default Video;
