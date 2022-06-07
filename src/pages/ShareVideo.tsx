import {FC, useState} from 'react'
import {addDoc, collection} from "firebase/firestore";
import {Button, Container, Flex, Heading, HStack, Input, Spinner, Text} from "@chakra-ui/react";

import {getId, getVideoInfoFromUrl} from '../utils/api';
import {notify} from "../utils/toast";
import {Video} from "../types/video";
import {useAuth} from "../hooks/useAuth";
import {db} from "../config/firebase";
import {useCollection} from "../hooks/useCollection";

const ShareVideo: FC = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const {user} = useAuth()
    const {documents: videos} = useCollection('videos')

    const shareVideo = async () => {
        setLoading(true)
        const id = getId(url?.trim())

        if (!id) notify('URL is not valid!')
        if (id) {
            const embedUrl = `https://www.youtube.com/embed/${id}`
            if (videos.some(video => video.url === embedUrl)) {
                setLoading(false)
                return notify('This video has been shared')
            }

            const videoInfo = await getVideoInfoFromUrl(id)
            const data = videoInfo.data.items[0].snippet || {}

            if (data) {
                const newShareVideo: Video = {
                    title: data?.title?.length > 80 ? data?.title?.slice(0, 80) : data?.title || '',
                    description: data?.description?.length > 250 ? data?.description?.slice(0, 250) : data?.description || '',
                    url: embedUrl,
                    sharedBy: user?.email || '',
                    upVote: 0,
                    downVote: 0,
                }

                try {
                    const videoRef = collection(db, 'videos')
                    await addDoc(videoRef, newShareVideo)
                    setLoading(false)
                    notify('Success, visit homepage to see all shared videos!', "success")
                } catch (e) {
                    setLoading(false)
                    console.log(e)
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
