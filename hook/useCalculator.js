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
		firstInputs == false && setFirstInputs("");
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
		let result = 0;
		switch (operator) {
			case "+":
				clear();
				const res = Number(firstInputs) + Number(secondInputs);
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
