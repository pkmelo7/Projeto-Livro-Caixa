// pages/NovoLancamento.tsx

export function NovoLancamento(){
    return (
        <div className="novolancamento-container">
            <div className="novolancamento-header">
                <span>Novo Lançamento</span>
            </div>
            <div className="novolancamento-content">
                <div className="novolancamento-descricao">
                    <span>Descrição</span>
                    <input className="novolancamento-input" type="text" placeholder="Descrição"/>
                </div>
                <div className="novolancamento-data">
                    <span>Data</span>
                    <input className="novolancamento-input-date" type="date" placeholder="dd/mm/aaaa"/>
                    <span>Hora</span>
                    <input className="novolancamento-input-date" type="time" placeholder="HH:MM"/>
                </div>
                <div className="novolancamento-under">
                    <div className="novolancamento-valor">
                        <span>Valor</span>
                        <input className="novolancamento-input" type="number" placeholder="R$"/>
                    </div>    
                    <div className="novolancamento-checkbox">
                        <label className="custom-checkbox novolancamento-pago">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>Pago</span>
                        </label>
                        <label className="custom-checkbox novolancamento-recebido">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span>Recebido</span>
                        </label>
                    </div>
                </div>
                <div className="novolancamento-buttons">
                    <button>Salvar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    );
}