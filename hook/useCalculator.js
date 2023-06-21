import { createContext, useState, useContext, useEffect } from "react";

const Application = createContext();

/**
 * A hook that provides the functionality of a calculator capable of handling
 * the calculation of multiple numbers using different operators, and clears
 * the history of calculations after each calculation.
 *
 * @return {object} An object containing the following keys:
 * - handleButtonClick: a function that handles button click events.
 * - calculateResult: a function that calculates the result of the inputs.
 * - result: a string representation of the result.
 * - inputs: an array of strings representing the inputs.
 * - operator: a string representing the current operator.
 * - history: an array of strings representing the history of calculations.
 */
export const useCalculator = () => {
	const [inputs, setInputs] = useState(["0"]);

	const [operator, setOperator] = useState("");
	const [result, setResult] = useState("");
	const [history, setHistory] = useState([]);
	const [currentCalculation, setCurrentCalculation] = useState("");

	// useEffect(() => {
	// 	if (operator !== "" && inputs.length >= 2) {
	// 		calculateResult();
	// 	}
	// }, [operator, inputs]);

	function handleButtonClick(value) {
		console.log(value);
		if (!isNaN(value)) {
			const newInputs = [...inputs];
			const lastInput = newInputs.pop();
			const newLastInput = (lastInput || "") + value;
			setInputs([...newInputs, newLastInput]);
		} else {
			setOperator(value);
		}
	}

	function handleClear() {
		setInputs(["0"]);
		setOperator("");
		setResult("");
		setHistory([]);
		setCurrentCalculation("");
	}
	return {
		handleButtonClick,
		result,
		inputs,
		operator,
		history,
		currentCalculation,
		handleClear,
	};
};

export function AppState({ children }) {
	// console.log(useCalculator());
	return (
		<Application.Provider value={useCalculator()}>
			{children}
		</Application.Provider>
	);
}

export const useAppState = () => {
	return useContext(Application);
};
