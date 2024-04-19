import NavBar from './components/NavBar';
import Main from './components/Main';
import NewsState from './Context/NewsState';


function App() {

  return (
    <NewsState>
        <NavBar />
        <Main />
    </NewsState>
  );
}

export default App;