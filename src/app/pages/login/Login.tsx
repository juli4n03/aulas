import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(()=> {
        return email.length * 1000;
    },[email.length]); 

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)

    if (inputPasswordRef.current !== null) {
        inputPasswordRef.current.focus()
    }
},[email,password]);


    return(
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label = "Email"
                    value = {email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    />
                 <InputLogin
                    label = "Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                    />
               

               {/*<label>
                    <span>Senha</span>
                    <input ref={inputPasswordRef}
                           type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </label>*/}

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}


