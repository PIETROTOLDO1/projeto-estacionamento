import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CadastroReserva from './components/CadastroReserva';
import ListaVagas from './components/ListaVagas';

const App = () => {
    const [vagas, setVagas] = useState([]);

    const handleReservaAdded = (reserva) => {
        const updatedVagas = [...vagas, { ...reserva, ocupada: true }];
        setVagas(updatedVagas);
        console.log("Nova reserva adicionada:", reserva);
        console.log("Lista de vagas atualizada:", updatedVagas);
    };

    const handleReservaDeleted = (numeroVaga) => {
        const updatedVagas = vagas.filter(vaga => vaga.numero !== numeroVaga);
        setVagas(updatedVagas);
        console.log("Reserva excluída - Número da vaga:", numeroVaga);
        console.log("Lista de vagas atualizada:", updatedVagas);
    };

    return (
        <div className="App">
            <h1>Controle de Estacionamento</h1>
            <BrowserRouter>
                <Nav variant="tabs">
                    <Nav.Link as={Link} to="/">Cadastro de Reserva</Nav.Link>
                    <Nav.Link as={Link} to="/listar-vagas">Listar Vagas</Nav.Link>
                </Nav>

                <Routes>
                    <Route path="/" element={<CadastroReserva onReservaAdded={handleReservaAdded} vagas={vagas} />} />
                    <Route path="/listar-vagas" element={<ListaVagas vagas={vagas} onReservaDeleted={handleReservaDeleted} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
