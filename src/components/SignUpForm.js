import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const register = (e) => {
        e.preventDefault();
        if ((password !== '' && !passwordError && email !== null && !emailError)) {
            auth.createUserWithEmailAndPassword(
                email, password
            ).then((authUser) => {
                console.log('authUser', authUser)
            }).catch((error) => {
                alert(error.message)
            })
        }
        return
    }

    const sanitizeData = data => {
        if (data === '' || null) {
            return '';
        }
        return data = data.trim().replace(/<[^>]*>/g, '')
    }

    const validateEmail = (email) => {
        email = sanitizeData(email.toString().toLowerCase());
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(mailformat)) {
            setEmail(email);
            return setEmailError(false);
        }
        setEmailError(true)
    };


    // check a password between 6 to 20 characters which contains  at 
    // least one numeric digit, one uppercase and one lowercase letter
    const validatePassword = () => {
        let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,60}$/;

        if (password.match(passwordFormat)) {
            return setPasswordError(false);
        }
        setPasswordError(true)
    };

    return (
        <div className='max-w-[450px] p-[70px] mx-auto bg-myDarkBlack -mt-[10%]'>
            <form className='grid flex-col'>
                <h1 className='text-[32px] font-semibold mb-8 text-left'>Join Netflix</h1>

                <input
                    placeholder='Email'
                    type='email'
                    value={email}
                    className={`bg-white/20 py-4 px-5 rounded mb-6 outline-0 
                    ${emailError && ' border-b-2 border-error'}`}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)}
                />

                {emailError && (
                    <p className='py-[6px] px-[3px] text-[13px] -mt-6 mb-3 text-error text-left'>
                        Please enter a valid email or phone number.
                    </p>
                )}


                <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    className={`bg-white/20 py-4 px-5 rounded mb-6 outline-0 
                    ${passwordError && ' border-b-2 border-error'}`}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={(e) => validatePassword(e.target.value)}
                />

                {passwordError && (
                    <p className='py-[6px] px-[3px] text-[13px] -mt-6 mb-3 text-error text-left'>
                        Your password must contain between 4 and 60 characters, 1 numeric digit, 1 uppercase and 1 lowercase characters.
                    </p>
                )}

                <button
                    type='submit'
                    className='bg-netflix cursor-pointer font-semibold 
                    py-4 px-5 rounded mt-5 hover:brightness-75 duration-800'
                    onClick={register}
                >
                    Sign Up
                </button>

                <div className='flex justify-between items-center text-[13px] mt-3 text-myLightGray'>
                    <div>
                        <p className='flex flex-row items-center'>
                            <input
                                type='checkbox'
                                value='rememberMe'
                                className='text-black focus:bg-white cursor-pointer'
                            />
                            <span className='ml-1'>
                                Remember me
                            </span>
                        </p>
                    </div>
                    <div className='cursor-pointer hover:underline'><p>Need Help?</p></div>
                </div>

                <div className='mt-4 text-left'>
                    <span className='text-base text-myLightGray font-light'>Already have an account?</span>
                    <Link
                        to='/'
                        className='ml-2 text-base font-normal cursor-pointer hover:underline'
                    >
                        Sign In
                    </Link>
                    <span className='text-base text-myLightGray font-light'>.</span>
                </div>

                <div className='mt-4 text-left text-[13px] font-light'>
                    <span className='text-myLightGray'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </span>
                    <span className='ml-2 font-normal cursor-pointer hover:underline text-[#0071EB]'>
                        Learn more.
                    </span>

                </div>
            </form>
        </div>
    )
}

export default SignUpForm