import React, { useState } from 'react';
import Rectangle8 from '../assets/Rectangle 8.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';
import Modal3 from '../components/Modal3';
import natalia from '../assets/natalia.jpg';
import mahboba from '../assets/mahboba.jpg';
import lara from '../assets/lara.jpg';
import francis from '../assets/francis.jpg';
import Modal6 from '../components/Modal6';
import Modal4 from '../components/Modal4';
import Modal5 from '../components/Modal5';
import '../index.css'




function Autoras() {
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [hover, setHover] = useState(false);


  return (
    <section className='flex flex-col justify-center items-center lg:h-screen pt-[10px]'>
      <div className='flex flex-col justify-center items-center mt-[90px] '>
        <img src={Rectangle8} className=' mr-[150px] w-[50px] lg:w-[80px]' />
        <h1 className=' text-white text-2xl autoras lg:text-3xl'>AUTORAS</h1>
        <img src={Rectangle9} className='ml-[150px] w-[50px] lg:w-[80px]' />
        <p className='text-center text-[14px] text-white mx-[60px] mt-3 lg:text-left w-[70%] lg:w-[60%]'>Contar histórias é provavelmente a mais poderosa ferramenta pedagógica. Contar para os outros as histórias do que aconteceu com essas mulheres refugiadas  e como elas se integraram em um novo país, no caso o Brasil, pode provocar nas pessoas um sentimento de solidariedade e de entendimento da importância de receber bem os refugiados.</p>
      </div>
      <div className='flex flex-row space-x-3 justify-between items-center mt-8 big-containe'>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='containe w-screen lg:w-full md:w-full '>
          <Modal4 open={openModal4} onClose={() => setOpenModal4(false)} />
          <img src={natalia} className='w-[250px] h-[300px]'/>
          <div className=' absolute tex'>
            <h1 className='text-white'>UCRANIA</h1>
            <h1 className='text-[#2378dc]'>NATALIA</h1>
          </div>
          <div className='w-[200px] h-[200px] overlay'>
            <h1 className=' text-white ml-5 mt-5'>UCRANIA</h1>
            <h1 className='text-[#2378dc] ml-5'>NATALIA</h1>
            <p className='text'>Natalia Moroz é ucraniana, formada em línguas pelo Instituto Pedagógico de Línguas Estrangeiros de Donbass. Ela chegou recentemente ao Brasil com seu filho,{<a onClick={() => { setOpenModal4(true) }} className='cursor-pointer'>saiba mais</a>} </p>

          </div>
        </div>

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='containe w-screen lg:w-full md:w-full'>
          <Modal3 open={openModal3} onClose={() => setOpenModal3(false)} />
          <img src={mahboba} className='w-[250px] h-[300px]'/>
          <div className=' absolute tex'>
            <h1 className='text-white'>AFEGNISTAO</h1>
            <h1 className='text-[#2378dc]'>MAHBOBA</h1>
          </div>
          <div className='w-[200px] h-[200px] overlay'>
            <h1 className=' text-white ml-5 mt-5'>AFEGNISTAO</h1>
            <h1 className='text-[#2378dc] ml-5'>MAHBOBA</h1>
            <p className='text'>é uma fotógrafa profissional e escritora afegã. Ela faz parte de um grupo de nove afegãos que estão refugiados no Brasil atualmente.{<a onClick={() => { setOpenModal3(true) }} className='cursor-pointer'>saiba mais</a>} </p>

          </div>
        </div>


        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='containe w-screen lg:w-full md:w-full '>
          <Modal5 open={openModal5} onClose={() => setOpenModal5(false)} />
          <img src={francis} className='w-[250px] h-[300px]' />
          <div className=' absolute tex'>
            <h1 className='text-white'>VENEZUELA</h1>
            <h1 className='text-[#2378dc]'>FRANCIS</h1>
          </div>
          <div className='w-[200px] h-[200px] overlay'>
            <h1 className=' text-white ml-5 mt-5'>VENEZUELA</h1>
            <h1 className='text-[#2378dc] ml-5'>FRANCIS</h1>
            <p className='text'>é venezuelana, formada no seu país de origem em Direito na Universidade Santa Maria e Administração no IUTA – PLC.{<a onClick={() => { setOpenModal5(true) }} className='cursor-pointer'>saiba mais</a>} </p>

          </div>
        </div>

        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='containe w-screen lg:w-full md:w-full'>
          <Modal6 open={openModal6} onClose={() => setOpenModal6(false)} />
          <img src={lara} className='w-[250px] h-[300px]' />
          <div className=' absolute tex'>
            <h1 className='text-white'>MOCAMBIQUE</h1>
            <h1 className='text-[#2378dc]'>LARA</h1>
          </div>
          <div className='w-[200px] h-[200px] overlay'>
            <h1 className=' text-white ml-5 mt-5'>MOCAMBIQUE</h1>
            <h1 className='text-[#2378dc] ml-5'>LARA</h1>
            <p className='text'> é moçambicana. Veio para o Brasil, perseguindo um sonho de liberdade e respeito, fugindo da intolerância e da perseguição à comunidade LGBT em seu país.{<a onClick={() => { setOpenModal6(true) }} className='cursor-pointer'>saiba mais</a>} </p>

          </div>
        </div>


      </div>

    </section>
  )
}

export default Autoras;

   