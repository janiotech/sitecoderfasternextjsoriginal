import React from 'react'
import styles from './login.module.css';
import FormLogin from '../../components/Login/Form';

const index = () => {
  return (
    <section className={styles.containerLogin}>
        <FormLogin/>
    </section>
  )
}

export default index