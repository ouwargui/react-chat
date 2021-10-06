import React, {useState} from 'react';
import {Tab, Nav, Button, Modal} from 'react-bootstrap';
import Contacs from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

interface SidebarParams {
  id: string;
}

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacs';

const Sidebar: React.FC<SidebarParams> = ({id}) => {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [openModal, setOpenModal] = useState(false);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;

  const handleTabOnSelect = (eventKey: string | null, e: any) => {
    if (!eventKey) return;
    setActiveKey(eventKey);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="d-flex flex-column" style={{width: '250px'}}>
      <Tab.Container activeKey={activeKey} onSelect={handleTabOnSelect}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contatos</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          className="overflow-auto flex-grow-1"
          style={{borderRight: '1px solid #dee2e6'}}>
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacs />
          </Tab.Pane>
        </Tab.Content>
        <div
          className="p-2 border-top small"
          style={{borderRight: '1px solid #dee2e6'}}>
          Seu ID: <span className="text-muted">{id}</span>
        </div>
        <Button
          onClick={() => setOpenModal(true)}
          className="rounded-0"
          style={{width: '250px'}}>
          {conversationOpen ? 'Nova conversa' : 'Novo contato'}
        </Button>
      </Tab.Container>

      <Modal show={openModal} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
