import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

export function Button({ value }) {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.text}>{value}</Text>
		</TouchableOpacity>
	);
}
