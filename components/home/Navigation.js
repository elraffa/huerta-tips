import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log('click');
    setActive(!active);
  }

  return (
      <nav>
      <button type="button" className='sticky inline-flex p-3 bg-green-700 z-20 hover:bg-green-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none' 
        onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={
          `${ active ? '' : 'hidden lg:relative lg:bg-white lg:p-2' } absolute bg-green-800 top-0 right-0 p-20 h-full z-10 w-full lg:inline-flex lg:flex-grow lg:w-auto transition-all`
        }>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>

            <Link href='/' passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className='lg:inline-flex lg:w-auto lg:text-black w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:transition-all'>
                Home
              </a>
            </Link>
            <Link href='/'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className='lg:inline-flex lg:w-auto lg:text-black w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:transition-all'>
                Services
              </a>
            </Link>
            <Link href='/'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className='lg:inline-flex lg:w-auto lg:text-black w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </a>
            </Link>
            <Link href='/'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className='lg:inline-flex lg:w-auto lg:text-black w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
       
      </nav>
  );
};

export default Navigation;
