import React from 'react'
import styles from './sobre.module.css';
import { Sobre } from '../index';
import { style } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SobrePage = () => {
  return (
    <section className={styles.sobre}>
        <AccordionList/>
        <div className={styles.fraseContainer}>
          <p>&quot;o seu sorriso é a nossa meta. agradecemos pela confiança em nossa empresa&quot;</p>
        </div>
        <Sobre/>
    </section>
  )
}

const AccordionList = () => {
  return (
    <div className={styles.accordions}>
      <div className={styles.subcontainer}>
        <h1>Dúvidas</h1>
      </div>
      {doubt.map((item,index)=>(
        <div key={index} className={styles.subcontainer}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className={styles.titleAccordions}>{item.title}</p>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  )
}

const doubt = [
  {
    title: `Meu site aparecerá no Google?​`,
    description: `Sim, está incluso em nosso trabalho de 
    desenvolvimento de sites cadastrar seu site no Google e 
    otimizar ele de acordo com as boas práticas de SEO.`
  },
  {
    title: `O que é preciso para ter um site na internet?`,
    description: `Você precisará de um domínio (URL do site), 
    um servidor de hospedagem, e o site em si desenvolvido. 
    Te ajudaremos em todas as etapas e te acompanharemos 
    durante todo o processo de criação de site.`
  },
  {
    title: `Como é o processo de criação de um site?`,
    description: `O processo para criar um site é simples,
    porém tem que ser iniciado da maneira certa para ter um bom resultado.`
  }
]

export default SobrePage;