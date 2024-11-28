import React from 'react';
import styles from './LandingPage.module.css';

import LogoReacao from '../../assets/reacao.png'
import User from '../../assets/password.png'


function LandingPage() {
    return (
        <div>
            <nav className={styles.navbar}>
                <img src={LogoReacao} alt='LogoReacao'/>
                <a className={styles.navbar_p} >CONHEÇA A<br/>
                RE9AÇÃO</a>
                <a className={styles.navbar_p} >PERGUNTAS<br/>
                FREQUENTES</a>
                <a className={styles.navbar_p} >BLOG DA<br/>
                RE9AÇÃO</a>
                <div style={{display:'flex', alignItems: 'center', textAlign: 'left'}} >
                    <img style={{width: '50px'}} src={User} alt='user'/>
                    <p style={{color: 'rgb(0, 0, 0)'}} >SEJA BEM VINDO!<br/>
                    <a style={{color: '#EF6B01'}} >Entre</a> ou <a style={{color: '#EF6B01'}} >Cadastre-se</a></p>
                </div>
            </nav>

        </div>
    );
}

export default LandingPage;
