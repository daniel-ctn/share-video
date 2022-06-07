import {FC, useState} from 'react'
import {Box, Button, Container, Flex, Grid, Heading, Input, Spinner, Text} from "@chakra-ui/react";
import {ImHome} from "react-icons/im";
import {useAuth} from "../hooks/useAuth";

const Header: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {user, loading, signUpOrSignInWithEmail, signUserOut} = useAuth()

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
                    Funny Movies
                </Heading>
            </Flex>
            <Flex gap={3} alignItems="center" justifySelf="end">
                {user && (
                    <>
                        <Text>Hello, {user.email}</Text>
                        <Button colorScheme='teal'>Share a video</Button>
                        <Button colorScheme='orange' variant='outline' onClick={logOut}>
                            {loading ? <Spinner /> : 'Sign out'}
                        </Button>
                    </>
                )}
                {!user && (
                    <>
                        <Input placeholder='Email' w="30%" disabled={loading} value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder='Password' type="password" w="30%" disabled={loading} value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Button colorScheme='teal' onClick={signUpOrSignIn}>
                            {loading ? <Spinner /> : 'Login / Register'}
                        </Button>
                    </>
                )}
            </Flex>
        </Grid>

    );
};

export default Header;
