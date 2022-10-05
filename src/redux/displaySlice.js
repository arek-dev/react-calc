import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
    name: "display",
    initialState:{
        value: "0",
        firstElement: null,
        secondElement: null,
        operation: null,
        result: null,
    },
    reducers: {

        update0: state => {
            if(state.value === "0") {
               state.value="0"
               } else (state.value = state.value + "0");
        },

        update1: state => {
            if(state.value === "0") {
               state.value="1"
               } else (state.value += "1");
        },

        update2: state => {
            if(state.value === "0") {
               state.value="2"
               } else (state.value += "2");
        },

        update3: state => {
            if(state.value === "0") {
               state.value="3"
               } else (state.value += "3");
        },

        update4: state => {
            if(state.value === "0") {
               state.value="4"
               } else (state.value += "4");
        },

        update5: state => {
            if(state.value === "0") {
               state.value="5"
               } else (state.value += "5");
        },

        update6: state => {
            if(state.value === "0") {
               state.value="6"
               } else (state.value += "6");
        },

        update7: state => {
            if(state.value === "0") {
               state.value="7"
               } else (state.value += "7");
        },

        update8: state => {
            if(state.value === "0") {
                state.value="8"
                } else (state.value += "8");
        },

        update9: state => {
            if(state.value === "0") {
                state.value="9"
                } else (state.value += "9");
        },

        updateColon: state => {
            if(!state.value.includes('.')) {
                state.value += "."
                } else {state.value = state.value};
        },

        operationMultiply: state => {
            if(state.operation === null) {            
                state.operation="multiply";               
                state.firstElement = state.value;
                state.value="0";
            } else if (state.operation === "multiply") {            
                state.result = parseFloat(state.firstElement) * parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "plus") {
                state.result = parseFloat(state.firstElement) + parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "minus") {
                state.result = parseFloat(state.firstElement) - parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "divide") {
                state.result = parseFloat(state.firstElement) / parseFloat(state.value)
                state.value = state.result
            }  else {
                state.result = state.result
            } 
        },

        operationPlus: state => {
            if(state.operation === null) {            
                state.operation="plus";              
                state.firstElement = state.value;
                state.value="0";
            }  else if (state.operation === "multiply") {            
                state.result = parseFloat(state.firstElement) * parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "plus") {
                state.result = parseFloat(state.firstElement) + parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "minus") {
                state.result = parseFloat(state.firstElement) - parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "divide") {
                state.result = parseFloat(state.firstElement) / parseFloat(state.value)
                state.value = state.result
            }  else {
                state.result = state.result
            } 
        },

        operationMinus: state => {
            if(state.operation === null) {
                state.operation="minus"               
                state.firstElement=state.value
                state.value="0"
            }  else if (state.operation === "multiply") {            
                state.result = parseFloat(state.firstElement) * parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "plus") {
                state.result = parseFloat(state.firstElement) + parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "minus") {
                state.result = parseFloat(state.firstElement) - parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "divide") {
                state.result = parseFloat(state.firstElement) / parseFloat(state.value)
                state.value = state.result
            }  else {
                state.result = state.result
            } 
        },

        operationDivide: state => {
            if(state.operation === null) {            
                state.operation="divide";               
                state.firstElement = state.value;
                state.value="0";
            } else if (state.operation === "multiply") {            
                state.result = parseFloat(state.firstElement) * parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "plus") {
                state.result = parseFloat(state.firstElement) + parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "minus") {
                state.result = parseFloat(state.firstElement) - parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "divide") {
                state.result = parseFloat(state.firstElement) / parseFloat(state.value)
                state.value = state.result
            }  else {
                state.result = state.result
            } 
        },

        operationCancel: state => {
              state.firstElement=null
              state.value="0"
              state.result = null              
              state.operation = null
        },

        operationEqual: state => {
            if(state.operation === "multiply") {            
                state.result = parseFloat(state.firstElement) * parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "plus") {
                state.result = parseFloat(state.firstElement) + parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "minus") {
                state.result = parseFloat(state.firstElement) - parseFloat(state.value)
                state.value = state.result
            }  else if (state.operation === "divide") {
                state.result = parseFloat(state.firstElement) / parseFloat(state.value)
                state.value = state.result
            }  else {
                state.result = state.result
            }            
        },
    }
});

export const {
    update0, 
    update1, 
    update2, 
    update3, 
    update4, 
    update5, 
    update6, 
    update7, 
    update8, 
    update9, 
    updateColon,
    operationMinus,
    operationPlus,
    operationMultiply,
    operationDivide,    
    operationEqual,
    operationCancel,
    } 
    = displaySlice.actions;

export default displaySlice.reducer;