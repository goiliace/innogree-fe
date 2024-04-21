import { Link, useNavigate } from 'react-router-dom'
import AuthHeader from '~/components/AuthHeader';
import React, { useEffect } from 'react';
import { register } from "~/features/Auth/thunks";
import { useAppDispatch, useAppSelector } from "~/store";
import type { UserRegister } from '~/features/Auth/types';
import Alert from '@mui/material/Alert';
import { setMessage } from '~/features/Auth';
const SignUp = () => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget.full_name.value === '') {
            dispatch(setMessage({ type: 'error', content: 'Full name is required' }));
            return;
        }
        if (e.currentTarget.email.value === '') {
            dispatch(setMessage({ type: 'error', content: 'Email is required' }));
            return;
        }
        if (e.currentTarget.phone_num.value === '') {
            dispatch(setMessage({ type: 'error', content: 'Phone number is required' }));
            return;
        }
        if (e.currentTarget.password.value === '') {
            dispatch(setMessage({ type: 'error', content: 'Password is required' }));
            return;
        }
        if (e.currentTarget.confirm_password.value === '') {
            dispatch(setMessage({ type: 'error', content: 'Confirm password is required' }));
            return;
        }

        if (e.currentTarget.password.value !== e.currentTarget.confirm_password.value) {
            dispatch(setMessage({ type: 'error', content: 'Password not match' }));
            return;
        }
        if (!e.currentTarget.terms.checked) {
            dispatch(setMessage({ type: 'error', content: 'Please accept the terms and conditions' }));
            return;
        }
        const user: UserRegister = {
            id: null,
            email: e.currentTarget.email.value,
            full_name: e.currentTarget.full_name.value,
            password: e.currentTarget.password.value,
            phone_number: e.currentTarget.phone_num.value,
            avatar: null,
            gender: null,
            role: 'Phụ huynh'
        }
        dispatch(register(user));
    }
    const message = useAppSelector(state => state?.auth?.message)
    const [openAlert, setOpenAlert] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (message?.type !== null && message?.content !== null) {
            setOpenAlert(true);
            // time out
            setTimeout(() => {
                setOpenAlert(false);
                // set message to null
                dispatch(setMessage({ type: null, content: '' }));
                if (message?.type === 'success') navigate('/login');

            }, 3000);
        } else {
            setOpenAlert(false);
        }

    }, [message])
    return (
        <section className={`bg-gray-50 dark:bg-gray-900 ${openAlert && 'mt-10'}`}>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative'>
                <AuthHeader />

                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Create and account
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='full_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Your full name
                                </label>
                                <input
                                    type='text'
                                    name='full_name'
                                    id='full_name'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='Your name'
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Your email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='your email address'
                                />
                            </div>
                            <div>
                                <label htmlFor='phone_num' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Your phone number
                                </label>
                                <input
                                    type='text'
                                    name='phone_num'
                                    id='phone_num'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='your phone number'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='••••••••'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='confirm_password'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Confirm password
                                </label>
                                <input
                                    type='password'
                                    name='confirm_password'
                                    id='confirm_password'
                                    placeholder='••••••••'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                />
                            </div>
                            <div className='flex items-start'>
                                <div className='flex items-center h-5'>
                                    <input
                                        id='terms'
                                        aria-describedby='terms'
                                        type='checkbox'
                                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                                    />
                                </div>
                                <div className='ml-3 text-sm'>
                                    <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                                        I accept the{' '}
                                        <a className='font-medium text-blue-600 hover:underline dark:text-blue-500' href='#'>
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            {
                                openAlert && message?.content && message?.type && (
                                    <Alert severity={message.type} >
                                        {message.content}
                                    </Alert>
                                )
                            }
                            <button
                                type='submit'
                                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

                            >
                                Create an account
                            </button>
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                Already have an account?{' '}
                                <Link to='/login' className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
