import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { Card } from './Card';
import { Login } from './Login';
import { Register } from './Register';

export class Auth extends React.Component {
    render() {
        const hasAccount = this.props.hasAccount;

        return (
            <Box maxW="md" mx="auto" minW="md">
                <Heading mb="5" textAlign="center" size="xl" fontWeight="extrabold">
                    { hasAccount ? (
                        <p>Sign in to your account</p>
                    ):(
                        <p>Create an account</p>
                    )}
                </Heading>

                <Box mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
                    { hasAccount ? (
                        <div>
                            <Text as="span" pr="2">Don't have an account?</Text>
                            <Link href="#" color="blue.600">Let's create one!</Link>
                        </div>
                    ):(
                        <div>
                            <Text as="span" pr="2">Already have an account?</Text>
                            <Link href="#" color="blue.600">Sign in!</Link>
                        </div>
                    )}
                </Box> 
            
                <Card>
                    { hasAccount ? (
                        <Login />
                    ):(
                        <Register />
                    )}
                    
                </Card>
            </Box>
        );
    }
}