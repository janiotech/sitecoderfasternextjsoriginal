/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import style from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../img/LogoMarcaNova.svg';

const navbar = () => {
  const router = useRouter()
  const [menu,setMenu] = useState(false);
  const Elemento = React.useRef();
  const [topElement,setTopElement] = React.useState();;
  
  React.useEffect(()=>{
    setMenu(false);
    window.addEventListener('scroll',(e)=>{
      if(window.scrollY > 421.1111145019531) setMenu(false);
    })
  },[topElement,router])

  return (
    <header className={style.header} ref={Elemento}>
        <Image
        src={Logo}
        alt="Logo coderfaster"
        width={50}
        height={50}
        />
        <div onClick={()=>{setMenu(!menu)}} className={menu ? `${style.ContainerbuttonMenu + " "  + style.ativo}` : `${style.ContainerbuttonMenu}`}>
          <button></button>
          <button></button> 
          <button></button> 
        </div>
        <nav className={menu ? `${style.menuMobile + " "  + style.ativo}` : `${style.menuMobile}`}>
          <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/sobre"><a>SOBRE</a></Link></li>
            <li><Link href="/produtos"><a>PRODUTOS</a></Link></li>
            <li><Link href="/exemplos"><a>EXEMPLOS</a></Link></li>
            <li><Link href="/contato"><a>CONTATO</a></Link></li>
            <li><Link href="/login"><a>LOGIN</a></Link></li>
          </ul>
        </nav>
        <nav className={style.menu}>
          <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/sobre"><a>SOBRE</a></Link></li>
            <li><Link href="/produtos"><a>PRODUTOS</a></Link></li>
            <li><Link href="/exemplos"><a>EXEMPLOS</a></Link></li>
            <li><Link href="/contato"><a>CONTATO</a></Link></li>
          </ul>
        </nav>
        <div className={style.login}>
          <p>Já e cliente?</p>
          <Link href="/login">
            <button>LOGIN</button>
          </Link>
        </div>
    </header>
  )
}

export default navbar