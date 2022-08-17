import React from "react";
import "./Button.css";

const Button = ({ first, second, text, operator, setSum }) => {
  
  const handleOperator = () => {
    if(operator === '+'){
       setSum(parseInt(first) + parseInt(second))
    } else if (operator === '-'){
      setSum(parseInt(first) - parseInt(second))
    }else if (operator === '*'){
      setSum(parseInt(first) * parseInt(second))
    }else if (operator === '/'){
      setSum(parseInt(first) / parseInt(second))
    }
    
    // Second option for Button function

    // switch (operator) {
    //   case '+':
    //     setSum(parseInt(first) + parseInt(second))
    //     break
    //   case '-':
    //     setSum(parseInt(first) - parseInt(second))
    //     break
    //   case '*':
    //     setSum(parseInt(first) * parseInt(second))
    //     break
    //   case '/':
    //     setSum(parseInt(first) / parseInt(second))
    //     break

    // }
  }
  return (
    <button className="btn btn-warning m-2" onClick={handleOperator}>{text}</button>
  )
}


export default Button;