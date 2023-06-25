import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";

import { styles } from "./styles";
import { Icons } from "./Icons";
import { useAppState, useTheme } from "../hook";
import { COLORS } from "../constants";

export function Button({ value, secondary = false, name }) {
	const [equal, setEqual] = React.useState(false);
	const { theme } = useTheme();
	const {
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
		setResult,
		setContinus,
		clear,
		reset,
	} = useAppState();
	const calc = () => {
		setReset(true);
		calculateResult();
	};

	const clearLastInteger = () => {
		if (reset) return handleClear();
		if (firstInputs) {
			setFirstInputs((pre) => pre.slice(0, -1));
			console.debug("🪲 🪲 file: Button.jsx:26 🪲 firstInputs:", firstInputs);
		} else {
			setFirstInputs("");
		}
	};

	const percentage = () => {
		let res = 0;
		if (!firstInputs) return;
		res = Number(firstInputs) / 100;
		setResult(res);
		setFirstInputs((prev) => res);
		setContinus(true);
		setReset(true);
		return res;
	};
	const bg = () =>
		theme === "light"
			? { ...styles.button, backgroundColor: COLORS.neutral.white }
			: styles.button;
	return (
		<Pressable
			android_ripple={{ color: "#000" }}
			onPress={() => {
				name === "clear"
					? handleClear()
					: name === "equal"
					? calc()
					: name == "back"
					? clearLastInteger()
					: value == "%"
					? percentage()
					: handleButtonClick(value);
			}}
			style={secondary ? styles.button_secondary : bg()}>
			{secondary ? (
				<Icons name={name} />
			) : (
				<Text
					style={
						theme === "light"
							? [styles.text_black, { fontFamily: "Prompt-SemiBold" }]
							: [styles.text_l, { fontFamily: "Prompt-SemiBold" }]
					}>
					{value}
				</Text>
			)}
		</Pressable>
	);
}
