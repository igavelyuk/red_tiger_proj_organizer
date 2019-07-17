import React from 'react';
import months from './components/months.svg';
import ColorInput from './components/colorinput';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">

      <div className="Wrapper">
      <header className="header"> RT Proj Organizer</header>
        <div className="section">
          <img src={months} alt="Months"/>
        </div>
        <div className="section">
          <ColorInput />
        </div>
      </div>
    </div>
  );
}

export default App;
