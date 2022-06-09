import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import style from './footer.module.css';
import IconInstagram from '../../img/instagram.svg';
import IconYoutube from '../../img/youtube.svg';
import IconWhatsapp from '../../img/whatsapp.svg';

const footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.menu}>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/sobre"><a>SOBRE</a></Link></li>
            <li><Link href="/produtos"><a>PRODUTOS</a></Link></li>
            <li><Link href="/exemplos"><a>EXEMPLOS</a></Link></li>
            <li><Link href="/contato"><a>CONTATO</a></Link></li>
      </ul>
      <div className={style.icons}>
        <Link href="https://www.instagram.com/coderfaster/">
          <a target="_blank"><Image src={IconInstagram} alt="instagram"width={35} height={35}/></a>
        </Link>
        <Link href="https://www.youtube.com/channel/UC9WI_gBIwLc0sF25Mnc2SfQ">
          <a target="_blank"><Image src={IconYoutube} alt="youtube" width={35} height={35}/></a>
        </Link>
        <Link href="https://wa.me/message/6TULBDQ6WVZDO1">
          <a target="_blank"><Image src={IconWhatsapp} alt="whatsapp" width={35}height={35}/></a>
        </Link>
      </div>
      <p>@ 2022 CoderFaster, Todos os direitos reservados.</p>
    </footer>
  )
}

export default footer