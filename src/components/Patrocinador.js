import React from 'react'
import Ellipse2 from '../assets/Ellipse 2.svg';
import Rectangle8 from '../assets/Rectangle 8.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';


function Patrocinador() {
  return (
    <section className=''>
      <div className='flex flex-col justify-center items-center'>
        <img src={Rectangle8} className=' mr-[250px] w-[70px] lg:w-[120px]' />
        <h1 className='text-white text-4xl lg:text-5xl'>PATROCINADOR</h1>
        <img src={Rectangle9} className='ml-[250px] w-[70px] lg:w-[120px] ' />


        <div className='lg:flex flex-row mt-10 gap-[100px]  '>
          <img src={Ellipse2} className='ml-[110px] lg:ml-0' />
          <p className='text-[#fff] text-center lg:text-left w-[400px] float-right font-bold '>FERNANDO O Instituto Estou Refugiado
            Estou Refugiado nasceu como um movimento espontâneo da sociedade em 2015. Suas criadoras, Luciana Capobianco e Gisela Rao, tinham a convicção de que a questão do ref</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button className='text-white p-3 lg:mt-10' id='btn'>COMPRE AQUI</button>
          <button className='p-4 w-[700px] mt-3 text-white lg:w-[500px] mb-0 btn1 '>© estou refugiado ONG, 2023
            <br />Powered By: Tomorrow Byte
          </button>
        </div>

      </div>
    </section>
  )
}

export default Patrocinador;