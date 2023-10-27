import React from 'react';
//images
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
    <div className='flex justify-between items-center
    '>
      {/* logo */}
      <a href='#'>
        {/* <img src={Logo} alt='' /> */}
        <div class="greeting">
        <h1 className='text-accent'>I'M </h1><br />
        <h1>ATHARV</h1>
        </div>
      </a>
      <button className='btn btn-sm'> Work with me</button>
    </div>
    </div>
  </header>
};

export default Header;
