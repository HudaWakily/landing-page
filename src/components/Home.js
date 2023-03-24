import React from 'react';
import book from "../assets/book.png";
import image5 from '../assets/image 5.svg';
import Vector4 from '../assets/Vector 4.svg';
import Vector5 from '../assets/Vector 5.svg';
import Vector6 from '../assets/Vector 6.svg'
import Navbar from './Navbar';



function Home() {
  return (
    <section className='flex flex-col justify-center items-center lg:h-screen landing-intro'>
      <Navbar />
      <div className='flex flex-col justify-center items-center container md:flex-row-reverse lg:flex-row-reverse '>
        <div className='w-[260px] lg:w-[350px] lg:mt-[80px] mt-[100px]'>
          <img src={book} />
        </div>

        <div className=' flex flex-col justify-center items-center md:mt-[100px] '>
          <div className='wrapper'>
            <h1 className=' text-3xl text-white md:ml-[100px] mt-4 refugee'>
              <span className='ml-[50px] lg:ml-[90px]'>I AM REFUGEE</span>
              <span className='ml-[100px] lg:ml-[155px]' >من مهاجر هستم</span>
              <span className='ml-[130px] lg:ml-[250px]' >أنا لاجئ</span>
              <span className='ml-[60px] lg:mr-[50px]'>ESTOU REFUGIADO</span>
              <span className='ml-[100px] lg:ml-[150px]' >Я біженець</span>
            </h1>
          </div>

          <p className=' w-[430px] text-center text-[14px] text-white md:text-right lg:text-right'>A Coleção Estou Refugiado nasceu para contar histórias sobre a luta, as dores e as alegrias das pessoas em situação de refúgio no Brasil. O objetivo é apresentar principalmente a crianças e adolescentes brasileiros – a distribuição dos livros da Coleção privilegia alunos de escolas públicas e privadas – a realidade dessas pessoas que vieram para o nosso país em busca de mais qualidade de vida, mais liberdade, e dignidade.<br /><br />Para o primeiro livro da Coleção, foram escolhidas histórias de refugiadas.</p>
         
          <div className=' flex flex-row gap-10 mt-[100px]'>
            <img src={image5} style={{ width: 100 }} />
            <button  className='text-white p-3' id='btn' ><a href='https://estourefugiado.org.br/kits-de-apoio/'> COMPRE AQUI </a></button>

          </div>
        </div>

      </div>
      <div className='w-[50px] flex flex-col absolute z-50 lg:mt-[-80px] mt-[-300px] ' id='vector'>
            <a href='https://www.instagram.com/estourefugiado/'> <img src={Vector4} className="m-[5px]"  /> </a>
            <a href='https://www.facebook.com/estourefugiado'> <img src={Vector6} className="m-[5px]" /> </a>
            <a href='https://www.linkedin.com/company/estourefugiado/'><img src={Vector5} className="m-[5px]" /> </a> 
          </div>
    </section>

  )
}

export default Home;

