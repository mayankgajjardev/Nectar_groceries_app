import { View, Text } from "react-native";
import React from "react";

export default function Divider({ height, width, color }) {
	return (
		<View
			style={{ height: height, width: width, backgroundColor: color }}
		></View>
	);
}
