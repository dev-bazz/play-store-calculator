import React from "react";

import { AppState, Theme, useAppState, useCalculator } from "../hook";
import Calculator from "./Calculator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function index() {
	return (
		<Theme>
			<AppState>
				<Calculator />
			</AppState>
		</Theme>
	);
}
