// pages/ExcluirRegistro.tsx

import './ExcluirRegistro.css';

export function ExcluirRegistro(){
    return (
        <div className="excluirregistro-container">
            <div className="excluirregistro-header">
                <span>Excluir</span>
            </div>
            <div className="excluirregistro-content">
                <span>Você têm certeza de excluir este registro?</span>
                <div className="excluirregistro-buttons">
                    <button className="button-sim">Sim</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}