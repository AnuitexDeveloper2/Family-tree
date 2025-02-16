import Header from './components/header/Header';
import Main from './components/main/Main';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';


function App() {
  return (
    <Provider store={setupStore()}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
