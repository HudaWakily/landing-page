import React from 'react';
import { motion } from 'framer-motion'



function Modal5({ open, onClose }) {
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
            <p className=' text-white p-[60px] text-center lg:pt-[100px] text-[14px]'>Francis Irina Salazar Arevalo é venezuelana, formada no seu país de origem em Direito na Universidade Santa Maria e Administração no IUTA – PLC. Sua carreira profissional, por mais de 12 anos, foi voltada para a área administrativa e como assessora de empresas. Saiu da Venezuela devido à terrível situação política, econômica e social que assola o seu país e vive no Brasil desde 2018. Atuou como Assessora Jurídica, Gerente e Administradora de Empresas na Venezuela. No Brasil atualmente trabalha como Assistente Administrativa da Segurpro na escola Avenues em São Paulo, além disso faz trabalho voluntário como Locutora na Missão Paz em um programa de rádio em espanhol e ativamente como Embaixadora da ONG Estou Refugiado nos diferentes projetos de apoio aos migrantes e refugiados.  “Conto minha história para que outras pessoas entendam que refazer nossa vida, sem importar a idade, é possível ”, afirma.</p>

          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal5;