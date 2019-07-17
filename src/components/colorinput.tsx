import React from 'react';
import './colorinput.scss';

const Ci: React.FC = () => {
  return (
    <div>
      <div className="separator" >
        This text can be edited by the user.
      </div>
      <form id="general" action="index.html" method="post">
        <fieldset>
          <legend>Select month</legend>
          <select id="month-name">
            <option value="NULL">
              <span className="value">Select Month</span>
            </option>
            <option value="January" className="january">January</option>
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
          <input id="main-name" type="text" name="" value="" />
        </fieldset>
        <fieldset>
          <legend>Service name</legend>
          <input id="service-name" type="text" name="" value="" />
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <input id="result" type="text" name="" value="" />
        </fieldset>
      </form>

    </div>
  );
}

export default Ci;
