import { View, Text, TextInput } from "react-native";
import React from "react";
import { fontSp, height, width } from "../../../../utils/AppDimension";
import { FontFamily } from "../../../../constants/AppEnums";
import Octicons from "@expo/vector-icons/Octicons";
import AppColors from "../../../../constants/AppColors";

export default function SearchBar({ marginHorizontal }) {
	return (
		<View style={{ flexDirection: "row", justifyContent: "center" }}>
			<Octicons
				name='search'
				size={20}
				color='black'
				style={{
					position: "absolute",
					left: marginHorizontal ? width(3) : width(8.2),
					top: 14,
					zIndex: 1,
					color: AppColors.placeholder,
				}}
			/>
			<TextInput
				placeholder='Search Store'
				placeholderTextColor={AppColors.placeholder}
				style={{
					flex: 1,
					fontFamily: FontFamily.semiBold,
					fontSize: fontSp(14),
					height: height(6),
					borderRadius: 16,
					paddingLeft: width(10),
					marginHorizontal: marginHorizontal || 20,
					backgroundColor: AppColors.secondary,
				}}
			/>
		</View>
	);
}
