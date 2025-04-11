// pages/EditarRegistro.tsx

export function EditarRegistro(){
    return (
        <div className="editarregistro-container">
            <div className="editarregistro-header">
                <span>Editar</span>
            </div>
            <div className="editarregistro-content">
                <div className="editarregistro-descricao">
                    <span>Descrição</span>
                    <input className="editarregistro-input" type="text" placeholder="Descrição"/>
                </div>
                <div className="editarregistro-data">
                    <span>Data</span>
                    <input className="editarregistro-input-date" type="date" placeholder="dd/mm/aaaa"/>
                    <span>Hora</span>
                    <input className="editarregistro-input-date" type="time" placeholder="HH:MM"/>
                </div>
                <div className="editarregistro-under">
                    <div className="editarregistro-valor">
                        <span>Valor</span>
                        <input className="editarregistro-input" type="number" placeholder="R$"/>
                    </div>    
                    <div className="editarregistro-checkbox">
                        <label className="custom-checkbox editarregistro-pago">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>Pago</span>
                        </label>
                        <label className="custom-checkbox editarregistro-recebido">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>Recebido</span>
                        </label>
                    </div>
                </div>
                <div className="editarregistro-buttons">
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}