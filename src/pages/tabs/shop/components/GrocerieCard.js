import { View, Text } from "react-native";
import React from "react";
import AppColors from "../../../../constants/AppColors";
import CustomImage from "../../../../components/CustomImage";
import AppAssets from "../../../../constants/AppAssets";
import { fontSp, height, width } from "../../../../utils/AppDimension";
import { FontFamily } from "../../../../constants/AppEnums";

export default function GrocerieCard({ item, onPress }) {
	return (
		<View
			style={{
				backgroundColor: item.color,
				borderRadius: 16,
				width: width(55),
				height: height(13),
				justifyContent: "center",
				borderRadius: 16,
				paddingHorizontal: 16,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 16,
				}}
			>
				<CustomImage
					image={item.image}
					height={height(7)}
					width={height(7)}
					radius={100}
					contentFit={"cover"}
				/>
				<Text style={{ fontSize: fontSp(16), fontFamily: FontFamily.semiBold }}>
					{item.title}
				</Text>
			</View>
		</View>
	);
}
