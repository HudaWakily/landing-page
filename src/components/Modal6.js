import React from 'react';
import { motion } from 'framer-motion'



function Modal6({ open, onClose }) {
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
          <button onClick={onClose} className="text-white pl-3 font-bold">x</button>
          <div className=' flex flex-col justify-center items-center'>
            <p className=' text-white p-[60px] text-center lg:pt-[100px] text-[14px]'>Lara Lopes é moçambicana. Veio para o Brasil, perseguindo um sonho de liberdade e respeito, fugindo da intolerância e da perseguição à comunidade LGBT em seu país. É interessante o fato de haver escolhido nosso país por causa de uma cena em uma novela brasileira, onde havia um beijo gay. Aqui, porém, logo descobriu que nada seria tão fácil. Mas teve força para enfrentar os desafios, conseguiu empregos – entre eles, durante algum tempo, o de assistente de recursos humanos no Instituto Estou Refugiado – formou-se em tecnologia e criou seu próprio empreendimento: é proprietária atualmente de uma oficina mecânica. 
</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal6;