import React, {Component} from 'react';
import './colorinput.scss';
import ColorNamer from './../interfaces/outputinterface';

export class Colorinput extends Component <ColorNamer> {
year:{};

month: React.RefObject<HTMLSelectElement>;
firststring: React.RefObject<HTMLInputElement>;
secondstring: React.RefObject<HTMLInputElement>;
resultstring: React.RefObject<HTMLInputElement>;
constructor(props: ColorNamer){
  super(props);
  this.state={
    year: "2019",
    month: "Not Selected",
    firststring: '_',
    secondstring:'_',
    resultstring:'_'
  }
  // this.Compute();
  this.year = Number();
  this.month = React.createRef();
  this.firststring = React.createRef();
  this.secondstring = React.createRef();
  this.resultstring = React.createRef();
}
handleSelect = () => {
  //console.log(this.month.current.value);
}
Compute = () => {
  let current = new Date();
  let month = this.FindMonthsColour(this.month.current.value);
  let currentYear = this.FindYear(current.getFullYear());
  this.resultstring.current.value = month.toLowerCase()+'_'+currentYear+'_'+this.firststring.current.value+'_'+this.secondstring.current.value;
}
FindYear = (xvalue:number) => {
  let x = [2017,2018,2019,2020,2021];
  let y = ["rabbit","foxy","tiger","mouse","beaver"];
  for (let i = 0; i < x.length; i++) {
      if(x[i]===xvalue){
        return y[i];
      }
  }
}
FindMonthsColour = (xvalue:string) => {
  var monthNameArray = [
    ['b43','Cyan', '#00838f', 'January', '31 days'],
    ['b27','Teal ', '#00796b', 'February', '28 days', '29 days in leap'],
    ['b17','Green', '#1b5e20', 'March', '31 days'],
    ['b7','Lime', '#afb42b', 'April', '30 days'],
    ['b16','Yellow', '#ffeb3b', 'May', '31 days'],
    ['b26','Orange', '#e65100', 'June', '30 days'],
    ['b42','Red', '#d50000', 'July', '31 days'],
    ['b52','Pink', '#880e4f', 'August', '31 days'],
    ['b63','Purple', '#6a1b9a', 'September', '30 days'],
    ['b67','Brown', '#3e2723', 'October', '31 days'],
    ['b62','Grey', '#757575', 'November', '30 days'],
    ['b53','Blue', '#0d47a1', 'December', '31 days']
  ];
  for (let i = 0; i < monthNameArray.length; i++) {
      if(monthNameArray[i][3]===xvalue){
        return monthNameArray[i][1];
      }
  }
}
  render(){
    return (
      <div>
        <div className="separator" >
         This text can be edited by the user.
        </div>
        <form id="general" action="index.html" method="post">
          <fieldset>
            <legend>Select month</legend>
            <select onChange = {this.handleSelect} ref = {this.month}>
              <option value="Months not selected">Select Month</option>
              <option value="January" className="january" >January</option>
              <option value="February" className="february">February</option>
              <option value="March" className="march">March</option>
              <option value="April" className="april">April</option>
              <option value="May" className="may">May</option>
              <option value="June" className="june">June</option>
              <option value="July" className="july">July</option>
              <option value="August" className="august">August</option>
              <option value="September" className="september">September</option>
              <option value="October" className="october">October</option>
              <option value="November" className="november">November</option>
              <option value="December" className="december">December</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Main name</legend>
            <input type="text" ref={this.firststring} onChange = {this.Compute}/>
          </fieldset>
          <fieldset>
            <legend>Service name</legend>
            <input type="text" ref={this.secondstring} onChange = {this.Compute}/>
          </fieldset>
          <fieldset>
            <legend>Result</legend>
            <input type="text" ref={this.resultstring} onChange = {this.Compute}/>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default Colorinput;
