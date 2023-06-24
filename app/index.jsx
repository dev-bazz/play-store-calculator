import React, { useCallback } from "react";
import { AppState, Theme, useAppState, useCalculator } from "../hook";
import Calculator from "./Calculator";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

SplashScreen.preventAutoHideAsync();

export default function index() {
	// const [loadFonts] = useFonts({
	// 	"Prompt-Black": require("../assets/fonts/Prompt-Black.ttf"),
	// 	"Prompt-Bold": require("../assets/fonts/Prompt-Bold.ttf"),
	// 	"Prompt-Semibold": require("../assets/fonts/Prompt-Semibold.ttf"),
	// 	"Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
	// 	"Prompt-Regular": require("../assets/fonts/Prompt-Regular.ttf"),
	// 	"Prompt-Light": require("../assets/fonts/Prompt-Light.ttf"),
	// });

	// const onLayoutRootView = useCallback(async () => {
	// 	if (loadFonts) {
	// 		await SplashScreen.hideAsync();
	// 	}
	// }, [loadFonts]);

	// if (!fontsLoaded) {
	// 	return null;
	// }

	// const loadFonts = async () => {
	// 	await Promise.all([
	// 		Asset.loadAsync([
	// 			require("./assets/fonts/Prompt-Black.ttf"),
	// 			require("./assets/fonts/Prompt-Bold.ttf"),
	// 			require("./assets/fonts/Prompt-Semibold.ttf"),
	// 			require("./assets/fonts/Prompt-Medium.ttf"),
	// 			require("./assets/fonts/Prompt-Regular.ttf"),
	// 			require("./assets/fonts/Prompt-Light.ttf"),
	// 		]),
	// 		Font.loadAsync({
	// 			"Prompt-Black": require("./assets/fonts/Prompt-Black.ttf"),
	// 			"Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
	// 			"Prompt-Semibold": require("./assets/fonts/Prompt-Semibold.ttf"),
	// 			"Prompt-Medium": require("./assets/fonts/Prompt-Medium.ttf"),
	// 			"Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
	// 			"Prompt-Light": require("./assets/fonts/Prompt-Light.ttf"),
	// 		}),
	// 	]);
	// };

	return (
		<Theme>
			<AppState>
				<Calculator layout={() => console.log("layout")} />
			</AppState>
		</Theme>
	);
}
