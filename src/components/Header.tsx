import {FC, useContext, useEffect, useState} from 'react'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Grid,
    Heading,
    Input,
    Spinner,
    Text
} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import {ImHome} from "react-icons/im";

import {AuthContext} from "../context/AuthContext";
import {validateEmail} from "../utils/validation";
import {notify} from "../utils/toast";

const Header: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [formError, setFormError] = useState({email: '', password: ''});
    const {user, loading, error, setError, signUpOrSignInWithEmail, signUserOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const validateFormValue = () => {
        let isValid = true;
        const formError = {email: '', password: ''}

        if(!validateEmail(email)) {
            formError.email = 'Invalid email.'
            isValid = false
        }
        if(password.length < 6) {
            formError.password = 'At least 6 characters.'
            isValid = false
        }

        setFormError(formError)
        return isValid
    }

    const signUpOrSignIn = () => {
        const checkValid = validateFormValue()

        if(checkValid) {
            signUpOrSignInWithEmail(email, password)
            setEmail('')
            setPassword('')
        }
    }

    const logOut = () => {
        signUserOut()
    }

    useEffect(() => {
        if (error) {
            notify(error.message)
            setError(null)
        }
    }, [error]);


    return (
        <Grid h="100px" templateColumns='repeat(2, 1fr)' gap={6} alignItems="center" p={4}>
            <Flex alignItems="center">
                <ImHome size="2rem" color="gray"/>
                <Heading as='h1' size='xl' marginLeft={3} color="gray">
                    <Link to='/'> Funny Movies</Link>
                </Heading>
            </Flex>
            {user ? (
                <Flex gap={3} alignItems="center" justifySelf="end">
                    <Text>Hello, <strong>{user.email}</strong></Text>
                    <Button colorScheme='teal' onClick={() => navigate('/share')}>Share a video</Button>
                    <Button colorScheme='orange' variant='outline' onClick={logOut} disabled={loading}>
                        {loading ? <Spinner/> : 'Sign out'}
                    </Button>
                </Flex>
            ) : (
                <Flex gap={3} alignItems="start" justifySelf="end">
                    <FormControl w="30%" isInvalid={!!formError.email}>
                        <Input
                            placeholder='Email'
                            type="email"
                            disabled={loading}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {!email && (
                            <FormHelperText>Enter a valid email.</FormHelperText>
                        )}
                        {formError.email !== '' && (
                            <FormErrorMessage>{formError.email}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl w="30%" isInvalid={!!formError.password}>
                        <Input
                            placeholder='Password'
                            type="password"
                            disabled={loading}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        {!password && (
                            <FormHelperText>Enter your password.</FormHelperText>
                        )}
                        {formError.password !== '' && (
                            <FormErrorMessage>{formError.password}</FormErrorMessage>
                        )}
                    </FormControl>
                    <Button colorScheme='teal' onClick={signUpOrSignIn} disabled={loading}>
                        {loading ? <Spinner/> : 'Login / Register'}
                    </Button>
                </Flex>
            )}
        </Grid>
    );
};

export default Header;
