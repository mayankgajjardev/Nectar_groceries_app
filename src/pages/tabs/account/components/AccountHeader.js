import { View, Text } from "react-native";
import React from "react";
import CustomImage from "../../../../components/CustomImage";
import AppData from "../../../../data/AppData";
import {
	fontSp,
	fullWidth,
	height,
	width,
} from "../../../../utils/AppDimension";
import { FontFamily } from "../../../../constants/AppEnums";
import AppColors from "../../../../constants/AppColors";
import Divider from "../../../../components/Divider";
import Spacer from "../../../../components/Spacer";

export default function AccountHeader() {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					gap: 16,
					alignItems: "center",
					justifyContent: "flex-start",
					paddingLeft: width(6),
					paddingTop: height(3),
				}}
			>
				<CustomImage
					image={AppData.person}
					height={height(10)}
					width={height(10)}
					radius={50}
					contentFit='cover'
				/>
				<View>
					<Text
						style={{
							fontFamily: FontFamily.bold,
							fontSize: fontSp(18),
						}}
					>
						Mayank Sureliya
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.regular,
							fontSize: fontSp(14),
							color: AppColors.offWhite1,
						}}
					>
						mayank@gmail.com
					</Text>
				</View>
			</View>
			<Spacer height={height(3)} />
			<Divider height={1} width={fullWidth} color={AppColors.border} />
		</>
	);
}
