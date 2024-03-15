import React from 'react';
import { useSelector } from 'react-redux';

import Nav from '../components/Nav';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const ProfilePage = () => {
    const user = useSelector(selectUser);

    return (
        <div className='h-screen'>
            <Nav />
            <div className='flex flex-col w-1/2 mx-auto pt-[8%] max-w-[800px]'>
                <h1 className='text-6xl font-normal border-b border-[#282c2d] mb-5'>
                    Edit Profile
                </h1>

                <div className='flex'>
                    <img
                        src={process.env.PUBLIC_URL + "/images/user-avatar.jpg"}
                        alt=''
                        className='h-[100px] rounded'
                    />
                    <div className='ml-6 flex-1'>
                        <h2 className='text-[15px] font-bold p-4 pl-5 bg-gray-500'>
                            {user?.email || "bizwithdan@gmail.com"}
                        </h2>
                        <div className='mt-5'>
                            <h3 className='border-b border-[#282c2d] pb-2.5'>Plans</h3>
                            <button
                                className='w-full py-3 px-5 mt-[5%] text-base border-none hover:brightness-75 
                                    transition-all duration-500 text-center bg-netflix font-semibold cursor-pointer'
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage