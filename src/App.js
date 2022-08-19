import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuthed = useSelector(state => state.auth.isAuthed);

  return (
    <>
      <Header />
      {!isAuthed && <Auth />}
      {isAuthed && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
