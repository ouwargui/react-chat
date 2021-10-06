import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {useConversations} from '../contexts/ConversationsProvider';

const Conversations: React.FC = () => {
  const {conversations} = useConversations();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation: any, index: number) => (
        <ListGroup.Item key={index}>{conversation.recipients}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
