import React, { useState } from 'react'
import Rectangle8 from '../assets/Rectangle 8.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';
import Art from '../assets/Art.svg';
import image5 from '../assets/image 5.svg';
import Modal from './Modal';
import Modal2 from './Modal2';
import { motion } from 'framer-motion'



function Parceiros() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <section className='flex flex-col justify-center items-center lg:h-screen h-[100vh] pt-[120px]'>
      <div className=' flex flex-col justify-center items-center'>
        <img src={Rectangle8} className=' mr-[200px] w-[50px] lg:w-[80px]' />
        <h1 className=' text-white text-2xl lg:text-3xl'>PARCEIROS</h1>
        <img src={Rectangle9} className='ml-[200px] w-[50px] lg:w-[80px]' />
        <p className=' text-center text-white mt-[50px] lg:mx-[250px] text-[11px] lg:text-[14px] lg:w-[50%] w-[80%]  '>Em 2015, idealizou - junto com Luciana Capobianco - o projeto Estou Refugiado. É voluntária na Cruz Vermelha Brasileira (SJC) e palestrante TEDx. Tem 6 livros publicados.
t(irar essa parte)
        </p>
        <div className='flex flex-row gap-[80px] lg:mt-[50px]'>

          <motion.img src={image5}
            onClick={() => {
              setOpenModal(true)
            }} />

          <Modal open={openModal} onClose={() => setOpenModal(false)} />


          <img src={Art} style={{ width: 150 }} onClick={() => {
            setOpenModal2(true)
          }} />

          <Modal2 open={openModal2} onClose={() => setOpenModal2(false)} />


        </div>


      </div>

    </section>
  )
}

export default Parceiros;