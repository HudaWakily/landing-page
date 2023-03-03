import React, { useEffect, useState } from 'react';
import Vector0 from '../assets/Vector.svg';
import Vector1 from '../assets/Vector (1).png';
import Vector2 from '../assets/Vector (2).png';
import Vector3 from '../assets/Vector (3).png';
import {motion} from 'framer-motion';


function Navbar() {
  const [activeLink, setActiveLink] = useState('#home')

  return (
    <motion.div className=' fixed w-full text-center flex items-center justify-center'>
      <div className=' mx-auto md:max-w-xl flex justify-center items-center  space-x-14  w-full px-4 cursor-pointer h-12 my-4 md:space-x-20 lg:mx-[400px]  ' id="navbar">
        <Link href="#home" src={Vector0} active={activeLink} onClick={setActiveLink} className="link" />
        <Link href="#autoras" src={Vector1} active={activeLink} onClick={setActiveLink} />
        <Link href="#parceiros" src={Vector2} active={activeLink} onClick={setActiveLink} />
        <Link href="#patrocinador" src={Vector3} active={activeLink} onClick={setActiveLink} />
      </div>
    </motion.div>
  )
}

export default Navbar;


function Link({ src, href, active = '', onClick }) {

  return <a href={href} onClick={() => onClick(href)}>
    <img src={src} />
    {active === href && <div className='h-0.5 my-1 w-full bg-white'></div>}
  </a>
}



