import Header from './components/header/Header';
import Main from './components/main/Main';
import { useAppSelector } from './hooks/redux';
import { MemberDetail } from './components/memberDetail/MemberDetail';
import AlertDialog from './components/alert/Alert';


function App() {
  const { cardModalId } = useAppSelector(state => state.memberDetailSlice)
  return (
    <>
     <AlertDialog />
      {
        cardModalId ?
          <MemberDetail isOpen={!!cardModalId} /> : <>
            <Header />
            <Main />
          </>
      }
    </>
  );
}

export default App;
