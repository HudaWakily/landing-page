import React from 'react';
import Art from '../assets/Art.svg';
import { motion } from 'framer-motion'



function Modal2({ open, onClose }) {
  if (!open) return null;

  return (
    <aside className=' w-screen h-screen fixed top-0 left-0'>
      <motion.div initial={{
        opacity: 0

      }}

        animate={{
          opacity: 1,
          transition: {
            duration: 0.3
          }

        }}
        onClick={onClose} className='over '>
        <div className=' w-[400px] h-[500px] mt-[-30px] lg:w-[700px] modalContainer '>
          <button onClick={onClose} className="text-white pl-3 font-bold">x</button>
          <div className=' flex flex-col justify-center items-center'>
            <img src={Art} style={{ width: 150 }} />
            <p className=' text-white p-[30px] text-center pt-[0] lg:pt-[50px] text-[10px]'>O Istituto Europeo di Design foi fundado em 1966, na Itália, com a premissa de ser uma escola de Design inovadora.
Para atingir esse objetivo, Francesco Morelli, idealizador e fundador do Instituto, desenhou um plano de ensino capaz de unir teoria e prática no dia a dia das atividades acadêmicas de seus estudantes a partir de um conjunto de valores que relacionam o saber, saber fazer e ser.
Em nossos quase 60 anos de atividade, contribuímos ativamente para a formação de mais de 150 mil profissionais de cerca de 100 países, dedicados ao desenvolvimento cultural, criativo, e de habilidades críticas indispensáveis para a formação de profissionais aptos a navegar nos desafios do presente com o olhar no futuro.
Como parte dos desafios de uma escola inovadora, desenvolvemos programas de estágio em parceria com grandes marcas de mercado; criamos a Comunidade Alumni para nossos ex-alunos, e estimulamos a possibilidade de experiências internacionais entre todas as sedes do IED. Os programas de intercâmbio e vivências internacionais integram competências interculturais ao aprendizado do aluno, incentivando uma perspectiva global de carreira e mercado, além de conectar o IED Brasil às nove sedes do Instituto na Europa.
Hoje temos 12 sedes: na Itália, em Milão, Como, Roma, Florença, Veneza, Turim e Cagliari; na Espanha, Madri, Barcelona e Bilbao; e no Brasil, em São Paulo e Rio de Janeiro – onde contribuímos para difundir e fortalecer a cultura do Design desde 2005, promovendo atividades criativas com grandes marcas, aulas abertas com profissionais renomados e a participação em eventos importantes, como o DW! São Paulo Design Weekend, Italian Design Day e Fashion Revolution.</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal2;