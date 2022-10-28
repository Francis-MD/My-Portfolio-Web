import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Francis MD.</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Developer</h1>
          <p className='py-4 text-gray-600 text-xl sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>

          {/* Social Icons Hero */}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/francismd/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Francis-MD'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          {/* Include REsume Download Button */}
          <div className='py-12'>
            <a href="/files/francismd-resume.pdf" download='francismd-resume.pdf'>
              <button 
              className='w-40 h-12 rounded-lg text-white font-bold cursor-pointer hover:scale-105 ease-in duration-100'
              alt='resume-download'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
