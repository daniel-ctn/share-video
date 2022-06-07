import {FC, useState} from 'react'
import {Button, Flex, Grid, Heading, Input, Spinner, Text} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import {ImHome} from "react-icons/im";

import {useAuth} from "../hooks/useAuth";

const Header: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {user, loading, signUpOrSignInWithEmail, signUserOut} = useAuth()
    const navigate = useNavigate()

    const signUpOrSignIn = () => {
        signUpOrSignInWithEmail(email, password)
        setEmail('')
        setPassword('')
    }

    const logOut = () => {
        signUserOut()
    }

    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} alignItems="center" p={4}>
            <Flex alignItems="center">
                <ImHome size="2rem" color="gray"/>
                <Heading as='h1' size='xl' marginLeft={3} color="gray">
                    <Link to='/'> Funny Movies</Link>
                </Heading>
            </Flex>
            <Flex gap={3} alignItems="center" justifySelf="end">
                {user && (
                    <>
                        <Text>Hello, {user.email}</Text>
                        <Button colorScheme='teal' onClick={() => navigate('/share')}>Share a video</Button>
                        <Button colorScheme='orange' variant='outline' onClick={logOut} disabled={loading}>
                            {loading ? <Spinner /> : 'Sign out'}
                        </Button>
                    </>
                )}
                {!user && (
                    <>
                        <Input placeholder='Email' type="email" w="30%" disabled={loading} value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder='Password' type="password" w="30%" disabled={loading} value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Button colorScheme='teal' onClick={signUpOrSignIn} disabled={loading}>
                            {loading ? <Spinner /> : 'Login / Register'}
                        </Button>
                    </>
                )}
            </Flex>
        </Grid>

    );
};

export default Header;
