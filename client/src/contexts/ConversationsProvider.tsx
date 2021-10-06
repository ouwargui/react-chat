import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface conversationsProviderParams {
  children: any;
}

const ConversationsContext = React.createContext(undefined as any);

export const useConversations = () => {
  return useContext(ConversationsContext);
};

export const ConversationsProvider: React.FC<conversationsProviderParams> = ({
  children,
}) => {
  const [conversations, setConversations] = useLocalStorage(
    'conversations',
    [],
  );

  const createConversation = (recipients: any) => {
    setConversations((prevConversations: any) => {
      return [...prevConversations, {recipients, messages: []}];
    });
  };

  return (
    <ConversationsContext.Provider value={{conversations, createConversation}}>
      {children}
    </ConversationsContext.Provider>
  );
};
