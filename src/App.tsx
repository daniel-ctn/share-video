import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import Home from "./pages/Home";
import ShareVideo from "./pages/ShareVideo";
import Header from "./components/Header";
import './App.css'

function App() {

    return (
        <Container maxW="1400px">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/share" element={<ShareVideo/>}/>
            </Routes>
        </Container>
    )
}

export default App
