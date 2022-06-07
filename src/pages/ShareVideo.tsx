import {FC, useState} from 'react'
import {addDoc, collection} from "firebase/firestore";
import {Button, Container, Flex, Heading, HStack, Input, Spinner, Text} from "@chakra-ui/react";

import {getId, getVideoInfoFromUrl} from '../utils/api';
import {notify} from "../utils/toast";
import {Video} from "../types/video";
import {useAuth} from "../hooks/useAuth";
import {db} from "../config/firebase";

const ShareVideo: FC = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const {user} = useAuth()

    const shareVideo = async () => {
        const id = getId(url)

        if (!id) notify('URL is not valid!')
        if (id) {
            const videoInfo = await getVideoInfoFromUrl(id)
            const data = videoInfo.data.items[0].snippet || {}

            if (data) {
                const newShareVideo: Video = {
                    title: data?.title || '',
                    description: data?.description || '',
                    url: `https://www.youtube.com/embed/${id}`,
                    sharedBy: user?.email || '',
                    upVote: 0,
                    downVote: 0,
                }

                try {
                    const videoRef = collection(db, 'videos')
                    await addDoc(videoRef, newShareVideo)
                    notify('Success, visit homepage to see all shared videos!', "success")
                } catch (e) {
                    notify('Fail to share video, please try again!')
                }
            }
        }
    }

    return (
        <Container maxW="768px" py={24}>
            <Flex flexDir="column" py={8} px={12} gap={4} border='1px' borderColor='teal' borderRadius="10px">
                <Heading as="h2" size="md" color="gray.500">Share a Youtube movie</Heading>
                <HStack gap={2}>
                    <Text w="20%">Youtube URL:</Text>
                    <Input placeholder='https://www.youtube.com/embed/nK1r_9hPWuI' value={url}
                           onChange={(e) => setUrl(e.target.value)}/>
                </HStack>
                <Button alignSelf="center" colorScheme='teal' w="40%" onClick={shareVideo} disabled={loading}>
                    {loading ? <Spinner/> : 'Share'}
                </Button>
            </Flex>
        </Container>
    );
};

export default ShareVideo;
