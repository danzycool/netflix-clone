import React, { useState } from 'react';

import SignUpForm from '../components/SignUpForm';
import { Link } from 'react-router-dom';


const SignUpPage = () => {
    const [signIn, setSignIn] = useState(true);

    return (
        <div
            className={`
                relative
                w-full
                h-screen
                md:h-[120vh]
                bg-cover
                bg-center
              
            `}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
            }}
        >
            <div className='relative w-full h-auto px-10'>
                <img
                    className='absolute left-5 lg:left-[150px] 
                    w-[100px] lg:w-[160px] pt-5'
                    src="/images/logo.png"
                    alt='logo'
                />

                <button
                    className='absolute top-5 right-5 lg:right-[150px] 
                    px-5 py-1.5 text-base border-none hover:brightness-75
                    duration-800 rounded-md bg-netflix font-semibold cursor-pointer'
                >
                    <Link to='/'>
                        Sign In
                    </Link>
                </button>
            </div>
            <div
                className='w-full h-screen md:h-[120vh] z-10 bg-myBlack'
                style={{
                    backgroundImage: `linear-gradient(
                            to top,
                            rgba(0, 0, 0, 0.8) 0,
                            rgba(0, 0, 0, 0) 60%,
                            rgba(0, 0, 0, 0.8) 100%
                        )`
                }}
            />
            <div className='absolute top-[15%] lg:top-[27%] 
                h-[70vh] w-full items-center 
                justify-center text-center 
                p-5 z-10 mx-auto'>

                {signIn && (<SignUpForm />)}
            </div>

        </div >
    )
}

export default SignUpPage