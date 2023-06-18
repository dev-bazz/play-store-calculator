import { StyleSheet } from "react-native";
import { COLORS } from "./colorsUpdate";

const getTokens = async () => {
	try {
		const response = await fetch("/tokens.json");
		const tokens = await response.json();
		return tokens;
	} catch (error) {
		console.error(error);
	}
};

getTokens();
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.neutral.black_b,
	},
	text_global: {
		color: COLORS.neutral.white,
	},
});
