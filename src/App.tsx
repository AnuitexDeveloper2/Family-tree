import Header from './components/header/Header';
import Main from './components/main/Main';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';


function App() {
  return (
    <Provider store={setupStore()}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
