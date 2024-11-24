import styles from '../pages/Login.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton.jsx'

// ---------------IMAGES------------------
import logoReacao from '../../assets/reacao.png'
import logoGoogle from '../../assets/logoGoogle.png'
import logoFacebook from '../../assets/logoFacebook.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import ImgMainContainer from '../../assets/teste.png'

function Login() {
    return (
        <div className={styles.container} >
            <div className={styles.loginForm} >

            <img src={logoReacao} alt='LogoReacao' />
            <p>Acesse com:</p>
            <div>
            <img src={logoGoogle} className={styles.google} alt='logoGoogle'/>
            <img src={logoFacebook} className={styles.facebook} alt='logoFacebook'/>
            <img src={logoLinkedin} className={styles.linkedin} alt='logoLinkedin'/>

            </div>
            <div className={styles.mainLine} >

            <div className={styles.line} ></div>
                <p>ou</p>
            <div className={styles.line} ></div>
            
            </div>

            <Input 
          
            placeholder={"Insira seu e-mail"}
            />
            <Input 
           
            placeholder={"Insira sua senha"}
            />

             <SubmitButton 
             text={"ACESSAR"}
             />

            <p className={styles.senha} >Esqueceu sua senha? <a href='#' >Clique aqui.</a>
            <br/>Ainda não possui cadastro? <a href='#' >Cadastre-se!</a>
            </p>
            

            </div>

           

            <div className={styles.carousel} >
                <img className={styles.ImgMainContainer} src={ImgMainContainer} />
            </div>

        </div>

    )
}

export default Login;

