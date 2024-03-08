import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    })


    return (
        <div className={`fixed top-0 p-2.5 w-full h-[150px] z-10 transition-all ease-in duration-500 ${show && 'bg-[#111]'}`} >
            <div className='flex justify-between pt-2.5'>
                <img
                    className='fixed left-0 top-5 w-80 pl-5 object-contain cursor-pointer'
                    src='./images/logo.png'
                    alt=''
                />
                <img
                    className='fixed right-5 w-10 rounded-md cursor-pointer'
                    src='./images/user-avatar.jpg'
                    alt='image_by_Freepik'
                />
            </div>
        </div >
    )
}

export default Nav