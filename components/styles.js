import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const base_button = {
	color: COLORS.neutral.white,
	backgroundColor: COLORS.neutral.black_b,
	paddingHorizontal: 4,
	borderRadius: 8,
	paddingVertical: 4,
	shadowColor: "#000",
	shadowOffset: { width: 0, height: -2 },
	shadowOpacity: 0.24,
	shadowRadius: 6,
	elevation: 3,
	width: 74,
	height: 74,
	justifyContent: "center",
	alignItems: "center",
	fontFamily: "Prompt-SemiBold",
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	row: {
		flexDirection: "row",
		gap: 15.5,
		justifyContent: "center",
		alignContent: "center",
	},

	button: {
		...base_button,
	},
	text: {
		color: COLORS.neutral.white,
		fontSize: 20,
	},
	text_black: {
		color: COLORS.neutral.black_b,
		fontSize: 16,
	},
	text_l: {
		color: COLORS.neutral.white,
		fontSize: 16,
	},
	button_secondary: {
		...base_button,
		backgroundColor: COLORS.active,
	},
});
