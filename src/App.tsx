import {Container} from "@chakra-ui/react";

import Header from "./components/Header";
import Video from "./components/Video";
import './App.css'

function App() {

    return (
        <Container maxW="1400px">
            <Header/>
            <Container maxW="1024px">
                <Video/>
                <Video/>
            </Container>
        </Container>
    )
}

export default App
