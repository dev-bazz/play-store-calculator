import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, styles } from "../constants";
import { StatusBar } from "expo-status-bar";

export default function index() {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 20,
					justifyContent: "flex-end",
					alignItems: "flex-end",
				}}>
				<Text
					style={{
						color: COLORS.neutral.white,
						marginBottom: 0,
						fontSize: 24,
					}}>
					Previous
				</Text>
				<Text
					style={{
						color: COLORS.active,
						marginBottom: 46,
						fontSize: 48,
					}}>
					200,000
				</Text>
			</View>
			<View
				style={{
					flex: 1.5,
					backgroundColor: COLORS.neutral.black_light,
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					paddingHorizontal: 20,
				}}></View>
			<StatusBar
				style="auto"
				hidden={true}
				animated={true}
			/>
		</SafeAreaView>
	);
}
