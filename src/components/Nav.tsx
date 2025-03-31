// components/Nav.tsx

import { Link } from "react-router-dom";

export function Nav(){
    return(
        <nav className="nav">
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    );
}