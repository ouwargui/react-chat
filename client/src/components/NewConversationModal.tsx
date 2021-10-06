import React, {useState} from 'react';
import {Modal, Form, Button} from 'react-bootstrap';
import {useContacts} from '../contexts/ContactsProvider';
import {useConversations} from '../contexts/ConversationsProvider';

interface newConversationModalParams {
  closeModal: () => void;
}

const NewConversationModal: React.FC<newConversationModalParams> = ({
  closeModal,
}) => {
  const {contacts} = useContacts();
  const {createConversation} = useConversations();
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([]);

  const handleCheckBoxChange = (contactId: string) => {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton closeLabel="">
        Criar conversa
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact: any) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Criar</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
