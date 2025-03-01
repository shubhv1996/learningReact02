import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between max-h-18 m-2 align-middle'>
      <img
        src="https://th.bing.com/th/id/OIP.BzkWp1CTb_B1ryyUhOivVgHaEK?rs=1&pid=ImgDetMain"
        alt="logo"
        className='w-20 rounded'
      />

      <ul className='flex gap-8 cursor-pointer p-1 items-center'>
        <li className=' hover:bg-sky-300 p-1 rounded'>Home</li>
        <li className=' hover:bg-sky-300 p-1 rounded'>About Us</li>
        <li className=' hover:bg-sky-300 p-1 rounded'>Contact Us</li>
      </ul>
    </div>
  );
}

export default Navbar
