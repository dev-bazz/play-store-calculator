import React, { useCallback, useEffect, useState } from "react";
import { AppState, Theme, useAppState, useCalculator } from "../hook";
import Calculator from "./App";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import { loadAsync } from "expo-font";

preventAutoHideAsync();
export default function index() {
	console.log("hello");
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await loadAsync({
					"Prompt-Bold": require("../assets/fonts/Prompt-Bold.ttf"),
					"Prompt-SemiBold": require("../assets/fonts/Prompt-SemiBold.ttf"),
				});
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}
	return (
		<Theme>
			<AppState>
				<Calculator layout={onLayoutRootView} />
			</AppState>
		</Theme>
	);
}
