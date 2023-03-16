import React, { useEffect, useState } from 'react';
import Vector0 from '../assets/Vector.svg';
import Vector1 from '../assets/Vector (1).svg';
import Vector2 from '../assets/Vector (2).svg';
import Vector3 from '../assets/Vector (3).svg';


function Navbar() {
  const [activeLink, setActiveLink] = useState('#home')

  return (
    <div className='fixed justify-center items-center flex top-3 z-50'>
      <div className='flex justify-center items-center space-x-[30px] pl-5 pr-5 cursor-pointer h-12 md:space-x-20 lg:mx-[400px]' id="navbar">
        <Link href="#home" src={Vector0} active={activeLink} onClick={setActiveLink} />
        <Link href="#autoras" src={Vector1} active={activeLink} onClick={setActiveLink} />
        <Link href="#parceiros" src={Vector2} active={activeLink} onClick={setActiveLink} />
        <Link href="#patrocinador" src={Vector3} active={activeLink} onClick={setActiveLink} />
      </div>
    </div>
  )
} 

export default Navbar;


function Link({ src, href, active = '', onClick }) {

  return <a href={href} onClick={() => onClick(href)}>
    <img src={src} />
    {active === href && <div className='h-0.5 my-1 w-full bg-white'></div>}
  </a>
}



