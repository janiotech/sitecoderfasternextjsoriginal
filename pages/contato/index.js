import React from 'react'
import Link from 'next/link'
import styles from './contato.module.css';
import userForm from '../../Hooks/useForm';
import Button from '../../components/Form/Button'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InputText from '../../components/Form/InputText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

const contato = () => {
  const nome = userForm();
  const email = userForm('email');
  const telefone = userForm('telefone');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error,setError] = React.useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [success,setSuccess] = React.useState(false);

  async function handleSubmite(event){
    event.preventDefault();
    if(nome.validate() && email.validate(), telefone.validate()){
      const send = await sendEmail({
        nome:nome.value,
        email: email.value,
        telefone: telefone.value,
      });
    }
  }  

  async function sendEmail(obj){
    emailjs.send('service_gkixlhc', 'template_rw7pv3x', obj, 'MP3onkFFK2btHeEhC')
    .then((result) => {
        if(result.status == 200) return setSuccess(true);
        setError(true);
    }, (error) => {
        setSucces(false);
        setError(true);
    });
  }



  return (
    <section className={styles.containerContact}>
      <div className={styles.title}>
        <h1>Entrar em contato</h1>
        <p>entre em contato conosco para um orçamento</p>
      </div>
      <div className={styles.infos}>
          <div className={styles.info}>
            <AddLocationIcon/>
            <p>Aracaju - SE</p>
          </div>
          <div className={styles.info}>
            <LocalPhoneIcon/>
            <p>(79) 98831-7237</p>
          </div>
          <div className={styles.info}>
            <EmailIcon/>
            <p>coderfaster@gmail.com</p>
          </div>
      </div>
      <form onSubmit={handleSubmite} className={styles.form}>
        <h3>Formulário</h3>
        <br/>
        {success && <Alert variant="outlined" severity="success">Email enviado com sucesso, logo entraremos em contato!</Alert>}
        {error && <Alert variant="outlined" severity="error">Ops ouve algum error tente mais tarde!</Alert>}
        <InputText label="Nome" name="nome" icon={<AccountCircle sx={{color:"#EB445F"}} />} {...nome}/>
        <InputText label="Email" name="email" icon={<EmailIcon sx={{color:"#EB445F"}}/>} {...email}/>
        <InputText label="Telefone" name="telefone" icon={<LocalPhoneIcon sx={{color:"#EB445F"}}/>} {...telefone}/>
        <Button variant="contained">Enviar</Button>
      </form>
    </section>
  )
}

export default contato