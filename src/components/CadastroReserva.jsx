import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CadastroReserva = ({ onReservaAdded, vagas }) => {
    const [placa, setPlaca] = useState('');
    const [proprietario, setProprietario] = useState('');
    const [numeroApartamento, setNumeroApartamento] = useState('');
    const [blocoApartamento, setBlocoApartamento] = useState('');
    const [modeloVeiculo, setModeloVeiculo] = useState('');
    const [corVeiculo, setCorVeiculo] = useState('');
    const [numeroVaga, setNumeroVaga] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSave = () => {
        const reserva = {
            placa,
            proprietario,
            numeroApartamento,
            blocoApartamento,
            modeloVeiculo,
            corVeiculo,
            numeroVaga
        };
        onReservaAdded(reserva);
        setShowModal(true);
    };

    return (
        <div>
            <h2>Cadastro de Reserva de Vaga</h2>
            <Form>
                <Form.Group controlId="formPlaca">
                    <Form.Label>Placa do Veículo</Form.Label>
                    <Form.Control type="text" placeholder="Digite a placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formProprietario">
                    <Form.Label>Nome do Proprietário</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do proprietário" value={proprietario} onChange={(e) => setProprietario(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formNumeroApartamento">
                    <Form.Label>Número do Apartamento</Form.Label>
                    <Form.Control type="text" placeholder="Digite o número do apartamento" value={numeroApartamento} onChange={(e) => setNumeroApartamento(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBlocoApartamento">
                    <Form.Label>Bloco do Apartamento</Form.Label>
                    <Form.Control type="text" placeholder="Digite o bloco do apartamento" value={blocoApartamento} onChange={(e) => setBlocoApartamento(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formModeloVeiculo">
                    <Form.Label>Modelo do Veículo</Form.Label>
                    <Form.Control type="text" placeholder="Digite o modelo do veículo" value={modeloVeiculo} onChange={(e) => setModeloVeiculo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formCorVeiculo">
                    <Form.Label>Cor do Veículo</Form.Label>
                    <Form.Control type="text" placeholder="Digite a cor do veículo" value={corVeiculo} onChange={(e) => setCorVeiculo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formNumeroVaga">
                    <Form.Label>Número da Vaga de Estacionamento</Form.Label>
                    <Form.Control type="text" placeholder="Digite o número da vaga de estacionamento" value={numeroVaga} onChange={(e) => setNumeroVaga(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleSave}>Salvar</Button>
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>O cadastro foi realizado com sucesso!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CadastroReserva;
