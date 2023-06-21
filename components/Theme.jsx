import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { G, Path, ClipPath, Defs, Svg } from "react-native-svg";
import { useTheme } from "../hook";

export function Theme() {
	const { theme, setTheme } = useTheme();

	console.debug("🪲 🪲 file: Theme.jsx:10 :", theme);
	const bg = () =>
		theme === "light"
			? COLORS.neutral.light_gery
			: COLORS.neutral.black_light;
	return (
		<View
			style={{
				position: "absolute",
				right: "40%",
				left: "40%",
				top: 20,
				flexDirection: "row",
				gap: 16,
				backgroundColor: bg(),
				alignContent: "center",
				justifyContent: "center",
				paddingHorizontal: 20,
				paddingVertical: 10,
				borderRadius: 32,
			}}>
			<Pressable onPress={() => setTheme("light")}>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={32}
					fill="none">
					<G
						stroke={theme === "light" ? COLORS.neutral.black_b : "#A7A7A7"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="M16 5V2M16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8 8 6 6M8 24l-2 2M24 8l2-2M24 24l2 2M5 16H2M16 27v3M27 16h3" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 0h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			</Pressable>
			<Pressable onPress={() => setTheme("dark")}>
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={32}
					fill="none">
					<G
						stroke={theme === "dark" ? "#fff" : "#A7A7A7"}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="M26 15V9M29 12h-6M20 4v4M22 6h-4M26.336 19.773A12.009 12.009 0 0 1 12.227 5.664a11 11 0 1 0 14.11 14.109Z" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 0h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			</Pressable>
		</View>
	);
}
