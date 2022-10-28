import Image from 'next/image'
import React from 'react'
import Javascript from '../public/assets/skills/javascript.png'
import Python from '../public/assets/skills/python.png'
import Csharp from '../public/assets/skills/csharp.png'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import ReactImg from '../public/assets/skills/react.png'
import Vue from '../public/assets/skills/vue.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Bootstrap from '../public/assets/skills/bootstrap.png'
import Sass from '../public/assets/skills/sass.png'
import Redux from '../public/assets/skills/redux.png'
/* import Github from '../public/assets/skills/github1.png'; */
/* import Firebase from '../public/assets/skills/firebase.png';
import Node from '../public/assets/skills/node.png' */


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
         Skills
        </p>
        <h2 className='py-4'>Languages & Tools</h2>
        
        {/* Programming Languages Row */}
        <h3 className='py-6'>Programming Languages</h3>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='javascript' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='python' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Csharp} width='64px' height='64px' alt='csharp' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Csharp</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Development Row*/}
        <h3 className='py-6'>Frontend Development</h3>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='html' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='css' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='reactjs' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Vue} width='64px' height='64px' alt='vuejs' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Vue.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='tailwind' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bootstrap} width='64px' height='64px' alt='bootstrap' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Sass} width='64px' height='64px' alt='sass' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sass</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Redux} width='64px' height='64px' alt='redux' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redux</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Skills;
