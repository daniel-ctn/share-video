import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from "react-toastify";

import App from './App'

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider>
                <App/>
                <ToastContainer />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
)
