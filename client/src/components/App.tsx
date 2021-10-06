import React from 'react';
import {ContactsProvider} from '../contexts/ContactsProvider';
import {ConversationsProvider} from '../contexts/ConversationsProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from './Login';

const App: React.FC = () => {
  const [id, setId] = useLocalStorage('id', null);

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return id ? dashboard : <Login onIdSubmit={(id: string) => setId(id)} />;
};

export default App;
