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
            <p className='  text-white p-[30px] text-center pt-[0] lg:pt-[50px] text-[14px]'>O Istituto Europeo di Design - IED/São Paulo e um  grupo de seus alunos, orientado pelo professor Fabio Silveira,
             fez a concepção gráfica do livro, e contribui muito para o produto final do projeto. Ao longo de três meses, o time de alunos realizou encontros semanais para compreender o tema, pesquisar e discutir caminhos visuais para o projeto. Juntos, alunos e refugiados,
               buscaram explorar alternativas no campo do layout das páginas, ilustração, tipografia e acabamentos gráficos.
             O resultado surpreende e dialoga com os textos de realização e superação.</p>
          </div>

        </div>
      </motion.div>

    </aside>
  )
}

export default Modal2;