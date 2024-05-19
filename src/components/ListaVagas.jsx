import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ListaVagas = ({ vagas, onReservaDeleted }) => {
    return (
        <div>
            <h2>Lista de Vagas</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>Placa do Veículo</th>
                        <th>Proprietário</th>
                        <th>Número do Apartamento</th>
                        <th>Bloco do Apartamento</th>
                        <th>Modelo do Veículo</th>
                        <th>Cor do Veículo</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {vagas.map(vaga => (
                        <tr key={vaga.numero}>
                            <td>{vaga.numero}</td>
                            <td>{vaga.placa}</td>
                            <td>{vaga.proprietario}</td>
                            <td>{vaga.numeroApartamento}</td>
                            <td>{vaga.blocoApartamento}</td>
                            <td>{vaga.modeloVeiculo}</td>
                            <td>{vaga.corVeiculo}</td>
                            <td>{vaga.ocupada ? 'Ocupada' : 'Disponível'}</td>
                            <td>
                                <Button variant="danger" onClick={() => onReservaDeleted(vaga.numero)}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListaVagas;
