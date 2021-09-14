import Chat from './components/chat/Chat';
import Contacts from './components/contacts/Contacts';
import MkFramework from './components/mk-framework/MkFramework';

function App() {
  return (
    <div className="App flex">
      <Contacts />
      <Chat />
      <MkFramework />
    </div>
  );
}

export default App;
