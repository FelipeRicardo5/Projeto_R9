import styles from '../pages/Login.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton.jsx'
import { useState } from 'react'

// ---------------IMAGES------------------
import logoReacao from '../../assets/reacao.png'
import logoGoogle from '../../assets/logoGoogle.png'
import logoFacebook from '../../assets/logoFacebook.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import ImgMainContainer from '../../assets/teste.png'
import Password from '../../assets/password.png'

function Login() {
    

    const [showPassword, setShowPassword] = useState(false); // Usando o useState para mudar o estado do input nesse caso o type
  
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // De maneira resumida eu alterno o valor de showPassword
    }

    return (
        <div className={styles.container} >
            <div className={styles.loginForm} >

            <img src={logoReacao} alt='LogoReacao' />
            <p>Acesse com:</p>
            <div>
            <a href='#' ><img src={logoGoogle} className={styles.google} alt='logoGoogle'/></a>
            <a href='#' ><img src={logoFacebook} className={styles.facebook} alt='logoFacebook'/></a>
            <a href='#' ><img src={logoLinkedin} className={styles.linkedin} alt='logoLinkedin'/></a>

            </div>
            <div className={styles.mainLine} >

            <div className={styles.line} ></div>
                <p>ou</p>
            <div className={styles.line} ></div>
            
            </div>

            <Input 
          
            placeholder={"Insira seu e-mail"}
            />
            <div style={{display: "flex", alignItems: "center"}}>
                    <Input 
                        style={{width: "27vh"}}
                        type={showPassword ? "text" : "password"}
                        placeholder={"Insira sua senha"}
                    />

                    <button onClick={togglePasswordVisibility} style={{backgroundColor: 'white', padding: "0px", outline: "none", border: "none"}} >
                        <img src={Password} alt="password" 
                        style={{width: "20px"}}
                        />
                    </button>

                </div>
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

