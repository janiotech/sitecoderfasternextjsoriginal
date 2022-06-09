import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import style from './index.module.css';
import Image from 'next/image'
import dashboard from '../img/dashboard-categorias.jpg'
import estrela from '../img/estrela.svg'
import ImagesobreCara from '../img/cara.svg'
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import Card from '../components/Card/';
import { projetos } from './exemplos/index'

function Home() {
  return (
    <>
      <Head>
        <title>CoderFaster - Criação de sites profissionais em aracaju</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="canonical" href="https://coderfaster.com.br/"/>
        <meta http-Equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="coderfaster é uma agência de criação de sites profissionais em Aracaju-SE. Desenvolvemos sites personalizados, entre em contato imediatamente!" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Criação de Sites Profissionais"/>
        <meta property="og:description" content="coderfaster é uma agência de criação de sites profissionais em Aracaju-SE. Desenvolvemos sites personalizados, entre em contato imediatamente!"/>
        <meta property="og:url" content="https://coderfaster.com.br/"/>
        <meta property="og:site_name" content="CoderFaster - Criação de sites profissionais em aracaju"/>
        <meta property="og:image" content="https://coderfaster.com.br/logo192.png"/>
        <meta property="og:image:width" content="769"/>
        <meta property="og:image:height" content="471"/>
        <meta property="og:image:type" content="image/png"/>
      </Head>
      <Link href="https://wa.me/message/6TULBDQ6WVZDO1">
        <a target="_blank">
          <div className={style.ButtonWhats}>
              <WhatsappOutlinedIcon/>
          </div>
        </a>
      </Link>
      <section className={style.home}>
        <div className={style.background}>
          <div className={style.conjTitulo}>
            <h1>Tudo o que você imagina pode ser real</h1>
            <p>Projetamos, desenvolvemos e gerenciamos sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
            <div className={style.buttonsContainer}>
                <Link href="/contato">
                  <button>ORÇAMENTO</button>
                </Link>
                <Link href="/produtos">
                  <button>PRODUTOS</button>
                </Link>
            </div>
          </div>
        </div>
        <div className={style.conjImage}>
            <Image
            src={dashboard}
            alt="prototipo"
            width={0}
            height={0}
            />
        </div>
      </section>
      <Estatisticas/>
      <Sobre/>
      <Etapas/>
      <Exemplos/>
    </>
  )
}

const Estatisticas = ()=>{
  return(
    <>
    <section className={style.ContainerEstatistica}>
      <div className={style.Estatistica}>
        <h3>24hr</h3>
        <p>ATENDIMENTO</p>
      </div>
      <div className={style.Estatistica}>
        <h3>100</h3>
        <p>CLIENTES</p>
      </div>
      <div className={style.Estatistica}>
        <h3>75</h3>
        <p>PROJETOS</p>
      </div>
      <div className={style.Estatistica}>
        <h3>1</h3>
        <p>ANOS</p>
      </div>
    </section>
    </>
  )
}

export const Sobre = ()=>{
  return(
    <section className={style.ContainerSobre}>
      <div className={style.conjSobre}>
          <div className={style.estrelas}>
            <div className={style.estrela}>
              <Image
                src={estrela}
                alt="estrela"
                width={0}
                height={0}
              />
            </div>
            <div className={style.estrela}>
              <Image
                src={estrela}
                alt="estrela"
                width={0}
                height={0}
              />
            </div>
            <div className={style.estrela}>
              <Image
                src={estrela}
                alt="estrela"
                width={0}
                height={0}
              />
            </div>
            <div className={style.estrela}>
              <Image
                src={estrela}
                alt="estrela"
                width={0}
                height={0}
              />
            </div>
            <div className={style.estrela}>
              <Image
                src={estrela}
                alt="estrela"
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className={style.sobre}>
            <h2>Descubra mais sobre a empresa de um homem só</h2>
            <p>Somos uma empresa nova que vem com intuito de transformar o mercado digital, está na hora de você começar a ser visto e faturar no mercado online, aqui na empresa somente uma pessoa é responsável por tudo; meu nome e Jânio Matos e sou desenvolvedor fullstack trabalhando no mercado de criação de site e sistemas a mais de 1 ano, resolvi abrir essa agência não só para criar um site para o cliente, mas sim fazer você faturar com a sua ideia e trazer soluções adaptáveis para o seu negócio.</p>
            <hr/>
          </div>
      </div>
          <div className={style.containerImageSobre}>
            <Image
            src={ImagesobreCara}
            alt="cara"
            id="image"
            layout="fill"
            priority="true"
            width={0}
            height={0}
            className={style.imageSobre}
            />
          </div>
    </section>
  )
}

const Etapas = ()=>{
  return(
    <section className={style.ContainerEtapas}>
      <div className={style.TituloEtapas}>
        <h2>Veja algumas de nossas etapas de criação</h2>
        <p>Essas são algumas de nossas etapas, para mais informações entre em contato</p>
      </div>
      <div className={style.etapas}>
      <div className={style.etapa}>
              <div className={style.subtituloEtapa}>
                <h3>Análise</h3>
                <h3>1</h3>
              </div>
              <p>Analisamos a ideia do cliente para que consigamos entregar um orçamento preciso.</p>
          </div>
          <div className={style.etapa}>
              <div className={style.subtituloEtapa}>
                <h3>Designer</h3>
                <h3>2</h3>
              </div>
              <p>Fazemos toda a elaboração de layout, cores, textos para que fique exatamente como o nosso cliente imaginou.</p>
          </div>
          <div className={style.etapa}>
              <div className={style.subtituloEtapa}>
                <h3>Desenvolvimento</h3>
                <h3>3</h3>
              </div>
              <p>Aqui começamos a pôr a mão no código, vamos fazer a mágica acontecer.</p>
          </div>
          <div className={style.etapa}>
              <div className={style.subtituloEtapa}>
                <h3>Entrega</h3>
                <h3>4</h3>
              </div>
              <p>Entregamos ao cliente com todo o profissionalismo seguindo todos os nossos termos.</p>
          </div>
      </div>
    </section>
  )
}

const Exemplos = ()=>{
  return(
    <section className={style.ContainerExemplos}>
      <div className={style.TituloExemplos}>
          <h2>EXEMPLOS</h2>
      </div>
      <div className={style.exemplos}>
        <Card title={projetos[0].title} img={projetos[0].img}/>
        <Card title={projetos[1].title} img={projetos[1].img}/>
        <Card title={projetos[2].title} img={projetos[2].img}/>
      </div>
      <Link href="/exemplos">
        <button>MAIS</button>
      </Link>
    </section>
  )
}

export default Home;