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
    <section className='flex flex-col justify-center items-center'>
      <div className=' flex flex-col justify-center items-center mt-[140px] lg:mt-[150px] '>
        <img src={Rectangle8} className=' mr-[200px] w-[70px] lg:w-[120px]' />
        <h1 className=' text-white text-4xl lg:text-5xl'>PARCEIROS</h1>
        <img src={Rectangle9} className='ml-[200px] w-[70px] lg:w-[120px]' />
        <p className=' text-center text-white mt-[40px] font-bold lg:mx-[250px] '><var className=' font-thin'>O projeto</var> O Instituto Estou Refugiado<br />
          Estou Refugiado nasceu como um movimento espontâneo da sociedade em 2015. Suas criadoras, Luciana Capobianco e Gisela Rao, tinham a convicção de que a questão do refO Instituto Estou <br /> Refugiado<br />
          Estou Refugiado nasceu como um movimento espontâneo da sociedade em 2015. Suas criadoras, Luciana Capobianco e Gisela Rao, tinham a convicção de que a questão do ref: a participação do IEDI xxxxxxx</p>
        <div className='flex flex-row gap-[80px] lg:mt-[60px]'>

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