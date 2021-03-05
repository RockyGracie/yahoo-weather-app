import './scss/App.scss';

import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <h1 className="title"> 
        Previsão do tempo
      </h1>
      <SearchBar />
    </>
  );
};

export default App;