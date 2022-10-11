import React from "react";
import { useDispatch } from "react-redux";
import { operationDivide, operationCancel } from "../redux/displaySlice";

const FirstRow = () => { 
    const dispatch = useDispatch();


    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        handleCancel();
        return;        
      } else if (event.key === "/") {
        handleDivide();
        return; 
      } 
      event.preventDefault();
    });

  
    const handleCancel = (e) => {
      dispatch(operationCancel())  
    }
  
    const handleDivide = (e) => {
      dispatch(operationDivide())  
    }
  
    return (
      <div className="calc__firstrow">
        <div className="calc__firstrow-ac" onClick={handleCancel}>AC</div>
        <div className="calc__firstrow-divide" onClick={handleDivide}>÷</div>
      </div>
    )
  }

export default FirstRow;