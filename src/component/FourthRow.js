import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update1, update2, update3, operationPlus } from "../redux/displaySlice";

const FourthRow = () => { 
    const display = useSelector((state) => state.displayValue.display);
    const dispatch = useDispatch();


    window.addEventListener("keyup", (event) => {
      if (event.key === "1") {
        handleClick1();
        return;        
      } else if (event.key === "2") {
        handleClick2();
        return; 
      } else if (event.key === "3") {
        handleClick3();
        return; 
      } else if (event.key === "+") {
        handlePlus();
        return; 
      }
      event.preventDefault();
    });

   
    const handleClick1 = (e) => {
    dispatch(update1(display))  
    }
  
    const handleClick2 = (e) => {
      dispatch(update2(display))  
    }
  
    const handleClick3 = (e) => {
      dispatch(update3(display))  
    }
  
    const handlePlus = (e) => {
      dispatch(operationPlus())  
    }
  
    return (
      <div className="calc__fourthrow">
        <div id="btn1" className="calc__fourthrow-1" onClick={handleClick1}>1</div>
        <div className="calc__fourthrow-2" onClick={handleClick2}>2</div>
        <div className="calc__fourthrow-3" onClick={handleClick3}>3</div>
        <div className="calc__fourthrow-plus" onClick={handlePlus}>+</div>
      </div>
    )
  }
  
  export default FourthRow;