import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../constants";

export default function index() {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.text_global}>index Home</Text>
			</View>
		</SafeAreaView>
	);
}
