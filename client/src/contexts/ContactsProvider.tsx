import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface contactsProviderParams {
  children: any;
}

const ContactsContext = React.createContext(undefined as any);

export const useContacts = () => {
  return useContext(ContactsContext);
};

export const ContactsProvider: React.FC<contactsProviderParams> = ({
  children,
}) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id: string, name: string) => {
    setContacts((prevContacts: any) => {
      return [...prevContacts, {id, name}];
    });
  };

  return (
    <ContactsContext.Provider value={{contacts, createContact}}>
      {children}
    </ContactsContext.Provider>
  );
};
