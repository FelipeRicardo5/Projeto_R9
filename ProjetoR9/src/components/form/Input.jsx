import styles from '../form/Input.module.css'

function Input({name, placeholder, text, type, style}) {
    return(
        <div>
            {/* Se a aplicação se desenvolver vou precisar adicionar mais props de estilização para o back-end */}
            <label htmlFor={name} >{text}</label>
            <input
            name={name}
            placeholder={placeholder}
            type={type}
            style={style}
            />

        </div>
    )
}

export default Input;