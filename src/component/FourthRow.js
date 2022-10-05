import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update1, update2, update3, operationPlus } from "../redux/displaySlice";

const FourthRow = () => { 
    const display = useSelector((state) => state.displayValue.display);
    const dispatch = useDispatch();
  
    const handleClick1 = (e) => {
    e.preventDefault();
    dispatch(update1(display))  
    }
  
    const handleClick2 = (e) => {
      e.preventDefault();
      dispatch(update2(display))  
    }
  
    const handleClick3 = (e) => {
      e.preventDefault();
      dispatch(update3(display))  
    }
  
    const handlePlus = (e) => {
      e.preventDefault();
      dispatch(operationPlus())  
    }
  
    return (
      <div className="calc__fourthrow">
        <div className="calc__fourthrow-1" onClick={handleClick1}>1</div>
        <div className="calc__fourthrow-2" onClick={handleClick2}>2</div>
        <div className="calc__fourthrow-3" onClick={handleClick3}>3</div>
        <div className="calc__fourthrow-plus" onClick={handlePlus}>+</div>
      </div>
    )
  }
  
  export default FourthRow;