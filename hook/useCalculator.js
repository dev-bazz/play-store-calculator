import { useState } from "react";

export const useCalculator = () => {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [operator, setOperator] = useState("");

	function handleButtonClick(value) {
		if (!isNaN(value)) {
			operator === "" ? setNum1(num1 + value) : setNum2(num2 + value);
		} else {
			setOperator(value);
		}
	}

	function calculateResult() {
		let result = 0;
		switch (operator) {
			case "+":
				result = parseFloat(num1) + parseFloat(num2);
				break;
			case "-":
				result = parseFloat(num1) - parseFloat(num2);
				break;
			case "*":
				result = parseFloat(num1) * parseFloat(num2);
				break;
			case "/":
				result = parseFloat(num1) / parseFloat(num2);
				break;
			case "%":
				result = parseFloat(num1) % parseFloat(num2);
				break;
			case "^":
				result = Math.pow(parseFloat(num1), parseFloat(num2));
				break;
			case "√":
				result = Math.sqrt(parseFloat(num1));
				break;
			case "log":
				result = Math.log10(parseFloat(num1));
				break;
			case "!":
				result = factorial(parseFloat(num1));
				break;
			case "abs":
				result = Math.abs(parseFloat(num1));
				break;
			default:
				break;
		}
		setNum1(result.toString());
		setNum2("");
		setOperator("");
		return result;
	}

	function factorial(num) {
		return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
	}

	return { handleButtonClick, calculateResult };
};
