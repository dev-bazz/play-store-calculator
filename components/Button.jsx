import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";

import { styles } from "./styles";
import { Icons } from "./Icons";
import { useAppState, useTheme } from "../hook";
import { COLORS } from "../constants";

export function Button({ value, secondary = false, name }) {
	const { theme } = useTheme();
	const {
		handleClear,
		handleButtonClick,
		calculateResult,
		result,
		inputs,
		operator,
		setReset,
	} = useAppState();
	const calc = () => {
		setReset(true);
		calculateResult();
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
					: handleButtonClick(value);
			}}
			style={secondary ? styles.button_secondary : bg()}>
			{secondary ? (
				<Icons name={name} />
			) : (
				<Text style={theme === "light" ? styles.text_black : styles.text_l}>
					{value}
				</Text>
			)}
		</Pressable>
	);
}
