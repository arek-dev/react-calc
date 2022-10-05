import React from "react";
import { useSelector } from "react-redux";
import FirstRow from "./component/FirstRow";
import SecondRow from "./component/SecondRow";
import ThirdRow from "./component/ThirdRow";
import FourthRow from "./component/FourthRow";
import FifthRow from "./component/FifthRow";

import '../src/sass/main.scss';

const Display = (props) => {

  const display = useSelector((state) => state.displayValue.value);

  return (
    <div className="calc__result">
      {display}
    </div>
  )
}


function App() {
  return (
    <div className="container">
      <div className="calc">
        <Display />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <FifthRow />
      </div>
    </div>
  );
}

export default App;
