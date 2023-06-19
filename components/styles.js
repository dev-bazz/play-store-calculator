import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

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
		color: COLORS.neutral.white,
		backgroundColor: COLORS.neutral.black_b,
		paddingHorizontal: 29,
		borderRadius: 8,
		paddingVertical: 26,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.24,
		shadowRadius: 6,
		elevation: 3,
	},
	text: {
		color: COLORS.neutral.white,
		fontSize: 16,
	},
});
