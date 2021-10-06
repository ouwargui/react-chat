import React, {FormEvent, useRef} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useContacts} from '../contexts/ContactsProvider';

interface newContactModalParams {
  closeModal: () => void;
}

const NewContactModal: React.FC<newContactModalParams> = ({closeModal}) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const {createContact} = useContacts();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!idRef.current || !nameRef.current) return;
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton closeLabel="">
        Criar contato
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit">Criar</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
