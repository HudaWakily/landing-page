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
        <p className=' text-center text-white mt-[40px] lg:mx-[250px] text-[11px] lg:text-[14px] lg:w-[50%] w-[80%] '>O Istituto Europeo di Design - IED/São Paulo faz parte de uma rede internacional que une educação, design, moda e comunicação, e contribui ativamente com a formação de profissionais capazes de navegar pelos desafios do presente, sempre com o olhar no futuro. Não é surpreendente, portanto, que um grupo de seus alunos, orientado pelo professor Fabio Silveira, tenha se apaixonado por este primeiro livro da Coleção Estou Refugiado e resolvido desenvolver um tratamento visual capaz de traduzir toda a emoção contida nas histórias reais e impactantes das personagens, mulheres fortes, decididas e em situação de refúgio. <br />
          Ao longo de três meses, o time de design realizou encontros semanais para compreender o tema, pesquisar e discutir caminhos visuais para o projeto. Juntos, seus integrantes buscaram explorar alternativas no campo do layout das páginas, ilustração, tipografia e acabamentos gráficos. O resultado surpreende e dialoga com os textos de realização e superação.
          Equipe de design – IED. Coordenação do projeto: Eliane Weizmann. Professor Orientador
          e Direção de Arte: Fabio Silveira. Time de Design: Beatriz Unzelte, Bruna Piteri, Gabriela Michelin, Manuela Pellegrini, Milena Yuki Watanabe, Renan Corazza
        </p>
        <div className='flex flex-row gap-[80px] lg:mt-[10px]'>

          <motion.img src={image5} width='90px' className='lg:w-[100px]'
            onClick={() => {
              setOpenModal(true)
            }} />

          <Modal open={openModal} onClose={() => setOpenModal(false)} />


          <img src={Art} width='90px' className='lg:w-[150px]' onClick={() => {
            setOpenModal2(true)
          }} />

          <Modal2 open={openModal2} onClose={() => setOpenModal2(false)} />


        </div>


      </div>

    </section>
  )
}

export default Parceiros;