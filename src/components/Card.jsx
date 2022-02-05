import React from 'react';
import { Box } from '@chakra-ui/react';

export class Card extends React.Component {
    render() {
        return (
            <Box
                bg="white"
                py="8"
                px={{ base: '4', md: '10' }}
                shadow="base"
                rounded={{ sm: 'lg' }}
                { ...this.props }
            />
        );
    }
}