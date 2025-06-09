import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontFamily } from "../../../../constants/AppEnums";
import AppColors from "../../../../constants/AppColors";
import { fontSp } from "../../../../utils/AppDimension";

export default function SectionHeader({ title, onPress }) {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				marginHorizontal: 20,
				alignItems: "center",
			}}
		>
			<Text style={{ fontSize: fontSp(16), fontFamily: FontFamily.semiBold }}>
				{title}
			</Text>
			<TouchableOpacity onPress={onPress}>
				<Text
					style={{
						fontFamily: FontFamily.semiBold,
						color: AppColors.primary,
						fontSize: fontSp(12),
					}}
				>
					See All
				</Text>
			</TouchableOpacity>
		</View>
	);
}
