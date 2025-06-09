import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fontSp, fullWidth, height } from "../../../../utils/AppDimension";
import CustomImage from "../../../../components/CustomImage";
import { FontFamily } from "../../../../constants/AppEnums";
import Spacer from "../../../../components/Spacer";

export default function CategoryCard({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					height: height(25),
					width: fullWidth / 2 - 25,
					borderWidth: 2,
					borderRadius: 16,
					flex: 1,
					backgroundColor: item.color,
					justifyContent: "center",
					alignItems: "center",
					borderColor: item.color,
				}}
			>
				<CustomImage
					image={item.image}
					height={height(11)}
					width={height(11)}
					radius={100}
					contentFit='cover'
				/>
				<Spacer height={height(3)} />
				<Text
					style={{
						fontFamily: FontFamily.semiBold,
						fontSize: fontSp(15),
						textAlign: "center",
						paddingHorizontal: 10,
					}}
				>
					{item.title}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
