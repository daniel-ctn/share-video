import {FC} from 'react'
import {Container, Text} from "@chakra-ui/react";
import Video from "../components/Video";
import {useCollection} from "../hooks/useCollection";

const Home: FC = () => {
    const {documents: videos} = useCollection('videos')

    return (
        <Container maxW="1024px">
            {videos.length === 0 && <Text>No video has shared</Text>}
            {videos.length > 0 && videos.map(video => (
                <Video key={video.id} video={video}/>
            ))}
        </Container>
    );
};

export default Home;
