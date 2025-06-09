import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppColors from "../../../constants/AppColors";
import { FontFamily } from "../../../constants/AppEnums";
import { fontSp } from "../../../utils/AppDimension";

export default function CheckBoxField({ title, isSelected, onPress }) {
	const bouncyCheckboxRef = useRef(null);

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				gap: 16,
				paddingVertical: 6,
			}}
		>
			<BouncyCheckbox
				ref={bouncyCheckboxRef}
				isChecked={isSelected}
				size={23}
				style={{
					width: 23,
				}}
				iconStyle={{
					borderRadius: 8,
				}}
				innerIconStyle={{
					borderRadius: 8,
				}}
				fillColor={AppColors.primary}
				onPress={(isChecked) => {
					onPress(isChecked);
				}}
			/>
			<TouchableOpacity
				onPress={() => {
					bouncyCheckboxRef.current?.onCheckboxPress();
				}}
			>
				<Text
					style={{
						fontFamily: FontFamily.semiBold,
						fontSize: fontSp(14),
					}}
				>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
