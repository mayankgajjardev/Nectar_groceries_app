import { View, Text } from "react-native";
import React from "react";
import AppStyles from "../constants/AppStyles";
import { fullWidth, height } from "../utils/AppDimension";
import AppColors from "../constants/AppColors";
import Divider from "./Divider";
import Spacer from "./Spacer";

export default function AppBar({ title, hideBorder = false }) {
	return (
		<>
			<Text style={AppStyles.headerText}>{title}</Text>
			{!hideBorder && (
				<>
					<Divider height={1.5} width={fullWidth} color={AppColors.border} />
					<Spacer height={height(1)} />
				</>
			)}
		</>
	);
}
