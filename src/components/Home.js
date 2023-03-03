import React from 'react';
import book from "../assets/book.png";
import image5 from '../assets/image 5.svg';
import Vector4 from '../assets/Vector 4.svg';
import Vector5 from '../assets/Vector 5.svg';
import Vector6 from '../assets/Vector 6.svg'
import Navbar from './Navbar';



function Home() {
  return (
    <section>
      <Navbar />
      <div className='flex flex-col justify-center items-center container md:flex-row-reverse lg:flex-row-reverse'>
        <div className='w-[290px] lg:w-[350px] mt-[100px]'>
          <img src={book} />
        </div>

        <div className=' flex flex-col justify-center items-center md:mt-[100px] '>
          <div className='wrapper'>
            <h1 className=' text-4xl text-white md:ml-[100px] mt-4 refugee'>
              <span className='ml-[50px] lg:ml-[90px]'>I AM REFUGEE</span>
              <span className='ml-[100px] lg:ml-[155px]' >من مهاجر هستم</span>
              <span className='ml-[150px] lg:ml-[250px]' >أنا لاجئ</span>
              <span className='ml-[20px] lg:mr-[50px]'>ESTOU REFUGIADO</span>
              <span className='ml-[70px] lg:ml-[150px]' >Я БЕЖЕНЦ</span>
            </h1>
          </div>

          <p className=' w-[400px] text-center text-white md:text-right lg:text-right'>A Coleção Estou Refugiado nasceu para contar histórias sobre a luta, as dores e as alegrias das pessoas em situação de refúgio no Brasil. O objetivo é apresentar principalmente a crianças e adolescentes brasileiros – a distribuição dos livros da Coleção privilegia alunos de escolas públicas e privadas – a realidade dessas pessoas que vieram<br /><br /> para o nosso país em busca de mais qualidade de vida, mais liberdade, e dignidade.</p>
          <div className=' w-[80px] flex flex-col justify-center items-center z-50 pl-0 pr-0 py-4 space-y-4 fixed top-[200px] left-0 ml-[-15px] lg:top-[200px]' id='vector'>
            <img src={Vector4} />
            <img src={Vector6} />
            <img src={Vector5} />

          </div>

          <div className=' flex flex-row space-x-[110px] ml-[55px] mt-[30px]'>
            <img src={image5} style={{ width: 100 }} />
            <button className='text-white p-3' id='btn'>COMPRE AQUI</button>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Home;

