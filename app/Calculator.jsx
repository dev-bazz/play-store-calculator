import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { COLORS, styles } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Button, Row, Icons, Theme } from "../components";
import { useAppState, useCalculator, useTheme } from "../hook";

export default function Calculator({ layout }) {
	const { firstInputs, secondInputs, operator } = useAppState();
	const { theme } = useTheme();
	let displayFont = 0;
	const bg = () =>
		theme === "light"
			? COLORS.neutral.light_gery
			: COLORS.neutral.black_light;
	const styleF = {
		color: COLORS.active,
		marginBottom: 46,
		fontSize: 48,
	};
	useEffect(() => {
		function getFont() {
			return firstInputs.length;
		}
		displayFont = getFont();
	}, [firstInputs, secondInputs]);
	const firstNumberDisplay = () => {
		if (firstInputs === "") {
			return <Text style={styleF}>{"0"}</Text>;
		}
		if (firstInputs.length >= 10) {
			return (
				<Text style={[styleF, { fontSize: 42 - firstInputs.length }]}>
					{firstInputs}
				</Text>
			);
		}
		if (firstInputs.length > 0) {
			return <Text style={[styleF]}>{firstInputs}</Text>;
		}

		return <Text style={styleF}>{firstInputs}</Text>;
	};

	const secondNumberDisplay = () => {
		if (secondInputs.length >= 10) {
			return (
				<Text
					style={
						theme == "dark"
							? historyFontStyle
							: [
									historyFontStyle,
									{
										color: COLORS.neutral.black_b,
										fontSize: 42 - secondInputs.length,
									},
							  ]
					}>
					{secondInputs} {operator} {firstInputs}
				</Text>
			);
		}

		if (secondInputs.length > 0) {
			return (
				<Text
					style={
						theme == "dark"
							? historyFontStyle
							: [historyFontStyle, { color: COLORS.neutral.black_b }]
					}>
					{secondInputs} {operator} {firstInputs}
				</Text>
			);
		}

		return (
			<Text
				style={
					theme == "dark"
						? historyFontStyle
						: [historyFontStyle, { color: COLORS.neutral.black_b }]
				}>
				{secondInputs} {operator} {firstInputs}
			</Text>
		);
	};

	const historyFontStyle = {
		color: COLORS.neutral.white,
		marginBottom: 0,
		fontSize: 24,
	};

	return (
		<SafeAreaView
			style={
				theme === "dark"
					? styles.container
					: [styles.container, { backgroundColor: COLORS.neutral.white }]
			}
			onLayout={layout}>
			<View
				style={{
					flex: 1,
					paddingHorizontal: 20,
					justifyContent: "flex-end",
					alignItems: "flex-end",
					position: "relative",
				}}>
				<Theme />
				<View>{secondNumberDisplay()}</View>
				<View>{firstNumberDisplay()}</View>
			</View>
			<View
				style={{
					flex: 1.5,
					backgroundColor: bg(),
					borderTopRightRadius: 30,
					borderTopLeftRadius: 30,
					paddingHorizontal: 20,
					paddingTop: 32,
					paddingBottom: 0,
					rowGap: 14,
				}}>
				<Row>
					<Button value={"00"} />
					<Button
						value={"Clear"}
						name={"clear"}
					/>
					<Button value={"%"} />
					<Button
						name={"divide"}
						secondary={true}
						value={"/"}
					/>
				</Row>
				<Row>
					<Button value={"7"} />
					<Button value={"8"} />
					<Button value={"9"} />
					<Button
						name={"multiply"}
						secondary={true}
						value={"*"}
					/>
				</Row>
				<Row>
					<Button value={"4"} />
					<Button value={"5"} />
					<Button value={"6"} />
					<Button
						name={"minus"}
						secondary={true}
						value={"-"}
					/>
				</Row>
				<Row>
					<Button value={"1"} />
					<Button value={"2"} />
					<Button value={"3"} />
					<Button
						name={"plus"}
						secondary={true}
						value={"+"}
					/>
				</Row>
				<Row>
					<Button
						name={"back"}
						secondary={true}
						value={"←"}
					/>
					<Button value={"0"} />
					<Button value={"."} />
					<Button
						name={"equal"}
						secondary={true}
						value={"="}
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
