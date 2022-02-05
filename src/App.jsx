import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { Auth } from './components/Auth';

export class App extends React.Component {
    render() {
        return (
            <Box bg="gray.50">
                <Center w="100%" h="100vh">
                    <Auth hasAccount={false}/>
                </Center>
            </Box>
        );
    }
}
