import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.gif';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 p-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-xl'>
          I develop front-end web applications that link to APIs and other back-end technologies.<br></br><br></br>
          I am eager to learn about new technologies that allow me to complete my tasks in multiple ways. 
          I am an avid learner who can quickly pick up new tech stacks as they emerge. 
          </p>
          <p className='py-2 text-gray-600 text-xl'>
          I began building niche websites on WordPress in 2011 and thus discovered HTML and CSS, and here I am, always eager to add a new stack to my toolset.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#5651e5] text-xl underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-300 rounded-lg flex items-center justify-center p-1'>
          <Image src={AboutImg} className='rounded-lg' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
