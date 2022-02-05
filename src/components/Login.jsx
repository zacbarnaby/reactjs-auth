import React from 'react';
import { FormControl, FormLabel, Input, Stack, Button, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';

export const Login = () => {

    const dispatch = useDispatch();

    const loginSchema = object().shape({
        email: string()
            .required('Enter your email')
            .email('That email is not valid'),
        password: string()
            .required('Enter your password')
            .min(6, 'Password must be longer than 6 characters')
    });
        
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            //validationSchema={ loginSchema }
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false);
                    console.log(JSON.stringify(values, null, 2));
                }, 1000)
            }}
        >
        {(props) => (
            <Form>
                <Stack spacing="6">
                    <Field name='email'>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel htmlFor='email'>Email</FormLabel>
                                <Input {...field} id='email' placeholder='Enter your email' />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='password'>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                <FormLabel htmlFor='password'>Password</FormLabel>
                                <Input {...field} type="password" id='password' placeholder='Enter your password' />
                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button colorScheme='blue' isLoading={props.isSubmitting} type='submit'>
                        Sign in
                    </Button>
                </Stack>
                
            </Form>
        )}
        </Formik>
    )
    
}