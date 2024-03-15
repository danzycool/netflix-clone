import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import SignInForm from '../components/SignInForm';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [signIn, setSignIn] = useState(false);
    const [error, setError] = useState(false);

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
                {!signIn && (
                    <button
                        className='absolute top-5 right-5 lg:right-[150px] 
                    px-5 py-1.5 text-base border-none hover:brightness-75
                    duration-800 rounded-md bg-netflix font-semibold cursor-pointer'
                        onClick={() => setSignIn(true)}
                    >
                        Sign In
                    </button>
                )}
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

                {signIn ? (
                    <SignInForm mail={email} />
                ) :
                    (
                        <>
                            <h1 className='lg:text-6xl text-4xl lg:font-extrabold font-bold 
                                mb-5 leading-[70px] sm:leading-5'
                            // style={{ lineHeight: "70px" }}
                            >
                                Unlimited movies, TV
                                <br />
                                shows, and more
                            </h1>
                            <p className='mb-8 lg:text-[22px] text-lg font-bold'>
                                Watch anywhere. Cancel at anytime.
                            </p>
                            <p className='text-md mb-4'>
                                Ready to watch? Enter your email to create or restart your membership.
                            </p>
                            <div className=''>
                                <form>
                                    <div className='flex md:flex-row xs:flex-col justify-center items-center w-full'>
                                        <div className='w-auto'>
                                            <div className='flex md:flex-row xs:flex-col w-auto justify-center items-center pb-2'>
                                                <input
                                                    type='email'
                                                    placeholder='Email address'
                                                    className={`flex items-center w-[30vw] px-3 py-4 font-bold
                                                    text-lg mr-2 rounded bg-myLightBlack border 
                                                    ${error ? "border-red-500" : "border-green-900"}`}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                                <button
                                                    className='bg-netflix px-5 hover:brightness-75
                                                    duration-800 py-3 text-2xl font-semibold rounded'
                                                    onClick={() => setSignIn(true)}
                                                >
                                                    <p className='flex justify-center items-center'>Get Started
                                                        <MdKeyboardArrowRight className='text-4xl font-light ml-px' />
                                                    </p>
                                                </button>
                                            </div>
                                            {error &&
                                                <p className='flex justify-start items-center text-sm text-red-500 self-start'>
                                                    <GiCancel size={16} className='mr-1.5' />
                                                    Email is required.
                                                </p>
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }
            </div>

            {/* <div className='w-full h-40 mt-80 bg-myDarkBlack'>

            </div> */}
        </div >
    )
}

export default LoginPage