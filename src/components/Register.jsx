import React, { useEffect } from 'react';
import { FormControl, FormLabel, Input, Stack, Button, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser, userSelector } from '../features/user/userSlice';

export const Register = () => {

    const { data, isLogged } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    if(isLogged) {
        console.log('You have succesfully logged in.');
        console.log(data);
    }

    const registerSchema = object().shape({
        email: string()
            .required('Enter your email')
            .email('That email is not valid'),
        password: string()
            .required('Enter your password')
            .min(6, 'Password must be longer than 6 characters'),
        passwordConfirm: string()
            .required('Confirm your password')
            .oneOf([ref('password'), null], 'Passwords do not match')
    });

    return (
        <Formik
            initialValues={{ email: '', password: '', passwordConfirm: '' }}
            //validationSchema={ registerSchema }
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false);
                    dispatch(signupUser(values));
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
                    <Field name='passwordConfirm'>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.passwordConfirm && form.touched.passwordConfirm}>
                                <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                                <Input {...field} type="password" id='passwordConfirm' placeholder='Confirm your password' />
                                <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button colorScheme='blue' isLoading={props.isSubmitting} type='submit'>
                        Sign up
                    </Button>
                </Stack>
            </Form>
        )}
        </Formik>
    )
    
}