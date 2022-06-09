import React from 'react';
import Image from 'next/image'
import styles from './card.module.css';

function Card({img,title}) {
  return (
    <div className={styles.Card}>
        <Image
            src={img}
            alt="projeto"
            width={700}
            height={400}
        />
        <h3>{title}</h3>
    </div>
  );
}

export default Card;