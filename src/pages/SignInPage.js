import React, { useState } from 'react';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";

const SignInPage = () => {
    const [checked, setChecked] = useState(false)


    return (
        <div className='max-w-[450px] p-[70px] min-h-[740px] mx-auto bg-myDarkBlack -mt-[7%]'>
            <form className='grid flex-col'>
                <h1 className='text-[32px] font-semibold mb-8 text-left'>Sign Up</h1>
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
                    Sign Up
                </button>

                <div className='flex justify-between items-center text-[13px] mt-3 text-myLightGray'>
                    <div className='self-start'>
                        <p className='flex flex-row items-center'>
                            {checked ? (
                                <span
                                    className='cursor-pointer mr-1 bg-white rounded'
                                    onClick={() => setChecked(true)}
                                >
                                    <MdOutlineCheckBoxOutlineBlank
                                    />
                                </span>
                            ) :
                                (
                                    <span
                                        className='cursor-pointer mr-1 bg-white rounded'
                                        onClick={() => setChecked(false)}
                                    >
                                        <IoCheckboxOutline
                                            color='black'
                                        />
                                    </span>
                                )}
                            Remember me
                        </p>
                    </div>
                    <div className='self-end'><p>Need Help?</p></div>
                </div>
            </form>
        </div>
    )
}

export default SignInPage