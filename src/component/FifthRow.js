import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update0, updateColon, operationEqual } from "../redux/displaySlice";

const FifthRow = () => { 
    const display = useSelector((state) => state.displayValue.display);
    const dispatch = useDispatch();
  
    const handleClick0 = (e) => {
    e.preventDefault();
    dispatch(update0(display))  
    }
  
    const handleClickColon = (e) => {
      e.preventDefault();
      dispatch(updateColon(display))  
    }
  
    const handleEqual = (e) => {
      e.preventDefault();
      dispatch(operationEqual())  
    }
  
    return (
      <div className="calc__fifthrow">
        <div className="calc__fifthrow-0" onClick={handleClick0}>0</div>
        <div className="calc__fifthrow-colon" onClick={handleClickColon}>,</div>
        <div className="calc__fifthrow-equal" onClick={handleEqual}>=</div>
      </div>
    )
  }
  
  export default FifthRow;