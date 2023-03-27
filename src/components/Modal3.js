import React from 'react';
import { motion } from 'framer-motion'



function Modal3({ open, onClose }) {
  if (!open) return null;

  return (
    <aside className=' w-screen h-screen fixed top-0 left-0 z-50'>
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
        <div className=' w-[450px] h-[540px] mt-[-30px] lg:w-[700px] modalContainer '>
          <button onClick={onClose} className="text-white pl-3 font-bold fixed">x</button>
          <div className=' flex flex-col justify-center items-center'>
            <p className=' text-white p-[60px] text-center lg:pt-[100px] text-[11px] ml-[30px] mr-[30px]'>é uma fotógrafa profissional e escritora afegã. Ela faz parte de um grupo de nove afegãos que estão refugiados no Brasil atualmente. Dos nove, oito são fotógrafos e o nono é o marido de Mahboba, Abdullah Ramesh. O grupo se conheceu em um programa de treinamento promovido pela agência ITC em parceria com a ACNUR que teve a duração de três anos. Além do amor pela fotografia, eles têm em comum o fato de serem todos jovens – nenhum tem mais de 25 anos – e pertencerem a uma minoria étnica, a comunidade xiita Hazara, perseguida pelo Talibã e pelo Estado Islâmico Korashan (ISIS-K), que vê os xiitas como heréticos. Some-se a isso o fato de fotógrafos e jornalistas serem rotulados como terroristas no Afeganistão e 6 pessoas do grupo serem mulheres, alvo de uma misoginia que se torna a cada dia mais violenta, e perceberemos como a presença deles no seu país de origem significava risco iminente de vida. Uma grande mobilização internacional foi criada para retirar o grupo do Afeganistão. A iniciativa foi liderada por Sabrina Herzog, da ITC, e contou com o apoio de instituições renomadas como a ERE Foundation (Alemanha), Compassiva (Brasil) e Estou Refugiado, e dos renomados fotógrafos Farzana Wahidy, Jamie Hawkesworth, Elaine Constantine e Stefan Dotter. O Brasil foi o país que manifestou interesse em receber o grupo, graças principalmente ao esforço da Cônsul-Geral do Brasil em Genebra, Sra. Susan Kleebank.</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal3;