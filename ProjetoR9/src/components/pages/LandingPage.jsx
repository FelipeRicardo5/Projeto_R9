import React from 'react';
import styles from './LandingPage.module.css';
import SubmitButton from '../../components/form/SubmitButton'

import LogoReacao from '../../assets/reacao.png'
import User from '../../assets/password.png'


function LandingPage() {
    return (
        <div>
            <nav className={styles.navbar}>
                <img src={LogoReacao} alt='LogoReacao'/>
                <a href='#' className={styles.navbar_p} >CONHEÇA A<br/>
                RE9AÇÃO</a>
                <a href='#' className={styles.navbar_p} >PERGUNTAS<br/>
                FREQUENTES</a>
                <a href='#' className={styles.navbar_p} >BLOG DA<br/>
                RE9AÇÃO</a>
                <div style={{display:'flex', alignItems: 'center', textAlign: 'left'}} >
                    <img style={{width: '50px'}} src={User} alt='user'/>
                    <p style={{color: 'rgb(0, 0, 0)'}} >SEJA BEM VINDO!<br/>
                    <a href='#' style={{color: '#EF6B01'}} >Entre</a> ou <a href='#' style={{color: '#EF6B01'}} >Cadastre-se</a></p>
                </div>
            </nav>
            <main style={{display: 'flex'}} >

                <div className={styles.campText} >
                    <h1>
                    Conectando<br/> talentos a<br/> desafios<br/> reais do<br/> mercado
                    </h1>
                    <h3>
                    Nossa plataforma une alunos de graduação a empresas, criando projetos inovadores e experiências de trabalho no mundo real.
                    </h3>
                    <SubmitButton 
                    text={'Saiba mais'}
                    />
                </div>
                <div className={styles.campImg} >
                    <img src={User} />
                </div>

            </main>

        </div>
    );
}

export default LandingPage;
