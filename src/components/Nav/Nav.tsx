// components/Nav.tsx

import { Link } from "react-router-dom";
import './Nav.css'

export function Nav(){
    return(
        <nav className="nav">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
            <Link to="/login">Login</Link>
            <Link to="/registros">Registros</Link>
            <Link to="/novolancamento">Novo Lançamento</Link>
            <Link to="/editarreg">Editar Registros</Link>
            <Link to="/excluirreg">Excluir Registros</Link>
        </nav>
    );
}