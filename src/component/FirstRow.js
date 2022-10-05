import React from "react";
import { useDispatch } from "react-redux";
import { operationDivide, operationCancel } from "../redux/displaySlice";

const FirstRow = () => { 
    const dispatch = useDispatch();
  
    const handleCancel = (e) => {
      e.preventDefault();
      dispatch(operationCancel())  
    }
  
    const handleDivide = (e) => {
      e.preventDefault();
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