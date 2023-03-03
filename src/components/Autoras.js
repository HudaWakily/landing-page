import React, { useState } from 'react';
import Rectangle8 from '../assets/Rectangle 8.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';
import { useRef, useEffect } from 'react';
import Modal3 from '../components/Modal3';
import { motion } from 'framer-motion'




const items = [
  {
    title: 'UCRANIA',
    name: 'NATALIA',
    background: 'bg-image',
  },
  {
    title: 'AFEGNISTAO',
    name: 'MAHBOBA',
    background: 'bg-image1',
  },
  {
    title: 'VENEZUELA',
    name: 'FRANCIS',
    background: 'bg-image2',
  },
  {
    title: 'MOCAMBIQUE',
    name: 'LARA',
    background: 'bg-image3',
  },
]

function Autoras() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)

  }, []);
  return (
    <motion.section ref={carousel} className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-[90px] '>
        <img src={Rectangle8} className=' mr-[190px] w-[70px] lg:w-[120px]' />
        <h1 className=' text-white text-4xl autoras lg:text-5xl'>AUTORAS</h1>
        <img src={Rectangle9} className='ml-[190px] w-[70px] lg:w-[120px]' />
        <p className=' text-center text-white mx-[60px] mt-3 lg:text-left '>ank has gone up by 32,167 positions since 3 months ago. Loremipsum.ir has an estimated worth of US$ 199,103, based on its estimated Ads revenue. Loremipsum.ir receives approximat. Its web server is located in Chicago, Illinois, United States</p>
      </div>

      <motion.div drag="x" dragConstraints={{ right: 110, left: -width }} className='flex justify-center items-center mt-1 gap-6'>
        {items.map((item, index) => <ImageHolder {...item} key={index} />)}
      </motion.div>
    </motion.section>
  )
}

export default Autoras;


function ImageHolder({ background = '', title = "MOCAMBIQUE", name = "LARA" }) {
  const [hover, setHover] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return <div

    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className={`w-[230px] h-[290px] relative mt-2 bg-cover bottom-0 left-0 right-0 lg:mt-[50px]  bg1 ${background}`}>
    {hover && <motion.div
      initial={{
        opacity: 0

      }}

      animate={{
        opacity: 1,
        transition: {
          duration: 0.3
        }

      }} className='w-full h-[100%] text-white break-words absolute text-justify pt-[40px] pl-3 pr-5 text-[14px] right-0 bg'>
      <h1 className=' text-white italic text-2xl'>{title}</h1>
      <h2 className='text-[#2378dc] text-[20px]'>{name}</h2>
      <p>Instituto Estou RefugiadoEstou Refugiado nasceu como um movimento espontâneo da sociedade em 2015. Suas criadoras,Luciana Capobianco e Gisela Rao,tinham a convicção de que a questão do ref... {<a onClick={() => {
        setOpenModal3(true)
      }} className='cursor-pointer'>saiba mais</a>}</p></motion.div>}
    <Modal3 open={openModal3} onClose={() => setOpenModal3(false)} />
    <h1 className=' text-left text-white uppercase italic mt-[220px] ml-3'>{title}</h1>
    <h2 className=' text-[#2378dc] ml-4 uppercase'>{name}</h2>

  </div>
}    