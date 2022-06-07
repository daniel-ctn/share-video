import {Container, Text} from "@chakra-ui/react";
import Header from "./components/Header";
import Video from "./components/Video";
import {useCollection} from "./hooks/useCollection";
import './App.css'

function App() {
    const {documents: videos} = useCollection('videos')

    return (
        <Container maxW="1400px">
            <Header/>
            <Container maxW="1024px">
                {videos.length === 0 && <Text>No video has shared</Text>}
                {videos.length > 0 && videos.map(video => (
                    <Video key={video.id} video={video}/>
                ))}
            </Container>
        </Container>
    )
}

export default App
