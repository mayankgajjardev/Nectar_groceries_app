import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppColors from "../constants/AppColors";
import { fontSp, height } from "../utils/AppDimension";
import PropTypes from "prop-types";
import { FontFamily } from "../constants/AppEnums";

export default function AppButton({
	title = "Button",
	onPress = () => {},
	backgroundColor = AppColors.primary,
	textColor = AppColors.white,
	fontSize = fontSp(16),
	borderRadius = 10,
	heightVal = height(7),
	marginHorizontal = 20,
	disabled = false,
	style,
	textStyle,
}) {
	return (
		<TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.7}>
			<View
				style={[
					{
						backgroundColor: disabled ? AppColors.gray : backgroundColor,
						height: heightVal,
						borderRadius,
						marginHorizontal,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: borderRadius,
					},
					style,
				]}
			>
				<Text
					style={[
						{
							fontFamily: FontFamily.medium,
							color: textColor,
							fontSize,
						},
						textStyle,
					]}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

AppButton.prototype = {
	title: PropTypes.string,
	onPress: PropTypes.func,
	backgroundColor: PropTypes.string,
	textColor: PropTypes.string,
	fontSize: PropTypes.number,
	borderRadius: PropTypes.number,
	heightVal: PropTypes.number,
	marginHorizontal: PropTypes.number,
	disabled: PropTypes.bool,
	style: PropTypes.object,
	textStyle: PropTypes.object,
};
