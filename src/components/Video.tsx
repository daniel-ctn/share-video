import {FC} from 'react'
import {AspectRatio, Flex, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import {FVideo} from "../types/video";

const Video: FC<{ video: FVideo }> = ({video}) => {
    const {url, title, sharedBy, upVote, downVote, description} = video

    return (
        <Flex py={10} gap={6}>
            <AspectRatio w='50%' ratio={16 / 9}>
                <iframe src={url} title="YouTube video player" frameBorder="0" allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </AspectRatio>
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
