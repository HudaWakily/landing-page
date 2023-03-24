import React, { useState } from 'react';
import image5 from '../assets/image 5.svg';
import { motion, AnimatePresence } from 'framer-motion'



function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <aside className=' w-screen h-screen fixed top-0 left-0'>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0

            }}

            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }

            }}


            onClick={onClose} className='over'>
            <motion.div
              className=' w-[400px] h-[500px] mt-[-30px] lg:w-[700px] modalContainer '>
              <button onClick={onClose} className="text-white pl-3 font-bold">x</button>
              <div className=' flex flex-col justify-center items-center'>
                <img src={image5} />
                <p className=' text-white p-[30px] text-center pt-[0] lg:pt-[50px] text-[14px]'>O Estou Refugiado nasceu como um movimento espontâneo da sociedade em 2015, dentro de uma empresa de comunicação digital, cuja sócia se engajou na causa dos refugiados. Sua fundadora tinha a convicção de que a questão do refúgio estava envolta em uma nuvem de desinformação e preconceito e que era preciso tomar uma atitude para mudar esse cenário, dando voz e visibilidade a essas pessoas que precisavam muito de apoio e de compreensão.
Em março de 2019, o Instituto Estou Refugiado” tornou-se uma Organização Não Governamental. Com a colaboração de voluntários, profissionais de Recursos Humanos, psicólogos, comunicadores e com direção de Luciana M G Capobianco, a ONG tem como um dos seus focos principais a inserção de refugiados no mercado de trabalho.
</p>

              </div>

            </motion.div>
          </motion.div>



        )}


      </AnimatePresence>



    </aside>
  )
}

export default Modal;