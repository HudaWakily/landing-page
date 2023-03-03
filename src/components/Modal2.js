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
        onClick={onClose} className='overlay '>
        <div className=' w-[450px] h-[540px] mt-[-30px] lg:w-[700px] modalContainer '>
          <button onClick={onClose} className="text-white pl-3 font-bold">x</button>
          <div className=' flex flex-col justify-center items-center'>
            <img src={Art} style={{ width: 150 }} />
            <p className=' text-white p-[30px] text-center pt-[0] lg:pt-[50px]'>O Instituto Estou Refugiado
              Estou Refugiado nasceu como um movimento espontâneo da sociedade em 2015. Suas criadoras, Luciana Capobianco e Gisela Rao, tinham a convicção de que a questão do refúgio estava envolta em uma densa nuvem de desinformação e preconceito. Era preciso tomar uma atitude para mudar esse cenário, dando voz, visibilidade e dignidade a esses seres humanos que precisam muito do nosso apoio e da nossa compreensão.
              Em março de 2019, o Instituto Estou Refugiado” recebeu reconhecimento formal do governo brasileiro, tornando-se uma Organização Não Governamental. Com a colaboração de voluntários, profissionais de Recursos Humanos, psicólogos, comunicadores e com direção de Luciana M G Capobianco, a ONG tem como um dos seus focos principais a inserção de refugiados no mercado de trabalho.</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal2;