import { View, Text } from "react-native";
import React from "react";

export default function Spacer({ height, width, color }) {
	return (
		<View
			style={{
				height: height,
				width,
				backgroundColor: color, 
			}}
		/>
	);
}
