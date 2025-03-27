import { useState, useContext, use } from "react";
import { login } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

function loginPage(){
    const { loginUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try{
            const token = await login(username, password);
            loginUser(token);
            alert("Inicio de sesion exitoso");
        } catch (error){
            alert("Error al iniciar sesion")
        }
    };

    return(
        <div>
            <h2>Inciar sesion</h2>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;