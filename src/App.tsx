import React from 'react';
import months from './components/months.svg';
import ColorInput from './components/colorinput';
// import XYear from './interfaces/outputinterface';
import './App.scss';

//interface a {year:number,month:number};
//const d = {year:12,months:3};
const App: React.FC = () => {
//const {year,month} = this.props;
  //privat {year, months} = this.Yearx;
  return (
    <div className="App">
      <div className="Wrapper">
      <header className="header"> RT Proj Organizer</header>
        <div className="section">
          <img src={months} alt="Months"/>
        </div>
        <div className="section">
          <ColorInput/>
        </div>
      </div>
    </div>
  );
}

export default App;
