import React from "react";

import { AppState, Theme, useAppState, useCalculator } from "../hook";
import Calculator from "./Calculator";

export default function index() {
	return (
		<Theme>
			<AppState>
				<Calculator />
			</AppState>
		</Theme>
	);
}
