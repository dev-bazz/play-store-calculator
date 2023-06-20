import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";
import { Icons } from "./Icons";

export function Button({ value, secondary = false, name }) {
	return (
		<TouchableOpacity
			style={secondary ? styles.button_secondary : styles.button}>
			{secondary ? (
				<Icons name={name} />
			) : (
				<Text style={secondary ? styles.text_black : styles.text}>
					{value}
				</Text>
			)}
		</TouchableOpacity>
	);
}
