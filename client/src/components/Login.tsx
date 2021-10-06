import React, {FormEvent, useRef} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';

interface loginParams {
  onIdSubmit: (id: string) => void;
}

const Login: React.FC<loginParams> = ({onIdSubmit}) => {
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!idRef.current) return;
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Container className="align-items-center d-flex" style={{height: '100vh'}}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Informe o seu ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Crie um novo ID
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
