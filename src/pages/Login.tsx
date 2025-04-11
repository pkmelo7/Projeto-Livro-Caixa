// pages/Login.tsx

export function Login(){
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <p className="login-p">E-mail</p>
            <input className="login-input" type="text" placeholder="E-mail"/>
            <p className="login-p">Senha</p>
            <input className="login-input" type="password" placeholder="Senha"/>
            <button className="loginButton">Entrar</button>
        </div>
    );
}