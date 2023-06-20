import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack initialRouteName="index">
			<Stack.Screen
				name="index"
				options={{
					headerTitle: "Calculator",

					headerShown: false,

					headerTitleAlign: "center",
				}}
			/>
		</Stack>
	);
};

export default Layout;
