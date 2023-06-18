import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export function Row({ children }) {
	return <View style={styles.row}>{children}</View>;
}
