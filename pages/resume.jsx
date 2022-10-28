import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Francis MD | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel='icon' href='/' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px] overflow-hidden'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Francis MD</h2>
          
          <div>
            <a href="/files/francismd-resume.pdf" download='francismd-resume.pdf'>
              <button 
              className='w-40 h-12 rounded-lg text-white font-bold cursor-pointer hover:scale-105 ease-in duration-100'
              alt='resume-download'>Get Resume</button>
            </a>
          </div>
        </div>
        
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Web Development <span className='px-1'>|</span> Technical Writing{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web Development</p>
            <p className='py-2'> Technical Writing</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>


        {/* Skills */}
        <div className='text-left py-4'>
          <h5 className='text-left underline text-[18px] py- text-[#5651e5]'>Skills</h5>
          <p className='py-0'>
            <span className='font-bold'>Languages:</span>
            <span className='px-1'></span>Javascript (ES6)
            <span className='px-1'>|</span>Python
            <span className='px-1'>|</span>C#
          
          </p>
            <p className='py-0'>
            <span className='font-bold'>Frontend:</span>
            <span className='px-1'></span>React.js
            <span className='px-1'>|</span>Vue.js
            <span className='px-1'>|</span>Bootstrap
            <span className='px-1'>|</span>Tailwind
          </p>
          
          <p className='py-0'>
            <span className='font-bold'>Backend & BaaS:</span>
            <span className='px-1'></span>Node.js
            <span className='px-1'>|</span> Firebase
            <span className='px-1'>|</span> REST API
            <span className='px-1'>|</span> Heroku
          </p>

          <p className='py-0'>
            <span className='font-bold'>Methodologies:</span>
            <span className='px-1'></span>MVC 
            <span className='px-1'>|</span> Agile
            <span className='px-1'>|</span> Scrum
          </p>

          <p className='py-0'>
            <span className='font-bold'>Other Tech:</span>
            <span className='px-1'></span>D3
            <span className='px-1'>|</span> MongoDB
            <span className='px-1'>|</span> Jest
            <span className='px-1'>|</span> Git
          </p>
        </div>

        <h5 className='text-left underline text-[18px] py-4 text-[#5651e5]'>
          Work Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            FREELANCER
            </span>
            <span className='px-2'>|</span>Dubai, UAE
          </p>
          <p className='py-1 italic'>Web Developer (2020 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developing responsive, mobile-friendly websites and applications 
              for diverse clients using HTML5, CSS3, JavaScript, and React.js.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and implement changes as needed.
            </li>
            <li>
              Working directly with clients to understand their needs and
              create their business digital presence.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              CONTENT CREATOR
            </span>
            <span className='px-2'>|</span>Dubai, UAE
          </p>
          <p className='py-1 italic'>Blog & Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            In 2021 I started “Capoeira 360”, a YouTube channel to share fitness content with 
            the main goal of sharpening my SEO and social media management skills.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            TECHNICAL WRITER
            </span>
            <span className='px-2'>|</span>Dubai, UAE
          </p>
          <p className='py-1 italic'>Medical Documentation (2016 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            {'Planning and managing documentation projects - focus on producing technical documentation in line with the industry\'s best practices.'}
            </li>
            <li>
            Create, organize, update, and maintain internal and customer-facing documentation and related templates.
            </li>
            <li>
            Work with stakeholders to meet project milestones, including document structuring, planning, and delivery.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-left underline text-[18px] py-4 text-[#5651e5]'>
          Education
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>freeCodeCamp</span>
            <span className='px-2'>|</span>Online
          </p>
          <p className='py-1 italic'>Front-End Development (2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Front-End Development Libraries
            </li>
            <li>
              JavaScript Algorithms and Data Structures
            </li>
            <li>
              Responsive Web Design
            </li>
            <li>
              Data Visualization
            </li>
            <li>
              Quality Assurance
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Meta</span>
            <span className='px-2'>|</span>Online
          </p>
          <p className='py-1 italic'>Meta Front-End Developer Professional Certificate (2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Advance React 
            </li>
            <li>
              Programming with JavaScript
            </li>
            <li>
              Version Control
            </li>
            <li>
              HTML & CSS in depth
            </li>
          </ul>
        </div>
        {/* <div className='flex align-content-center'>
            <a
              href='https://www.linkedin.com/in/francismd/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Francis-MD'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div> */}
      </div>
      
    </>
  );
};

export default resume;
