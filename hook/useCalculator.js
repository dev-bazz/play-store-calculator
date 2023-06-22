import { createContext, useState, useContext, useEffect } from "react";

const Application = createContext();

export const useCalculator = () => {
	const [firstInputs, setFirstInputs] = useState("");
	const [secondInputs, setSecondInputs] = useState("");
	const [continus, setContinus] = useState(false);

	console.debug(
		"🪲 🪲 file: useCalculator.js:21 🪲 useCalculator 🪲 firstInputs:",
		firstInputs
	);

	const [operator, setOperator] = useState("");
	const [result, setResult] = useState("0");
	const [currentCalculation, setCurrentCalculation] = useState("");

	function handleButtonClick(value) {
		value === "="
			? calculateResult()
			: continus && isNaN(value)
			? setFirstInputs((prev) => "")
			: ``;
		continus && setFirstInputs((prev) => "");
		if (!isNaN(value) || value === ".") {
			setFirstInputs((prev) => prev + value);
			setContinus(false);
		} else {
			setOperator(value);
			setSecondInputs((prev) => firstInputs);
			setFirstInputs("");
		}
	}

	function handleClear() {
		setFirstInputs((prev) => "");
		setSecondInputs((prev) => "");
		setOperator((prev) => "");
		setResult((pre) => "0");
		setCurrentCalculation("");
	}
	function clear() {
		try {
			setFirstInputs("");
			setOperator((pre) => "");
			setSecondInputs("");
		} catch (error) {
			console.debug(error);
		}
	}

	function calculateResult() {
		let result = 0;
		switch (operator) {
			case "+":
				clear();
				const res = Number(firstInputs) + Number(secondInputs);
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				break;

			default:
				clear();
				break;
		}
	}
	return {
		handleButtonClick,
		result,
		operator,
		calculateResult,
		currentCalculation,
		handleClear,
		firstInputs,
		secondInputs,
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
