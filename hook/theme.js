import { View, Text } from "react-native";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// This function returns a stateful object that represents the current theme of the application and a function to update it.
export function useThemeState() {
	// The initial value of the theme is "dark".
	const [theme, setTheme] = useState("dark");

	// Return an object with the current value of the theme and the function to update it.
	return {
		theme,
		setTheme,
	};
}

// This function takes a children prop and returns a component that provides the theme context to its children.
export function Theme({ children }) {
	// Here we use the useThemeState hook to get the current theme state and provide it to the ThemeContext.
	return (
		<ThemeContext.Provider value={useThemeState()}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
