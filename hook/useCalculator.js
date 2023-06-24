import { createContext, useState, useContext, useEffect } from "react";
import { set } from "react-native-reanimated";

const Application = createContext();

export const useCalculator = () => {
	const [firstInputs, setFirstInputs] = useState("");
	const [secondInputs, setSecondInputs] = useState("");
	const [continus, setContinus] = useState(false);

	const [operator, setOperator] = useState("");
	const [result, setResult] = useState("0");
	const [currentCalculation, setCurrentCalculation] = useState("");
	const [reset, setReset] = useState(false);

	useEffect(() => {
		if (!firstInputs) {
			setFirstInputs("");
		}
	}, [firstInputs]);

	function handleButtonClick(value) {
		if (!isNaN(value) || value === ".") {
			reset && clear();
			setFirstInputs((prev) => prev + value);
			setContinus(false);
			setReset(false);
		} else if (operator && result) {
			setSecondInputs(calculateResult());
			setOperator(value);
			setFirstInputs("");
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
	function clear(prevent) {
		try {
			setFirstInputs("");
			continus || setOperator((pre) => "");
			setSecondInputs("");
		} catch (error) {
			console.debug(error);
		}
	}

	function calculateResult() {
		let res = 0;
		switch (operator) {
			case "+":
				clear();
				res = Number(firstInputs) + Number(secondInputs);
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				return res;

			case "-":
				clear();
				res = Number(firstInputs) - Number(secondInputs);
				res = Math.abs(res);
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				return res;

			case "*":
				clear();
				res = Number(firstInputs) * Number(secondInputs);
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				return res;

			case "/":
				clear();
				res = Number(firstInputs) / Number(secondInputs);
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				return res;

			case "%":
				clear();
				res = Number(secondInputs) / 100;
				setResult(res);
				setFirstInputs((prev) => res);
				setContinus(true);
				return res;

			default:
				clear();
				return;
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
		setReset,
		setFirstInputs,
	};
};

export function AppState({ children }) {
	// console.log(useCalculator());
	let state = "";
	try {
		state = useCalculator();
	} catch (error) {
		console.debug("🪲 🪲 file: useCalculator.js:133 🪲 error:", error);
		console.debug("🪲 🪲 file: useCalculator.js:131 🪲 state:", state);
	}
	return (
		<Application.Provider value={state}>{children}</Application.Provider>
	);
}

export const useAppState = () => {
	return useContext(Application);
};
