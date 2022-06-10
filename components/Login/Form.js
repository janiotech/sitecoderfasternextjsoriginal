import React from 'react';
import Link from 'next/link'
import styles from './Form.module.css';
import userForm from '../../Hooks/useForm';
import InputText from '../Form/InputText/';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '../Form/Button/'

const Form = () => {
  const nome = userForm();
  const email = userForm('email');
  const senha = userForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error,setError] = React.useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [success,setSuccess] = React.useState(false);

  function onSubmite(e){
    e.preventDefault();
  }

  return (
        <div className={styles.containerLogin}>
          <h1>Entrar</h1>
          <form onSubmit={(e)=>{onSubmite(e)}}>
            <InputText label="Email" name="email" type="email" icon={<EmailIcon sx={{color:"#EB445F"}}/>} {...email}/>
            <InputText label="Senha" name="senha" type="password" icon={<LockIcon sx={{color:"#EB445F"}}/>} {...senha}/>
            <Button variant="contained">Entrar</Button>
            <Link href="/perdeu"><a>Esqueceu a senha?</a></Link>
          </form>
        </div>
  )
}

export default Form