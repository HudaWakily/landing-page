import React from 'react';
import { motion } from 'framer-motion'



function Modal4({ open, onClose }) {
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
            <p className=' text-white p-[60px] text-center lg:pt-[100px] text-[14px]'>Natalia Moroz é ucraniana, formada em línguas pelo Instituto Pedagógico de Línguas Estrangeiros de Donbass. Ela chegou recentemente ao Brasil com seu filho, Maxsymilian, deixando para trás uma região que, nos últimos anos, vem vivenciando os horrores da guerra. Sua jornada até nosso país exigiu coragem, determinação, e contou com a ajuda de familiares, amigos e instituições como Estou Refugiado. Cabeça erguida, Natalia tenta, como mesmo diz, ‘colar os pedaços’ de sua vida e seguir em sua jornada até um tempo mais humano.
</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal4;