import { View, Text } from "react-native";
import { G, Path, ClipPath, Defs, Svg } from "react-native-svg";
import React from "react";

export function Icons({ name }) {
	switch (name) {
		case "divide":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G clipPath="url(#a)">
						<Path
							stroke="#282B34"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 16.5h22"
						/>
						<Path
							fill="#282B34"
							d="M16 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 26.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
						/>
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		case "multiply":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G
						stroke="#282B34"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="m25 7.5-18 18M25 25.5 7 7.5" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		case "plus":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G
						stroke="#282B34"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="M5 16.5h22M16 5.5v22" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		case "minus":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G clipPath="url(#a)">
						<Path
							stroke="#22252E"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 16.5h22"
						/>
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		case "equal":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G
						stroke="#282B34"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="M5 20.5h22M5 12.5h22" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		case "clear":
			return (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={33}
					fill="none">
					<G
						stroke="#282B34"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						clipPath="url(#a)">
						<Path d="M14 28.5a11.9 11.9 0 0 1-3.625-6" />
						<Path d="M24 19.5c0 3.959 1.664 7.375 5 9H7.625A12.956 12.956 0 0 1 4 19.5c0-3.526 1.404-6.361 3.684-8.705a1 1 0 0 1 1.084-.226l3.172 1.285a2.002 2.002 0 0 0 2.603-1.125l2.625-6.639c.518-1.25 1.933-1.915 3.203-1.441a2.5 2.5 0 0 1 1.439 3.3l-2.669 6.637a2 2 0 0 0 1.117 2.595l3.117 1.23a1 1 0 0 1 .625.929v2.16ZM5.491 13.696 24.1 21.14" />
					</G>
					<Defs>
						<ClipPath id="a">
							<Path
								fill="#fff"
								d="M0 .5h32v32H0z"
							/>
						</ClipPath>
					</Defs>
				</Svg>
			);
		default:
			return <Text>No {name}</Text>;
	}
}
