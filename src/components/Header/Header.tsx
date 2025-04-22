// components/Header.tsx

import { Link } from 'react-router-dom';
import CircularText from './CircularText.js';
import './Header.css'
  

export function Header(){
    return(
        <header className="header">
        <CircularText
            text="PROJETO ♦ LIVRO ♦ CAIXA ♦ "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
        />
            <i className="fa-solid fa-book-open"></i>
            <h1 className="header-title">Projeto Livro Caixa</h1>
        </header>
    );
}