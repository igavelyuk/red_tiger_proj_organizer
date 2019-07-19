import React, {Component} from 'react';
import './colorinput.scss';
import ColorNamer from './../interfaces/outputinterface';

export class Colorinput extends Component <ColorNamer> {
year:{};
month:React.RefObject<HTMLSelectElement>
//month:React.Ref<HTMLOptionElement>;
firststring: React.RefObject<HTMLInputElement>;
secondstring: React.RefObject<HTMLInputElement>;
resultstring: React.RefObject<HTMLInputElement>;
constructor(props:ColorNamer){
  super(props);
  this.state={
    year: "2019",
    month: "hjhjhj",
    firststring: '_',
    secondstring:'_',
    resultstring:'_'
  }
  this.firststring = React.createRef();
  this.secondstring = React.createRef();
  this.resultstring = React.createRef();
}
Test = () => {
  console.log(this.month);
}
Compute = () => {
  this.resultstring.current.value =this.month.current.value+'_'+this.firststring.current.value+'_'+this.secondstring.current.value;
}
  render(){
    /* const {year,month,state,handleChange} = this.props;
    console.log(this.props.year);
    console.log(this.props.month); */
    return (
      <div>
        <div className="separator" >
         This text can be edited by the user.
        </div>
        <form id="general" action="index.html" method="post">
          <fieldset>
            <legend>Select month</legend>
            <select onChange = {this.Test} ref={this.month as any}>
              <option value="NULL">
                <span className="value">Select Month</span>
              </option>
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
