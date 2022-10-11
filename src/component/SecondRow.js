import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update7, update8, update9, operationMultiply } from "../redux/displaySlice";

const SecondRow = () => { 
    const display = useSelector((state) => state.displayValue.display);
    const dispatch = useDispatch();
    

    window.addEventListener("keyup", (event) => {
      if (event.key === "7") {
        handleClick7();
        return;        
      } else if (event.key === "8") {
        handleClick8();
        return; 
      } else if (event.key === "9") {
        handleClick9();
        return; 
      } else if (event.key === "*") {
        handleMultiply();
        return; 
      }
      event.preventDefault();
    });
  
    const handleClick7 = (e) => {
    dispatch(update7(display))  
    }
  
    const handleClick8 = (e) => {
      dispatch(update8(display))  
    }
  
    const handleClick9 = (e) => {
      dispatch(update9(display))  
    }
  
    const handleMultiply = (e) => {
      dispatch(operationMultiply())  
    }
  
    return (
      <div className="calc__secondrow">
        <div className="calc__secondrow-7" onClick={handleClick7}>7</div>
        <div className="calc__secondrow-8" onClick={handleClick8}>8</div>
        <div className="calc__secondrow-9" onClick={handleClick9}>9</div>
        <div className="calc__secondrow-multiply" onClick={handleMultiply}>×</div>
      </div>
    )
  }
  
  export default SecondRow;