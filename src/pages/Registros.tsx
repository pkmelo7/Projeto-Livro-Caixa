// pages/Login.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Registro = {
    id: number;
    descricao: string;
    data: string;
    hora: string;
    valor: number;
    tipo: string;
  };
  
  const registrosMock: Registro[] = [
    { id: 1, descricao: "Compra de material de escritório", data: "08/12/2024", hora: "14:00", valor: 200.00, tipo: "Pago" },
    { id: 2, descricao: "Recebimento de cliente", data: "08/12/2024", hora: "12:23", valor: 1500.00, tipo: "Recebido" },
    { id: 3, descricao: "Pagamento de serviços", data: "07/05/2024", hora: "10:30", valor: 750.00, tipo: "Pago" },
    { id: 4, descricao: "Recebimento de cliente", data: "07/05/2024", hora: "9:45", valor: 650.00, tipo: "Recebido" },
    { id: 5, descricao: "Pagamento de impostos", data: "06/05/2024", hora: "15:27", valor: 1345.23, tipo: "Pago" },
    { id: 6, descricao: "Pagamento de emolumentos", data: "06/05/2024", hora: "12:30", valor: 850.00, tipo: "Pago" },
  ];

export function Registros(){
    const [totalPagos, setTotalPagos] = useState(0);
  const [totalRecebidos, setTotalRecebidos] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    let pagos = 0;
    let recebidos = 0;

    registrosMock.forEach((registro) => {
      if (registro.tipo === "Pago") {
        pagos += registro.valor;
      } else if (registro.tipo === "Recebido") {
        recebidos += registro.valor;
      }
    });

    setTotalPagos(pagos);
    setTotalRecebidos(recebidos);
    setSaldo(recebidos - pagos);
  }, []);

  function formatarValor(valor: number) {
    return valor.toFixed(2).replace(".", ",");
  }

    return (
        <div className="registros-container">
            <h2 className="registros-title">Lista de Registros</h2>
            <table className="registros-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>Valor (R$)</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {registrosMock.map((registro) => (
                        <tr key={registro.id}>
                            <td>{registro.id}</td>
                            <td>{registro.descricao}</td>
                            <td>{registro.data}</td>
                            <td>{registro.hora}</td>
                            <td>{registro.valor.toFixed(2)}</td>
                            <td>{registro.tipo}</td>
                            <td>
                                <button className="registrosButton-editar"><Link to="/editarreg">Editar</Link></button>|
                                <button className="registrosButton-excluir"><Link to="/excluirreg">Excluir</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="registros-statics">
                <div className="registros-total">
                <p className="registros-p">Total de pagos</p>
                <input type="text" value={formatarValor(totalPagos)} readOnly disabled/>
                </div>
                <div className="registros-total">
                <p className="registros-p">Total de recebidos</p>
                <input type="text" value={formatarValor(totalRecebidos)} readOnly disabled/>
                </div>
                <div className="registros-total">
                <p className="registros-p">Saldo</p>
                <input type="text" value={formatarValor(saldo)} readOnly disabled/>
                </div>
                <button className="registrosButton-novoLancamento"><Link to="/novolancamento">Novo Lançamento</Link></button>
            </div>
        </div>
    );
}
