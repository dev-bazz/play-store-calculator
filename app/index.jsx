import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, styles } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Button, Row, Icons } from "../components";

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
					paddingTop: 24,
					paddingBottom: 28,
					rowGap: 14,
				}}>
				<Row>
					<Button value={"00"} />
					<Button value={"AC"} />
					<Button value={"%"} />
					<Button
						name={"divide"}
						secondary={true}
					/>
				</Row>
				<Row>
					<Button value={"7"} />
					<Button value={"8"} />
					<Button value={"9"} />
					<Button
						name={"multiply"}
						secondary={true}
					/>
				</Row>
				<Row>
					<Button value={"4"} />
					<Button value={"5"} />
					<Button value={"6"} />
					<Button
						name={"minus"}
						secondary={true}
					/>
				</Row>
				<Row>
					<Button value={"1"} />
					<Button value={"2"} />
					<Button value={"3"} />
					<Button
						name={"plus"}
						secondary={true}
					/>
				</Row>
				<Row>
					<Button
						name={"clear"}
						secondary={true}
					/>
					<Button value={"0"} />
					<Button value={"."} />
					<Button
						name={"equal"}
						secondary={true}
					/>
				</Row>
			</View>
			<StatusBar
				style="auto"
				hidden={true}
				animated={true}
			/>
		</SafeAreaView>
	);
}
