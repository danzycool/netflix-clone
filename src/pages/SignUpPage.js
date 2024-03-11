import React, { useState } from 'react';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";

const SignUpPage = () => {
    const [checked, setChecked] = useState(false)


    return (
        <div className='max-w-[450px] p-[70px] mx-auto bg-myDarkBlack -mt-[7%]'>
            <form className='grid flex-col'>
                <h1 className='text-[32px] font-semibold mb-8 text-left'>Sign In</h1>
                <input
                    placeholder='Email'
                    type='email'
                    className='bg-myDarkGray py-4 px-5 rounded mb-6 outline-0'
                />
                <input
                    placeholder='Password'
                    type='password'
                    className='bg-myDarkGray py-4 px-5 rounded mb-6 outline-0'
                />
                <button
                    type='submit'
                    className='bg-netflix cursor-pointer font-semibold 
                    py-4 px-5 rounded mt-5 hover:brightness-75 duration-800'
                >
                    Sign In
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
                    <span className='text-base text-myLightGray font-light'>New to Netflix?</span>
                    <span className='ml-2 text-base font-normal cursor-pointer hover:underline'>Sign Up Now</span>
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

export default SignUpPage