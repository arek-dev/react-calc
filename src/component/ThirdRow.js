import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update4, update5, update6, operationMinus } from "../redux/displaySlice";

const ThirdRow = () => { 
    const display = useSelector((state) => state.displayValue.display);
    const dispatch = useDispatch();


    window.addEventListener("keyup", (event) => {
      if (event.key === "4") {
        handleClick4();
        return;        
      } else if (event.key === "5") {
        handleClick5();
        return; 
      } else if (event.key === "6") {
        handleClick6();
        return; 
      } else if (event.key === "-") {
        handleMinus();
        return; 
      }
      event.preventDefault();
    });

  
    const handleClick4 = (e) => {
    dispatch(update4(display))  
    }
  
    const handleClick5 = (e) => {
      dispatch(update5(display))  
    }
  
    const handleClick6 = (e) => {
      dispatch(update6(display))  
    }
  
    const handleMinus = (e) => {
      dispatch(operationMinus())  
    }
  
    return (
      <div className="calc__thirdrow">
        <div className="calc__thirdrow-4" onClick={handleClick4}>4</div>
        <div className="calc__thirdrow-5" onClick={handleClick5}>5</div>
        <div className="calc__thirdrow-6" onClick={handleClick6}>6</div>
        <div className="calc__thirdrow-minus" onClick={handleMinus}>-</div>
      </div>
    )
  }
  
  export default ThirdRow;