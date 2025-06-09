import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({
	children,
	barStyle = "dark", // "light" | "dark"
	backgroundColor = "#ffff",
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ backgroundColor, flex: 1 }}>
			<View style={{ height: insets.top, backgroundColor }} />
			<View
				style={{
					flex: 1,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
					backgroundColor,
				}}
			>
				<StatusBar style={barStyle} translucent />
				{children}
			</View>
		</View>
	);
};

export default React.memo(ScreenWrapper);
