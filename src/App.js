import './scss/App.scss';

import Header from './components/Header';
import CapitalsTemp from './components/CapitalsTemp';
import CityInfo from './components/CityInfo';

const App = () => {
  return (
    <>
      {/* <h1 className="pdd-left title">Previsão do tempo</h1> */}
      <CityInfo />
      <Header />
      <CapitalsTemp />
    </>
  );
};

export default App;