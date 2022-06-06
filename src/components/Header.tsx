import {FC} from 'react'
import {Box, Button, Container, Flex, Grid, Heading, Input} from "@chakra-ui/react";
import {ImHome} from "react-icons/im";

const Header: FC = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={6} alignItems="center" p={4}>
            <Flex alignItems="center">
                <ImHome size="2rem"/>
                <Heading as='h1' size='xl' noOfLines={1} marginLeft={3}>
                    Funny Movies
                </Heading>
            </Flex>
            <Flex gap={2}>
                <Input placeholder='Email' w="30%"/>
                <Input placeholder='Password' w="30%"/>
                <Button colorScheme='blue'>Login/ Register</Button>
            </Flex>
        </Grid>

    );
};

export default Header;
