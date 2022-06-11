import React from 'react'
import Card from '../../components/Card/'
import styles from './exemplos.module.css';
//imagens
import projetoOne from '../../img/Exemplos/projetoOne.jpg'
import projetoTwo from '../../img/Exemplos/projetoTwo.jpg'
import projetoThree from '../../img/Exemplos/projetoThree.jpg'

export const projetos = [
    {
      title:"Landding Page #1",
      img: projetoOne
    },
    {
      title:"Blog",
      img: projetoTwo
    },
    {
      title:"Landding Page #2",
      img: projetoThree
    },
]

const Exemplos = () => {
  return (
    <section className={styles.containerExemplos}>
        {projetos.map((item,index)=>(
            <Card key={index} title={item.title} img={item.img}/>
        ))}
    </section>
  )
}

export default Exemplos;